import { defineStore } from 'pinia'
import { useCustomizerStore } from './customizer'

export type AppState = {
    sidebar: boolean
    loading: boolean
    sidebarWidth: number
}

export const useAppStore = defineStore('app', {
    state: () =>
        ({
            sidebar: true,
            loading: false,
            sidebarWidth: 256
        }) as AppState,
    getters: {
        sidebarValue(): boolean {
            return this.sidebar
        },

        sidebarWidthValue(): number {
            return this.sidebarWidth
        },
        theme(): string {
            return useCustomizerStore().resolvedTheme
        },
        themeValue(): string {
            return useCustomizerStore().resolvedTheme
        },
        loadingValue(): boolean {
            return this.loading
        }
    },
    actions: {
        changeSidebar() {
            this.sidebar = !this.sidebar
        },
        updateSidebar(val: boolean) {
            this.sidebar = val
        },
        changeTheme() {
            const customizer = useCustomizerStore()
            customizer.update(
                'mode',
                customizer.resolvedTheme === 'light' ? 'dark' : 'light'
            )
        },
        startLoading() {
            this.loading = true
        },
        finishLoading() {
            this.loading = false
        }
    }
})
