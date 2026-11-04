<template>
  <title-layout />
  <v-row :key="themeName">
    <v-col cols="12" sm="6" lg="4">
      <v-card title="Bar">
        <div class="chart-box">
          <BarChart
            :height="200"
            :data="[50, 20, 10, 22, 50, 40]"
            :labels="[10, 312, 32, 23, 33, 33]"
          />
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" lg="4">
      <v-card title="Bubble">
        <div class="chart-box"><BubbleChart /></div>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" lg="4">
      <v-card title="Line">
        <div class="chart-box"><LineChart /></div>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" lg="4">
      <v-card title="Pie">
        <div class="chart-box"><PieChart /></div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'
import { Chart as ChartJS } from 'chart.js'
import { useTheme } from 'vuetify'

// Chart.js reads these once per chart, so `themeName` also re-creates them.
const theme = useTheme()
const themeName = computed(() => {
  const { dark } = theme.current.value
  ChartJS.defaults.font.family = 'DM Sans, sans-serif'
  ChartJS.defaults.color = dark ? '#CBD5E1' : '#475569'
  ChartJS.defaults.borderColor = dark
    ? 'rgba(203, 213, 225, 0.15)'
    : 'rgba(71, 85, 105, 0.15)'
  return theme.global.name.value
})

const BarChart = defineAsyncComponent(
  () => import(/* webpackChunkName: "vq-chart" */ '@/components/Charts/Bar.vue')
)
const LineChart = defineAsyncComponent(
  () =>
    import(/* webpackChunkName: "vq-chart" */ '@/components//Charts/Line.vue')
)

const BubbleChart = defineAsyncComponent(
  () =>
    import(/* webpackChunkName: "vq-chart" */ '@/components//Charts/Bubble.vue')
)

const PieChart = defineAsyncComponent(
  () =>
    import(/* webpackChunkName: "vq-chart" */ '@/components//Charts/pie.vue')
)

</script>

<style scoped>
.chart-box {
  position: relative;
  height: 240px;
  padding: 0 16px 16px;
}
</style>
