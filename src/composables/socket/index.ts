import socket from '@/plugins/socket.io'

const useOnSocket = (eventName: string, callback: any) => {
    socket.on(eventName, callback)

    const useOffSocketEvent = () => socket.off(eventName)

    return { useOffSocketEvent }
}

export { useOnSocket }
