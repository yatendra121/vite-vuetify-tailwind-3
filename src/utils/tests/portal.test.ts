import { Portal } from '../portal'
import portalsConfigs from '../../../portals'
import { describe, beforeEach, it, expect } from 'vitest'

describe('Portal', () => {
    let portal: Portal
    const portalConfig = portalsConfigs.admin

    beforeEach(() => {
        portal = Portal.getInstance()
    })

    describe('getBaseUrl', () => {
        it('should return base url', () => {
            expect(portal.getBaseUrl()).toBe(portalConfig.VUE_APP_BASE_URL)
        })
    })

    // describe('getAssetsUrl', () => {
    //     it('should return assets url', () => {
    //         expect(portal.getAssetsUrl()).toBe(portalConfig.VUE_APP_BASE_URL)
    //     })
    // })
})
