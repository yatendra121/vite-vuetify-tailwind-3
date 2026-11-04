<template>
  <Pie :data="data" :options="options" />
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

import { Pie, ChartProps } from 'vue-chartjs'
import { useTheme } from 'vuetify'

const { colors } = useTheme().current.value
const data = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: [
        colors.primary,
        colors.info,
        colors.secondary,
        colors.warning
      ].map(String),
      borderColor: String(colors.surface),
      data: [40, 20, 80, 10]
    }
  ]
}
const options = {
  plugins: {
    legend: {
      position: 'right' as const
    }
  }
}
ChartJS.register(ArcElement, Tooltip, Legend)
</script>
