const getListSlotPropsType = <T>() => {
    interface SlotProps {
        items: T[]
        loadMore: () => void
        finished: boolean
        loading: boolean
    }
    return typeof('string')
}
