<template>
  <LineChart :data="data" />
</template>

<script lang="ts" setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js'
import { reactive } from 'vue'
import { Line as LineChart, ChartProps } from 'vue-chartjs'
import { useTheme } from 'vuetify'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const { colors } = useTheme().current.value
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: String(colors.primary),
      borderColor: String(colors.primary),
      tension: 0.4,
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
}
</script>
