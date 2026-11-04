import { defineStore } from 'pinia'

export type ConfirmState = {
    show: boolean
    title: string
    description: string
    confirmText?: string
    callback: () => void | Promise<void>
}

export const useConfirmStore = defineStore('confirm', {
    state: () =>
        ({
            show: false,
            title: 'Confirmation',
            description: 'Are you sure?',
            confirmText: 'Confirm',
            callback: () => console.log('Not initialized yet.')
        }) as ConfirmState,
    actions: {
        setConfirmValues(item: ConfirmState) {
            this.title = item.title
            this.description = item.description
            this.confirmText = item.confirmText ?? 'Confirm'
            this.callback = item.callback
        },
        showDialog() {
            this.show = true
        },
        close() {
            this.show = false
        }
    }
})
