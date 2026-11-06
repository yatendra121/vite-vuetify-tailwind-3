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
            // One page's failed requests all report the same error at once, and
            // queueing each would keep it on screen for far too long. Every other
            // message reports its own action, so it always takes a turn.
            const repeatedError =
                item.color === 'error' &&
                this.items.some(
                    ({ message, color }) =>
                        message === item.message && color === item.color
                )
            if (repeatedError) return
            this.items.push({ id: this.id++, ...item })
        },
        removeMessage(id: number) {
            this.items = this.items.filter((item) => item.id !== id)
        }
    }
})
