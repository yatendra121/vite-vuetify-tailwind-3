import dayjs from 'dayjs'

export const useDateRepository = () => {
    const convertFormat = (
        val: Date | string | null | undefined,
        format: string
    ) => (val ? dayjs(val).format(format) : '')

    const toDateTime = (val: Date | string | null | undefined) =>
        convertFormat(val, 'DD MMM YYYY, hh:mm A')

    return { toDateTime }
}
