/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts() {
    const { load } = await import(
        // @ts-ignore
        /* webpackChunkName: "webfontloader" */ 'webfontloader'
    )

    load({
        google: {
            families: ['Roboto:100,300,400,500,700,900&display=swap']
        }
    })
}
