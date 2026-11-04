import { capitalize } from 'lodash'

export const getInitials = (name?: string | null) =>
    (name ?? '')
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
        .join('')

export function useStringRepository() {
    return { toCapitalize: capitalize }
}
