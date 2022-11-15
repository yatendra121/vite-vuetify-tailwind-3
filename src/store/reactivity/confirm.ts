import { defineStore } from 'pinia'

export type ConfirmState = {
    show: boolean
    title: string
    description: string
    callback: () => void | Promise<void>
}

export const useConfirmStore = defineStore({
    id: 'confirm',
    state: () =>
        ({
            show: false,
            title: 'Confirmation',
            description: 'Are you sure?',
            callback: () => console.log('Not initialized yet.')
        } as ConfirmState),
    actions: {
        setConfirmValues(item: ConfirmState) {
            this.title = item.title
            this.description = item.description
            this.callback = item.callback
        },
        showDialoag() {
            this.show = true
        },
        close(val: boolean) {
            this.show = false
        }
    }
})
