import { useMessageStore } from '@/store/reactivity/message'

class Message {
    // eslint-disable-next-line no-use-before-define
    static instance: Message

    // eslint-disable-next-line no-useless-constructor
    private constructor() {}

    private messageStore = useMessageStore()

    static getInstance(): Message {
        if (!Message.instance) {
            Message.instance = new Message()
        }

        return Message.instance
    }

    success(message: string) {
        this.messageStore.addMessage({ message, color: 'secondary' })
    }

    warning(message: string) {
        this.messageStore.addMessage({ message, color: 'warning' })
    }

    error(message: string) {
        this.messageStore.addMessage({ message, color: 'error' })
    }
}
const useMessage = Message.getInstance()
const useMessageInstance = () => Message.getInstance()

export { useMessage, useMessageInstance }
