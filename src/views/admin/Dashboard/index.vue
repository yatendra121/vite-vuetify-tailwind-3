<template>
  <v-text-field
    :rounded="true"
    append-inner-icon="mdi-magnify"
    placeholder="Search"
    color="primary"
    clearable
    loading
    label="Ok"
    persistent-clear
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {},
  data() {
    return {
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' }
      ]
    }
  },
  mounted() {
    this.$nextTick(function () {
      //  console.log(this.$axios.get("csadcd"));
    })
  }
})
</script>
