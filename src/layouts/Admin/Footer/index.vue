<template>
  <v-footer :elevation="10" app :border="true" :rounded="10" :fixed="true">
    <v-card :elevation="1" :plain="true" class="text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
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
