import { defineStore } from 'pinia'

export type AppState = {
    sidebar: boolean
    theme: string
    loading: boolean
    color: string
    image: string
    sidebarBackgroundColor: string
}

export const useAppStore = defineStore({
    id: 'app',
    state: () =>
        ({
            sidebar: true,
            theme: 'light',
            loading: false,
            color: 'primary',
            image: 'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
            sidebarBackgroundColor: 'rgba(27, 27, 27, 0.74)'
        } as AppState),
    getters: {
        sidebarValue(): boolean {
            return this.sidebar
        },
        themeValue(): string {
            return this.theme
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
            this.theme = this.theme === 'light' ? 'dark' : 'light'
        },
        startLoading() {
            this.loading = true
        },
        finishLoading() {
            this.loading = false
        }
    }
})
