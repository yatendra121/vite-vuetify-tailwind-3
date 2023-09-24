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

export const hexToRgb = (hex: string) => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

    hex = hex.replace(
        shorthandRegex,
        (m: string, r: string, g: string, b: string) => {
            return r + r + g + g + b + b
        }
    )

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

    return result
        ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
              result[3],
              16
          )}`
        : null
}
