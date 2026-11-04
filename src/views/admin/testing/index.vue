<template>
  <title-layout />
  <v-card class="mb-4">
    <div class="table-filters">
      <v-text-field
        v-model="search"
        label="Search"
        hide-details
        :prepend-inner-icon="mdiMagnify"
      />
    </div>
  </v-card>

  <v-row v-if="filter.length">
    <v-col v-for="(item, i) in filter" :key="i" cols="12" sm="6" lg="3">
      <v-card
        class="h-100 text-capitalize"
        :title="toCapitalize(item.brand)"
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
import { mdiMagnify } from '@mdi/js'
import { useStringRepository } from '@/composables/string'

export default defineComponent({
  components: {
    VTextField
  },
  setup() {
    const search = ref<string | null>('')

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
      // Clearing the field sets it to null.
      const term = (search.value ?? '').trim().toLowerCase()
      return data.value.filter(
        (item) =>
          item.brand.includes(term) ||
          item.model.includes(term) ||
          item.features.some((val) => val.includes(term))
      )
    })
    return { data, search, filter, mdiMagnify, ...useStringRepository() }
  }
})
</script>
