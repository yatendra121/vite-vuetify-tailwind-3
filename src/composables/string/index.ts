import { capitalize } from 'lodash'

export function useStringRepository() {
    return { toCapitalize: capitalize }
}
