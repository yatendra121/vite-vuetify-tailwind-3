<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { useOnSocket } from '@/composables/socket'

const items = ref([])

const eventCallback = (response: any) => {
  console.log(response)
  items.value = [response.data.data, ...items.value]
}

const { useOffSocketEvent } = useOnSocket('newmsg', eventCallback)

onUnmounted(() => {
  useOffSocketEvent()
})
</script>

<template>
  <title-layout> {{ 'casnjcnsan' }} </title-layout>
  <v-alert
    :right="true"
    :top="true"
    :loading="true"
    :value="false"
    color="pink"
    dark
    border="top"
    icon="mdi-home"
    absolute
    transition="scale-transition"
  >
    Phasellus tempus
  </v-alert>
  <v-container fluid>
    <v-card>
      <v-list two-line>
        <v-list-item-group active-class="pink--text" multiple>
          <template v-for="(item, index) in items" :key="item">
            <v-list-item>
              <template #default="{ active }">
                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.sender.name"
                  ></v-list-item-title>

                  <v-list-item-subtitle
                    class="text--primary"
                    v-text="item.message"
                  ></v-list-item-subtitle>

                  <v-list-item-action>
                    <v-list-item-action-text
                      v-text="item.action"
                    ></v-list-item-action-text>

                    <v-icon color="grey lighten-1"> mdi-star-outline </v-icon>
                  </v-list-item-action>
                </v-list-item-content>
              </template>
            </v-list-item>

            <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>
