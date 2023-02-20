<template>
  <div class="chart">
    <LineChart :height="height" :id="id" :data="chartData" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import { Line as LineChart, ChartProps } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  ChartData,
  ChartOptions,
  Point,
  PointElement
} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

type test = ChartProps<'line', ChartData>

export default defineComponent({
  name: 'Linechart',
  components: { LineChart },
  props: {
    id: {
      type: String,
      default: 'line-chart'
    },
    height: {
      type: [Number, String],
      default: 170
    },
    color: {
      type: [String],
      default: 'black'
    },
    labels: {
      type: Array as PropType<unknown[]>
    },
    data: {
      type: Array as PropType<(number | Point | null)[]>,
      required: true
    }
  },
  setup(props) {
    const chartData = reactive<ChartData<'line'>>({
      labels: props.labels,
      datasets: [
        {
          label: 'Mobile apps',
          borderWidth: 0,
          backgroundColor: 'rgba(255, 255, 255, .8)',
          data: props.data
        }
      ]
    })
    const chartOptions = reactive<ChartOptions<'line'>>({
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
            drawTicks: false
          },
          ticks: {
            display: true,
            padding: 10,
            color: '#b2b9bf',
            font: {
              size: 11,
              family: 'Open Sans',
              style: 'normal',
              lineHeight: 2
            }
          }
        },
        x: {
          grid: {
            display: false,
            drawOnChartArea: false,
            drawTicks: false
          },
          ticks: {
            display: true,
            color: '#b2b9bf',
            padding: 20,
            font: {
              size: 11,
              family: 'Open Sans',
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
