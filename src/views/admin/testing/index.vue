<template>
  <title-layout />
  <v-text-field v-model="search" label="Search" class="mb-2" />

  <v-row v-if="filter.length">
    <v-col v-for="(item, i) in filter" :key="i" cols="12" sm="6" lg="3">
      <v-card
        class="h-100 text-capitalize"
        :title="item.brand"
        :subtitle="item.model"
        :text="`${item.year}`"
      >
        <v-card-actions class="flex-wrap ga-1 pt-0 px-4 pb-4">
          <v-chip v-for="val in item.features" :key="val" size="small">
            {{ val }}
          </v-chip>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <v-card v-else>
    <EmptyState description="Try a different search." />
  </v-card>
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
