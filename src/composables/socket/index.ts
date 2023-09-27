import socket from '@/plugins/socket'

/**
 * Socket Reposotory
 */
export function useSocketRepository() {
    /**
     * Create socket listener
     */
    const useOnSocket = (eventName: string, callback: Function | any) => {
        socket.on(eventName, callback)

        const offSocketEvent = () => {
            socket.off(eventName)
        }

        return offSocketEvent
    }

    /**
     * Emit data on socket event
     */
    const useEmitSocket = (eventName: string, data: any) => {
        console.log({ eventName, data })
        socket.emit(eventName, data)
    }

    /**
     * Off all socket events
     */
    const useOffSocket = () => {
        socket.off()
    }

    /**
     * default socket off event
     */
    const defaultSocketOffEvent = () => {
        console.error('Not assigned any socket off event')
    }

    return {
        useOnSocket,
        useEmitSocket,
        useOffSocket,
        defaultSocketOffEvent,
        socket
    }
}
