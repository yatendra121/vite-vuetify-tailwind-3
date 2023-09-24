<template>
  <Pie :data="data" :options="options" />
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

import { Pie, ChartProps } from 'vue-chartjs'

const data = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
}
const options = {
  plugins: {
    legend: {
      position: 'right'
    }
  }
}
ChartJS.register(ArcElement, Tooltip, Legend)
</script>
