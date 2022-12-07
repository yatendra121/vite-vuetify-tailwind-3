import { customRef } from 'vue'

export function useDebouncedRef(value: any, delay = 200) {
    let timeout: any
    return customRef((track: any, trigger: any) => {
        return {
            get() {
                track()
                return value
            },
            set(newValue: any) {
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    value = newValue
                    trigger()
                }, delay)
            }
        }
    })
}
