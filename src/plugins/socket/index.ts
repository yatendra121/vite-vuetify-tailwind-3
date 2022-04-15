import { io } from 'socket.io-client'
import { Portal } from '@/utils/portal'

const currentPortal = Portal.getInstance()

const socket = io(currentPortal.getSocketUrl(), {
    transports: ['websocket']
})
socket.on('connect', function () {
    console.log(
        '%c Socket Connected. ',
        'font-size:12px; color: #145c54; font-weight: 900'
    )
})

socket.on('disconnect', function () {
    console.log(
        '%c Socket Disconnected.',
        'font-size:12px; color: #c2111a;font-weight: 900'
    )
})

export default socket
