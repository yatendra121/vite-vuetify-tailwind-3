import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMessageStore } from '@/store/reactivity/message'

describe('message queue', () => {
    beforeEach(() => setActivePinia(createPinia()))

    const texts = () => useMessageStore().items.map(({ message }) => message)

    it('keeps messages in arrival order', () => {
        const store = useMessageStore()
        store.addMessage({ message: 'A', color: 'success' })
        store.addMessage({ message: 'B', color: 'warning' })
        store.addMessage({ message: 'C', color: 'error' })
        expect(texts()).toEqual(['A', 'B', 'C'])
    })

    it('queues repeated success and warning messages', () => {
        const store = useMessageStore()
        store.addMessage({ message: 'Saved', color: 'success' })
        store.addMessage({ message: 'Saved', color: 'success' })
        store.addMessage({ message: 'Careful', color: 'warning' })
        store.addMessage({ message: 'Careful', color: 'warning' })
        expect(texts()).toEqual(['Saved', 'Saved', 'Careful', 'Careful'])
    })

    it('shows an identical error once while it is still queued', () => {
        const store = useMessageStore()
        store.addMessage({ message: 'Failed', color: 'error' })
        store.addMessage({ message: 'Failed', color: 'error' })
        store.addMessage({ message: 'Other failure', color: 'error' })
        expect(texts()).toEqual(['Failed', 'Other failure'])

        store.removeMessage(store.items[0].id)
        store.addMessage({ message: 'Failed', color: 'error' })
        expect(texts()).toEqual(['Other failure', 'Failed'])
    })

    it('removes only the message that finished', () => {
        const store = useMessageStore()
        store.addMessage({ message: 'A', color: 'success' })
        store.addMessage({ message: 'B', color: 'success' })
        store.addMessage({ message: 'C', color: 'success' })
        store.removeMessage(store.items[1].id)
        expect(texts()).toEqual(['A', 'C'])
    })

    it('ignores a message that has already gone', () => {
        const store = useMessageStore()
        store.addMessage({ message: 'A', color: 'success' })
        store.removeMessage(999)
        expect(texts()).toEqual(['A'])
    })
})
