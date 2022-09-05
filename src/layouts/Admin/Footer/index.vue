<template>
  <v-footer
    style="position:sticky; bottom:0px"
    :elevation="20"
    :border="true"
    :priority="10"
    :rounded="10"
    :fixed="false"
  >
  <v-responsive>
    <v-card :elevation="1" :plain="true" class="text-center">

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
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
