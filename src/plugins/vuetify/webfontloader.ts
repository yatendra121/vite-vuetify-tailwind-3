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
            families: ['DM Sans:400,500,600,700', 'Sora:600,700&display=swap']
        }
    })
}
