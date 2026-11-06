import router from './index'

/**
 * Go to the previous page of this app, or the dashboard when there isn't one.
 *
 * `window.history.length` can't answer this: it also counts pages from other
 * sites, and a tab opened straight on a form has no page here to return to.
 */
export const goBack = () => {
    if (router.options.history.state.back) return router.back()
    return router.push({ name: 'dashboard' })
}
