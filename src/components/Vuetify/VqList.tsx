import { defineComponent, reactive, ref, onMounted } from 'vue'
import { objectToQueryString } from '@/composables/axios/formData'
import { _axios } from './plugins/axios'

import type { User } from '@/types/user'
import { Ref } from 'vue'

export default defineComponent({
  name: 'VqList',
  props: {},
  setup(props, { attrs, slots }) {
    const items: Ref<User[]> = ref([])
    const finished: Ref<boolean> = ref(false)
    const loading: Ref<boolean> = ref(false)

    const apiParams = reactive({ page: 1, page_size: 3, search: '' })

    const loadMore = async () => {
      loading.value = true
      _axios
        .get(`user?${objectToQueryString(apiParams, '')}`)
        .then((res) => {
          items.value = [...items.value, ...res.data.data]
          finished.value =
            apiParams.page_size * apiParams.page >= res.data.total
          apiParams.page++
        })
        .catch((res) => {
          console.log(res)
        })
        .finally(() => {
          loading.value = false
        })
    }

    onMounted(() => {
      loadMore()
    })

    return () => (
      <>
        <v-list items={items.value} {...attrs}>
          <>
            {slots.default?.({
              items: items.value,
              loadMore,
              finished: finished.value,
              loading: loading.value
            })}
          </>
          {/* {items.value.map((item, i) => (
            <v-list-item key={i} value={item}>
              <v-list-item-title v-text={item.name}></v-list-item-title>
              <v-list-item-subtitle v-text={item.email}></v-list-item-subtitle>
            </v-list-item>
          ))} */}
        </v-list>
      </>
    )
  }
})
