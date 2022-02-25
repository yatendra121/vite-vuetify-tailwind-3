<script lang="ts">
import { ref, onUnmounted, onMounted, defineComponent } from 'vue'
import useSocketRepository from '@/composables/socket'
import { User } from '@/types/user'

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
    let messageOffEvent = new Function()
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

    fetch('http://localhost:4000/users-chat')
      .then((response) => response.json())
      .then((data) => {
        items.value = data.data
      })

    return { items, sendMessage, message, messageOffEvent }
  }
})
</script>

<template>
  <title-layout> {{ 'casnjcnsan' }} </title-layout>
  <v-container fluid>
    <v-row>
      <v-col md="10">
        {{ messageOffEvent }}
        <v-text-field v-model="message" label="Message" />
      </v-col>
      <v-col md="2">
        <v-btn @click.stop="sendMessage" type="submit" flat color="secondary"
          >Submit</v-btn
        >
        <v-btn @click="messageOffEvent()" flat color="secondary">Test</v-btn>
      </v-col>
    </v-row>
    <v-card max-width="670" height="500" class="overflow-auto">
      <v-toolbar color="cyan" dark>
        <v-app-bar-nav-icon variant="text"></v-app-bar-nav-icon>

        <v-toolbar-title>Inbox</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>
      </v-toolbar>

      <v-list three-line class="overflow-auto">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          active-color="primary"
          variant="contained"
        >
          <v-list-item-avatar left>
            <v-icon icon="mdi-account"></v-icon>
          </v-list-item-avatar>
          <v-list-item-header>
            <v-list-item-title v-text="item.user.name"></v-list-item-title>
            <v-list-item-subtitle v-text="item.message"></v-list-item-subtitle>
          </v-list-item-header>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
