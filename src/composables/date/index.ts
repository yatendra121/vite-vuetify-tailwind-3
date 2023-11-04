import dayjs from 'dayjs'

export const useDateRepository = () => {
    const covertFormat = (val: Date | null, format: string) => {
        return dayjs(val).format(format)
    }

    const toDateTime = (val: Date | null) =>
        covertFormat(val, 'DD MMM YYYY hh:mm:ss')

    return { toDateTime }
}
