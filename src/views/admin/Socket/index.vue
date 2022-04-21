<script lang="ts">
import { ref, onUnmounted, onMounted, defineComponent } from 'vue'
import useSocketRepository from '@/composables/socket'
import { User } from '@/types/user'
import { Portal } from '@/utils/portal'
import { mdiAccount, mdiHome } from '@mdi/js'

const currentPortal = Portal.getInstance()
const baseURL = currentPortal.getSocketUrl()

interface UserChat {
  id: number
  email: string
  name: string
  [key: string]: any
  user: User
}

export default defineComponent({
  setup() {
    const items = ref<Array<UserChat>>([])
    const message = ref('')

    const messageEvent = (response: UserChat) => {
      items.value = [response, ...items.value]
    }

    // eslint-disable-next-line no-new-func
    let { defaultSocketOffEvent: messageOffEvent } = useSocketRepository()
    const { useOnSocket, useEmitSocket } = useSocketRepository()

    onMounted(() => {
      messageOffEvent = useOnSocket('newmsg', messageEvent)
    })

    onUnmounted(() => {
      messageOffEvent()
    })

    const sendMessage = () => {
      useEmitSocket('message', {
        message: message.value,
        email: 'yatendra@singsys.com'
      })
    }

    fetch(baseURL + '/users-chat')
      .then((response) => response.json())
      .then((data) => {
        items.value = data.data
      })

    return { items, sendMessage, message, messageOffEvent, mdiAccount, mdiHome }
  }
})
</script>
