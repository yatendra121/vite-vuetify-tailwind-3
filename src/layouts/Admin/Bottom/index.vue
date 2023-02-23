<template>
  <v-footer :elevation="2" :border="false" :rounded="10" :absolute="true" app>
    <v-responsive>
      <v-card :elevation="0" class="text-center">
        <v-container style="padding: 0px">
          <v-row no-gutters>
            <v-col>
              <v-card-text>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
              </v-card-text>
            </v-col>
            <v-col>
              <v-card-text> All right reserved. </v-card-text>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-responsive>
  </v-footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mdiClock, mdiAccount, mdiFlag } from '@mdi/js'

export default defineComponent({
  setup() {
    const icons = [mdiClock, mdiAccount, mdiFlag]
    return { icons }
  }
})
</script>
