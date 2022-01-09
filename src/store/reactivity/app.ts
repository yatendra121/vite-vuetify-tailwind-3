import { defineStore } from 'pinia'

export type AppState = {
    sidebar: boolean
    theme: string
    color: string
    image: string
    sidebarBackgroundColor: string
    [key: string]: any
}

export const useAppStore = defineStore({
    id: 'app',
    state: () =>
        ({
            sidebar: true,
            theme: 'light',
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
        }
    }
})
