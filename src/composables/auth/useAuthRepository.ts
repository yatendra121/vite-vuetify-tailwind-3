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

const setTokens = (token: TokenPair) => {
    const domain = currentPortal.getBaseUrl()
    removeToken()
    removeRefreshToken()
    setToken(token.access_token, '/', domain)
    setRefreshToken(token.refresh_token, '/', domain)
}

const removeTokens = () => {
    removeToken()
    removeRefreshToken()
}

const setToken = (token: string, path: string, domain: string) => {
    return Cookies.set(TokenKey, token, { expires: 30, path, domain })
}

const setRefreshToken = (token: string, path: string, domain: string) => {
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
