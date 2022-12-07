import {
  defineComponent,
  reactive,
  ref,
  onMounted,
  Ref,
  PropType,
  computed,
  watch,
  toRaw
} from 'vue'
import { objectToQueryString } from '@/composables/axios/formData'
import { useFormFilterStore } from '@/store/reactivity/formFiler'
import { useAsyncAxios } from '@/composables/axios'

import type { User } from '@/types/user'
import type { AxiosError } from 'axios'
import { ApiDataResponse } from '@/utils/response'

export default defineComponent({
  name: 'VqList',
  props: {
    id: {
      type: String as PropType<string>,
      required: true
    },
    action: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props, { attrs, slots }) {
    const items: Ref<User[]> = ref([])
    const finished: Ref<boolean> = ref(false)
    const loading: Ref<boolean> = ref(false)
    const filterId = computed(() => {
      return `${props.id}_filter`
    })

    const formFilterStore = useFormFilterStore()
    const { setReloadValue } = useFormFilterStore()

    const formFilterData = computed<Object>(() => {
      return formFilterStore.forms[filterId.value]?.values ?? {}
    })

    const reloadRequired = computed<boolean>(() => {
      return formFilterStore.forms[filterId.value]?.reloadRequired ?? false
    })

    const resetRequired = computed<boolean>(() => {
      return formFilterStore.forms[filterId.value]?.resetRequired ?? false
    })

    const listOptions = reactive({
      page: 1,
      page_size: 5
    })

    const resetValues = () => {
      items.value = []
    }

    watch(
      () => formFilterData,
      () => {
        listOptions.page = 1
      },
      { deep: true }
    )

    watch(reloadRequired, (newVal) => {
      if (newVal) {
        listOptions.page = 1
        setReloadValue(filterId.value, false)
      }
    })

    watch(resetRequired, (newVal) => {
      // if (newVal) {
      // }
    })

    const loadMore = () => {
      // finished.value =
      //   listOptions.page_size * listOptions.page >= (res.data?.total ?? 0)
      // items.value = [...items.value, ...(res.data?.data ?? {})]
      // listOptions.page++
    }
    //ApiDataResponse<{ data: any; total: number }>
    const fetchItems = async () => {
      loading.value = true

      try {
        const response = await useAsyncAxios<T>(
          `${props.action}?${objectToQueryString(
            { ...toRaw(listOptions), ...toRaw(formFilterData.value) },
            ''
          )}`,
          {
            method: 'GET'
          }
        )
        loading.value = false
        return response
      } catch (e: any) {
        loading.value = false
        throw new Error(e.message)
      }
    }

    onMounted(() => {
      //loadMore()
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
