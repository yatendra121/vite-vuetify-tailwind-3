import { io } from 'socket.io-client'
import { Portal } from '@/utils/portal'

const currentPortal = new Portal()

const socket = io(currentPortal.getSocketUrl(), {
    transports: ['websocket']
})

socket.on('connect', function () {
    console.log('%c Socket Connected. ', 'color: #145c54; font-weight: 900')
})

socket.on('disconnect', function () {
    console.log('%c Socket Disconnected.', 'color: #c2111a;font-weight: 900')
})

export default socket
