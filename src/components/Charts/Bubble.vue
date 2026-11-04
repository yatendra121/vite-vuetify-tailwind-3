<template>
  <Bubble :data="data" />
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  PointElement,
  LinearScale
} from 'chart.js'
import { Bubble } from 'vue-chartjs'
import { useTheme } from 'vuetify'

const { colors } = useTheme().current.value
const data = {
  datasets: [
    {
      label: 'Data One',
      backgroundColor: String(colors.primary),
      data: [
        {
          x: 20,
          y: 25,
          r: 5
        },
        {
          x: 40,
          y: 10,
          r: 10
        },
        {
          x: 30,
          y: 22,
          r: 30
        }
      ]
    },
    {
      label: 'Data Two',
      backgroundColor: String(colors.info),
      data: [
        {
          x: 10,
          y: 30,
          r: 15
        },
        {
          x: 20,
          y: 20,
          r: 10
        },
        {
          x: 15,
          y: 8,
          r: 30
        }
      ]
    }
  ]
}

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)
</script>
