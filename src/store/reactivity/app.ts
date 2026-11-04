import { defineStore } from 'pinia'
import { useCustomizerStore } from './customizer'

export type AppState = {
    sidebar: boolean
    loading: boolean
    color: string
    image: string
    sidebarBackgroundColor: string
    sidebarWidth: number
}

export const useAppStore = defineStore('app', {
    state: () =>
        ({
            sidebar: true,
            loading: false,
            color: 'primary',
            image: 'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
            sidebarBackgroundColor: 'rgba(27, 27, 27, 0.74)',
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
