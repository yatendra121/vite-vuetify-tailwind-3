import { defineStore } from 'pinia'

export interface MessageItem {
    id: number
    message: string
    color: string
}

export interface MessageItemWithoutId {
    message: string
    color: string
}

export type MessageState = {
    items: MessageItem[]
    id: number
}

export const useMessageStore = defineStore('message', {
    state: () =>
        ({
            items: [],
            id: 1
        }) as MessageState,
    getters: {
        itemsArray(): MessageItem[] {
            return this.items
        }
    },
    actions: {
        addMessage(item: MessageItemWithoutId) {
            // TEMP DIAGNOSTIC — remove once snackbar bug is found
            // eslint-disable-next-line no-console
            console.log('[msg-debug] addMessage called', {
                item,
                storeId: (this as any).$id,
                piniaId: (this as any)._p?.$state ? 'has-pinia' : 'no-pinia',
                itemsBefore: [...this.items]
            })
            this.items.push({ id: this.id++, ...item })
            // eslint-disable-next-line no-console
            console.log('[msg-debug] addMessage done, items:', [...this.items])
        },
        removeMessage() {
            this.items.splice(0, 1)
        }
    }
})
