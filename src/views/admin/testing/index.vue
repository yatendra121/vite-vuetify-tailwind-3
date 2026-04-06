<template>
  <v-container fluid>
    <h1>Hello</h1>
    <VTextField v-model="search" />

    <v-row>
      <v-col md="3" v-for="(item, i) in filter" :key="i">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-switch label="Switch"></v-switch>

            {{ isHovering }}
            <v-card
              :title="item.brand"
              :subtitle="item.model"
              :text="item.year"
              v-bind="props"
              :color="isHovering ? '#008000' : undefined"
            >
              <v-card-actions class="pt-0">
                <template v-for="val in item.features">
                  <v-chip> {{ val }} </v-chip>
                </template>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <!-- <v-table>
      <thead>
        <tr>
          <th class="text-left">Brand</th>
          <th class="text-left">Model</th>
          <th class="text-left">Year</th>
          <th class="text-left">Features</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in filter" :key="i">
          <td>{{ item.brand }}</td>
          <td>{{ item.model }}</td>
          <td>{{ item.year }}</td>
          <td>
            <template v-for="val in item.features">
              <v-chip> {{ val }} </v-chip>
            </template>
          </td>
        </tr>
      </tbody>
    </v-table> -->
  </v-container>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { VTextField } from 'vuetify/components'

export default defineComponent({
  components: {
    VTextField
  },
  setup() {
    const search = ref('')

    const data = ref([
      {
        brand: 'maruti',
        model: 'swift',
        year: 2015,
        features: ['music', 'airbag', 'power steering']
      },
      {
        brand: 'hyundai',
        model: 'i20',
        year: 2018,
        features: ['music', 'airbag', 'power steering', 'gps']
      },
      {
        brand: 'tata',
        model: 'nano',
        year: 2012,
        features: ['music', 'airbag']
      },
      {
        brand: 'ford',
        model: 'fiesta',
        year: 2016,
        features: ['music', 'airbag', 'power steering', 'gps']
      }
    ])

    const filter = computed(() => {
      return data.value.filter(
        (item) =>
          item.brand.includes(search.value) ||
          item.model.includes(search.value) ||
          item.model.includes(search.value) ||
          item.features.find((val) => val.includes(search.value))
      )
    })
    return { data, search, filter }
  }
})
</script>
