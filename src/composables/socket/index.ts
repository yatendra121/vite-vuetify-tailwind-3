import socket from '@/plugins/socket'

/**
 * Socket Reposotory
 */
export function useSocketRepository() {
    /**
     * Create socket listener
     */
    const useOnSocket = (eventName: string, callback: (...args: unknown[]) => void) => {
        socket.on(eventName, callback)

        const offSocketEvent = () => {
            socket.off(eventName)
        }

        return offSocketEvent
    }

    /**
     * Emit data on socket event
     */
    const useEmitSocket = (eventName: string, data: unknown) => {
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
        console.warn('Not assigned any socket off event')
    }

    return {
        useOnSocket,
        useEmitSocket,
        useOffSocket,
        defaultSocketOffEvent,
        socket
    }
}
