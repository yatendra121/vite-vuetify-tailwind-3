import socket from '@/plugins/socket'

/**
 * Socket Reposotory
 */
export default function useSocketRepository() {
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
        socket.emit(eventName, data)
    }

    /**
     * Off all socket events
     */
    const useOffSocket = () => {
        socket.off()
    }

    return { useOnSocket, useEmitSocket, useOffSocket, socket }
}
