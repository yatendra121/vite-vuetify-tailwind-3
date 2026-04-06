<template>
  <v-footer
    :border="true"
    :elevation="1"
    rounded="lg"
    :absolute="true"
    app
    class="main-bottom-bar"
    :style="styles"
  >
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
import { computed, defineComponent, reactive } from 'vue'
import { mdiClock, mdiAccount, mdiFlag } from '@mdi/js'
import { useAppStore } from '@/store/reactivity/app'

export default defineComponent({
  setup() {
    const icons = [mdiClock, mdiAccount, mdiFlag]

    const appStore = useAppStore()

    const width = computed(() =>
      appStore.sidebarValue ? appStore.sidebarWidth : 0
    )
    const styles = reactive({
      get left() {
        return `${width.value + 30}px`
      },
      get width() {
        return `calc(100% - ${width.value + 60}px)`
      }
    })

    return { icons, styles }
  }
})
</script>
<style lang="scss">
@layer overrides {
  .main-bottom-bar {
    margin-bottom: 6px;
  }
}
</style>
