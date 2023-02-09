<template>
  <v-row>
    <v-col md="12" sm="12">
      <v-card>
        <h2>Sales overview</h2>
        <v-responsive>
          <!-- <canvas id="chart-line" class="chart-canvas" height="300"></canvas> -->
          <v-row>
            <v-col md="4">
              <v-card height="200" color="white" elevation="10">
                <canvas
                  id="chart-line"
                  class="chart-canvas"
                  height="300"
                ></canvas>
              </v-card>
            </v-col>
            <v-col md="4">
              <v-card height="200" color="primary">
                <!-- <chart-holder-card
              title="Website Views"
              subtitle="Last Campaign Performance"
              update="campaign sent 2 days ago"
            > -->
                <reports-bar-chart
                  :height="200"
                  :data="[50, 20, 10, 22, 50, 40]"
                  :labels="[10, 312, 32, 23, 33, 33]"
                />
                <!-- </chart-holder-card> -->
              </v-card>
            </v-col>
            <v-col md="4">
              <v-card height="200" color="warning">
                <!-- <chart-holder-card
              title="Daily Sales"
              subtitle="(<span class='font-weight-bolder'>+15%</span>) increase in today sales."
              update="updated 4 min ago"
              color="red"
            > -->
                <reports-line-chart
                  :labels="[
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                  ]"
                  :data="[50, 40, 300, 320, 500, 350, 200, 230, 500]"
                />
                <!-- </chart-holder-card> -->
              </v-card>
            </v-col>
          </v-row>
        </v-responsive>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'GradientLineChart',

  mounted() {
    const ctx2 = document.getElementById('chart-line').getContext('2d')

    const gradientStroke1 = ctx2.createLinearGradient(0, 230, 0, 50)

    gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)')
    gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)')
    gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)') //purple colors

    const gradientStroke2 = ctx2.createLinearGradient(0, 230, 0, 50)

    gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)')
    gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)')
    gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)') //purple colors

    // eslint-disable-next-line no-new
    new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Mobile apps',
            tension: 0.4,
            pointRadius: 0,
            borderColor: '#cb0c9f',
            // eslint-disable-next-line no-dupe-keys
            borderWidth: 3,
            backgroundColor: gradientStroke1,
            fill: true,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            maxBarThickness: 6
          },
          {
            label: 'Websites',
            tension: 0.4,
            pointRadius: 0,
            borderColor: '#3A416F',
            borderWidth: 3,
            backgroundColor: gradientStroke2,
            fill: true,
            data: [30, 90, 40, 140, 290, 290, 340, 230, 600],
            maxBarThickness: 6
          }
        ]
      },
      options: {
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
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5]
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
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5]
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
      }
    })
  }
}
</script>
