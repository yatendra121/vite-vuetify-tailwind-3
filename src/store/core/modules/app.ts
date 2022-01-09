const app = {
    state: {
        sidebar: true,
        color: 'secondary',
        image: 'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
        sidebarBackgroundColor: 'rgba(27, 27, 27, 0.74)'
    },
    mutations: {
        sidebar: (state) => {
            state.sidebar = !state.sidebar
        }
    },
    actions: {
        sidebar: ({ commit }) => {
            commit('sidebar')
        }
    }
}

export default app
