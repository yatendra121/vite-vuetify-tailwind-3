import { useMessageStore } from '@/store/reactivity/message'

class Message {
    // eslint-disable-next-line no-use-before-define
    static instance: Message

    // eslint-disable-next-line no-useless-constructor
    private constructor() {}

    // Late-bind the store via a getter instead of caching it in a field.
    // A field initializer runs once, inside the constructor — which fires at
    // module-load time via `Message.getInstance()` below. That can execute
    // before `app.use(createPinia())` (import order) or capture a Pinia
    // instance that HMR later replaces, leaving the singleton mutating a
    // store nobody renders. A getter resolves the store on every call
    // against the currently active Pinia. Pinia memoises by id, so this is
    // O(1).
    private get messageStore() {
        return useMessageStore()
    }

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
