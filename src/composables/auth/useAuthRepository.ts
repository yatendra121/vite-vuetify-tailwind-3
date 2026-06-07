import Cookies from 'js-cookie'
import { Portal } from '@/utils/portal'

const currentPortal = Portal.getInstance()
const prefix = currentPortal.getCookiePrefix()

const TokenKey = prefix + 'X-TOKEN'
const RefreshTokenKey = prefix + 'X-REFRESH-TOKEN'
const DeviceIdKey = 'DEVICE-ID'

type TokenPair = {
    access_token: string
    refresh_token: string
}

const getToken = () => Cookies.get(TokenKey)

const getRefreshToken = () => Cookies.get(RefreshTokenKey)

const getDeviceId = () => Cookies.get(DeviceIdKey)

/**
 * Convert the configured `VUE_APP_BASE_URL` (which is a full URL like
 * "https://example.com/") into a value valid for the `Set-Cookie`
 * `Domain` attribute (just a hostname). When the configured base
 * doesn't resolve to a hostname different from the current browser
 * host we return `undefined` so the browser uses the host of the
 * current page — that's what we want for `localhost` development and
 * also avoids cookies being silently dropped because the requested
 * domain doesn't match.
 */
const resolveCookieDomain = (): string | undefined => {
    const raw = currentPortal.getBaseUrl()
    if (!raw) return undefined
    let hostname = raw
    try {
        hostname = new URL(raw).hostname
    } catch {
        // Already a bare hostname.
    }
    if (!hostname || hostname === 'localhost') return undefined
    if (typeof window !== 'undefined' && hostname !== window.location.hostname) {
        // Configured domain isn't the host serving the page — the cookie
        // would be discarded by the browser. Fall back to the current host.
        return undefined
    }
    return hostname
}

const setTokens = (token: TokenPair) => {
    const domain = resolveCookieDomain()
    removeToken()
    removeRefreshToken()
    setToken(token.access_token, '/', domain)
    setRefreshToken(token.refresh_token, '/', domain)
}

const removeTokens = () => {
    removeToken()
    removeRefreshToken()
}

const setToken = (token: string, path: string, domain?: string) => {
    return Cookies.set(TokenKey, token, { expires: 30, path, domain })
}

const setRefreshToken = (token: string, path: string, domain?: string) => {
    return Cookies.set(RefreshTokenKey, token, { expires: 45, path, domain })
}

const setDeviceId = (deviceId: string) => {
    return Cookies.set(DeviceIdKey, deviceId, { expires: 365 })
}

const removeToken = () => Cookies.remove(TokenKey)

const removeRefreshToken = () => Cookies.remove(RefreshTokenKey)

const removeDeviceId = () => Cookies.remove(DeviceIdKey)

export {
    getToken,
    getRefreshToken,
    getDeviceId,
    setToken,
    setRefreshToken,
    setDeviceId,
    removeToken,
    removeRefreshToken,
    removeDeviceId,
    setTokens,
    removeTokens
}
