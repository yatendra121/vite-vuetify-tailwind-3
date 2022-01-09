import portalsConfigs from '../../portals'

export type PortalConfig = {
    VUE_APP_BASE_URL?: string | undefined
    VUE_APP_DOMAIN_PREFIX?: string | undefined
    VUE_APP_OUTPUT_DIR?: string | undefined
    VUE_APP_API_BASE_URL?: string | undefined
    VUE_APP_WEB_BASE_URL?: string | undefined
    VUE_APP_PORT?: number | undefined
    VUE_APP_CLIENT_ID?: string | undefined
    VUE_APP_CHECK_ESLINT?: string | undefined
    VUE_APP_ADD_PWA?: string | undefined
    VUE_APP_SOCKET_URL?: string | undefined
}

/**
 * Class for interacting with portal
 *
 * @category RPCAPIs
 *
 * @remarks
 */
export class Portal {
    /**
     * @ignore
     */
    private portalConfig: PortalConfig = {}

    constructor(portal: string = 'admin') {
        //@ts-ignore
        this.portalConfig = portalsConfigs[portal]
    }

    /**
     * Gets the base url.
     * @returns url
     */
    public getBaseUrl = (): string => {
        return this.portalConfig.VUE_APP_BASE_URL ?? 'localhost'
    }

    /**
     * Gets the asset url.
     * @returns url
     */
    public getAssetsUrl = (): string | undefined => {
        return this.portalConfig.VUE_APP_DOMAIN_PREFIX
    }

    /**
     * Gets the domain prifix.
     * @returns string
     */
    public getDomianPrefix = (): string | undefined => {
        return this.portalConfig.VUE_APP_DOMAIN_PREFIX
    }

    /**
     * Gets the output dir.
     * @returns string
     */
    public getOutputDir = (): string | undefined => {
        return this.portalConfig.VUE_APP_OUTPUT_DIR
    }

    /**
     * Gets the api base url.
     * @returns url
     */
    public getApiBaseUrl = (): string | undefined => {
        return this.portalConfig.VUE_APP_API_BASE_URL
    }

    /**
     * Gets the web base url.
     * @returns url
     */
    public getWebBaseUrl = (): string | undefined => {
        return this.portalConfig.VUE_APP_WEB_BASE_URL
    }

    /**
     * Gets the base url.
     * @returns url
     */
    public getPort = (): number | undefined => {
        return this.portalConfig.VUE_APP_PORT
    }

    /**
     * Gets the client id.
     * @returns string
     */
    public getClientId = (): string => {
        return this.portalConfig.VUE_APP_CLIENT_ID ?? ''
    }

    /**
     * Gets the client id.
     * @returns string
     */
    public getRouteBaseUrl = (): string | undefined => {
        return '/'
    }

    /**
     * Get the cookie prefix.
     * @returns string
     */
    public getCookiePrefix = (): string => {
        return ''
    }

    /**
     * Get the check eslint.
     * @returns string
     */
    public getCheckESlint = (): boolean => {
        return this.portalConfig.VUE_APP_CHECK_ESLINT !== 'false'
    }

    /**
     * Get the check eslint.
     * @returns string
     */
    public getAddPWA = (): boolean => {
        return this.portalConfig.VUE_APP_ADD_PWA !== 'false'
    }

    /**
     * Get the check eslint.
     * @returns string
     */
    public getSocketUrl = (): string => {
        return this.portalConfig.VUE_APP_SOCKET_URL ?? ''
    }
}
