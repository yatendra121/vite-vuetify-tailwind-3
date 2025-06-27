import { defineStore } from 'pinia'

export type AppState = {
    sidebar: boolean
    theme: string
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
            theme: 'light',
            loading: false,
            color: 'primary',
            image: 'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
            sidebarBackgroundColor: 'rgba(27, 27, 27, 0.74)',
            sidebarWidth: 236
        }) as AppState,
    getters: {
        sidebarValue(): boolean {
            return this.sidebar
        },

        sidebarWidthValue(): number {
            return this.sidebarWidth
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
