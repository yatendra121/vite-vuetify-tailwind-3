import { onBeforeUnmount, ref } from 'vue'
import { useAsyncAxios } from '@qnx/composables/axios'
import type {
  DashboardCategory,
  DashboardProduct,
  DatedRecord
} from '@/components/dashboard/dashboardStats'

type Counts = { user: number; admin: number; product: number }
type ListResponse<T> = { data: { data: T[]; total: number } }

const PAGE_SIZE = 100

/**
 * Loads a whole resource page by page: the API has no summary endpoints, so
 * the dashboard works its figures out from the records themselves.
 */
const fetchAll = async <T>(path: string, isActive: () => boolean) => {
  const items: T[] = []
  let page = 1
  let total: number
  let received: number
  do {
    const { data } = await useAsyncAxios<ListResponse<T>>(
      `${path}?page=${page}&itemsPerPage=${PAGE_SIZE}`,
      { method: 'GET' }
    )
    received = data.data.length
    total = data.total
    items.push(...data.data)
    page++
  } while (received > 0 && items.length < total && isActive())
  return items
}

const useResource = <T>(initial: T, load: () => Promise<T>) => {
  const data = ref(initial)
  const loading = ref(true)
  const failed = ref(false)
  load()
    .then((value) => {
      data.value = value as typeof data.value
    })
    .catch(() => {
      failed.value = true
    })
    .finally(() => {
      loading.value = false
    })
  return { data, loading, failed }
}

export function useDashboardData() {
  let active = true
  onBeforeUnmount(() => {
    active = false
  })
  const isActive = () => active

  return {
    counts: useResource<Counts | null>(null, () =>
      useAsyncAxios<{ data: Counts }>('user/dashboard-count', {
        method: 'GET'
      }).then((response) => response.data)
    ),
    products: useResource<DashboardProduct[]>([], () =>
      fetchAll<DashboardProduct>('product', isActive)
    ),
    categories: useResource<DashboardCategory[]>([], () =>
      fetchAll<DashboardCategory>('category', isActive)
    ),
    accounts: useResource<DatedRecord[]>([], () =>
      fetchAll<DatedRecord>('user', isActive)
    )
  }
}
