<script setup lang="ts">
import { ref } from 'vue'
import AnalyticsCongratulations from '@/components/dashboard/AnalyticsCongratulations.vue'
import CardStatisticsVertical from '@/components/cards/CardStatisticsVertical.vue'

import chart from '@/assets/images/cards/chart-success.png'
import card from '@/assets/images/cards/credit-card-primary.png'
import paypal from '@/assets/images/cards/paypal-error.png'
import wallet from '@/assets/images/cards/wallet-info.png'
const years = ref([
  {
    color: 'cyan',
    year: '1960'
  },
  {
    color: 'green',
    year: '1970'
  },
  {
    color: 'pink',
    year: '1980'
  },
  {
    color: 'amber',
    year: '1990'
  },
  {
    color: 'orange',
    year: '2000'
  }
])

const select = ref('March')
const items = ref(['March', 'April', 'May', 'June'])

const monthtable = ref([
  {
    id: 1,
    activestate: '',
    leadname: 'Sunil Joshi',
    leademail: 'Web Designer',
    projectname: 'Elite Admin',
    statuscolor: 'blue lighten-1 white--text',
    statustext: 'Low',
    money: '$3.9K'
  },
  {
    id: 2,
    activestate: '',
    leadname: 'Andrew',
    leademail: 'Project Manager',
    projectname: 'Real Homes',
    statuscolor: 'info',
    statustext: 'Medium',
    money: '$23.9K'
  },
  {
    id: 3,
    activestate: '',
    leadname: 'Bhavesh patel',
    leademail: 'Developer',
    projectname: 'MedicalPro Theme',
    statuscolor: 'warning',
    statustext: 'High',
    money: '$12.9K'
  },
  {
    id: 4,
    activestate: '',
    leadname: 'Nirav Joshi',
    leademail: 'Frontend Eng',
    projectname: 'Elite Admin',
    statuscolor: 'error',
    statustext: 'Low',
    money: '$10.9K'
  }
])
</script>
<template>
  <v-container fluid>
    <v-responsive>
      <v-row>
        <!-- 👉 Congratulations -->
        <VCol cols="12" md="8">
          <AnalyticsCongratulations />
        </VCol>
        <!-- 👉 Tabs chart -->
        <VCol cols="12" sm="4">
          <VRow>
            <!-- 👉 Profit -->
            <VCol cols="12" md="6">
              <CardStatisticsVertical
                v-bind="{
                  title: 'Profit',
                  image: chart,
                  stats: '$12,628',
                  change: 72.8
                }"
              />
            </VCol>

            <!-- 👉 Sales -->
            <VCol cols="12" md="6">
              <CardStatisticsVertical
                v-bind="{
                  title: 'Sales',
                  image: wallet,
                  stats: '$4,679',
                  change: 28.42
                }"
              />
            </VCol>
          </VRow>
        </VCol>
        <v-col cols="12" sm="3">
          <v-card color="primary">
            <v-card-item>
              <div>
                <div class="text-overline mb-1">OVERLINE</div>
                <div class="text-h6 mb-1">Headline</div>
                <div class="text-caption">
                  Greyhound divisely hello coldly fonwderfully
                </div>
              </div>
            </v-card-item>

            <v-card-actions>
              <v-btn variant="outlined"> Button </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card color="success">
            <v-card-item>
              <div>
                <div class="text-overline mb-1">OVERLINE</div>
                <div class="text-h6 mb-1">Headline</div>
                <div class="text-caption">
                  Greyhound divisely hello coldly fonwderfully
                </div>
              </div>
            </v-card-item>

            <v-card-actions>
              <v-btn variant="outlined"> Button </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card color="warning">
            <v-card-item>
              <div>
                <div class="text-overline mb-1">OVERLINE</div>
                <div class="text-h6 mb-1">Headline</div>
                <div class="text-caption">
                  Greyhound divisely hello coldly fonwderfully
                </div>
              </div>
            </v-card-item>

            <v-card-actions>
              <v-btn variant="outlined"> Button </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card color="info">
            <v-card-item>
              <div>
                <div class="text-overline mb-1">OVERLINE</div>
                <div class="text-h6 mb-1">Headline</div>
                <div class="text-caption">
                  Greyhound divisely hello coldly fonwderfully
                </div>
              </div>
            </v-card-item>

            <v-card-actions>
              <v-btn variant="outlined"> Button </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <v-row>
            <v-col cols="12" lg="4">
              <v-card>
                <img
                  style="width: 100%"
                  src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                />
                <v-card-text>
                  <h5 class="text-h6 font-weight-medium mb-2 text-h6">
                    Super awesome, Vue 3 is coming soon!
                  </h5>
                  <p class="mb-3 text-body-2 text-grey-darken-1">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <v-btn variant="flat" color="warning">Learn More</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="4">
              <v-card>
                <img
                  style="width: 100%"
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                />
                <v-card-text>
                  <h5 class="text-h6 font-weight-medium mb-2 text-h6">
                    Super awesome, Vue 3 is coming soon!
                  </h5>
                  <p class="mb-3 text-body-2 text-grey-darken-1">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <v-btn variant="flat" color="error">Learn More</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="4">
              <v-card>
                <img
                  style="width: 100%"
                  src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                />
                <v-card-text>
                  <h5 class="text-h6 font-weight-medium mb-2 text-h6">
                    Super awesome, Vue 3 is coming soon!
                  </h5>
                  <p class="mb-3 text-body-2 text-grey-darken-1">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <v-btn variant="flat" color="info">Learn More</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="4" class="d-flex align-items-stretch">
          <v-card>
            <v-timeline style="padding: 1rem" align="start">
              <v-timeline-item
                v-for="(year, i) in years"
                :key="i"
                :dot-color="year.color"
                size="small"
              >
                <template #opposite>
                  <div
                    :class="`pt-1 headline font-weight-bold text-${year.color}`"
                    v-text="year.year"
                  ></div>
                </template>
                <div>
                  <h4
                    :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`"
                  >
                    Lorem ipsum
                  </h4>
                  <p>Lorem ipsum dolor sit amet, no nam oblique veritus.</p>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>
        <v-col cols="12" lg="8" style="height: auto">
          <v-card flat class="w-100">
            <v-card-text>
              <div class="d-sm-flex align-center">
                <div>
                  <h5 class="text-h6 text-h6 font-weight-medium">
                    Product Performance
                  </h5>
                </div>
                <v-spacer></v-spacer>
                <div class="ml-auto">
                  <v-select
                    v-model="select"
                    :items="items"
                    variant="outlined"
                    dense
                    hide-details
                  ></v-select>
                </div>
              </div>
              <v-table class="month-table mt-7">
                <template #default>
                  <thead>
                    <tr>
                      <th class="font-weight-medium text-subtitle-1">Id</th>
                      <th class="font-weight-medium text-subtitle-1">
                        Assigned
                      </th>
                      <th class="font-weight-medium text-subtitle-1">Name</th>
                      <th class="font-weight-medium text-subtitle-1">
                        Priority
                      </th>
                      <th class="font-weight-medium text-subtitle-1">Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in monthtable"
                      :key="item.leadname"
                      :class="item.activestate"
                      class="month-item"
                    >
                      <td>{{ item.id }}</td>
                      <td>
                        <h4 class="font-weight-bold text-no-wrap">
                          {{ item.leadname }}
                        </h4>
                        <h6
                          class="text-no-wrap font-weight-regular text-body-2 text-grey-darken-1"
                        >
                          {{ item.leademail }}
                        </h6>
                      </td>
                      <td>
                        <h5
                          class="font-weight-medium text-no-wrap text-body-2 text-grey-darken-1"
                        >
                          {{ item.projectname }}
                        </h5>
                      </td>
                      <td>
                        <v-chip
                          class="ma-2"
                          :color="item.statuscolor"
                          size="small"
                          label
                          >{{ item.statustext }}</v-chip
                        >
                      </td>
                      <td>
                        <h4>{{ item.money }}</h4>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
