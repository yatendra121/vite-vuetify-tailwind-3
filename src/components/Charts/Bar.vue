<template>
  <div class="chart">
    <Bar :height="height" :id="id" :options="chartOptions" :data="chartData" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import { Bar, ChartProps } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartData,
  ChartOptions,
  LineElement
} from 'chart.js'
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale
)

type test = ChartProps<'bar', ChartData>

export default defineComponent({
  name: 'BarChart',
  components: { Bar },
  props: {
    id: {
      type: String,
      default: 'bar-chart'
    },
    height: {
      type: [Number, String],
      default: '100'
    },
    color: {
      type: [String],
      default: 'black'
    },
    labels: {
      type: Array as PropType<unknown[]>,
      default: () => undefined
    },
    data: {
      type: Array as PropType<(number | [number, number] | null)[]>,
      required: true
    }
  },
  setup(props) {
    const chartData = reactive<ChartData<'bar'>>({
      labels: props.labels,
      datasets: [
        {
          label: 'Mobile apps',
          borderWidth: 0,
          borderRadius: 4,
          borderSkipped: false,
          backgroundColor: 'rgba(255, 255, 255, .8)',
          data: props.data,
          maxBarThickness: 6
        }
      ]
    })
    const chartOptions = reactive<ChartOptions<'bar'>>({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      },
      scales: {
        y: {
          grid: {
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            color: 'rgba(255, 255, 255, .2)'
          },
          ticks: {
            padding: 10,
            font: {
              size: 14,
              weight: '300',
              family: 'Roboto',
              style: 'normal',
              lineHeight: 2
            },
            color: '#fff'
          }
        },
        x: {
          grid: {
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            color: 'rgba(255, 255, 255, .2)'
          },
          ticks: {
            display: true,
            color: '#f8f9fa',
            padding: 10,
            font: {
              size: 14,
              family: 'Roboto',
              style: 'normal',
              lineHeight: 2
            }
          }
        }
      }
    })
    return { chartData, chartOptions }
  }
})
</script>
