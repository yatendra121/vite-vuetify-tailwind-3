import { onBeforeUnmount, ref, shallowRef } from 'vue'
import { useAsyncAxios } from '@qnx/composables/axios'
import type {
  DashboardCategory,
  DashboardProduct,
  DatedRecord
} from '@/components/dashboard/dashboardStats'

type Counts = { user: number; admin: number; product: number }
type ListResponse<T> = { data: { data: T[]; total: number } }

const PAGE_SIZE = 100
const PARALLEL_PAGES = 4

/**
 * Loads a whole resource: the API has no summary endpoints, so the dashboard
 * works its figures out from the records themselves. The first page reveals the
 * total, then the rest load a few at a time, keeping their order.
 */
const fetchAll = async <T>(path: string, isActive: () => boolean) => {
  const fetchPage = (page: number) =>
    useAsyncAxios<ListResponse<T>>(
      `${path}?page=${page}&itemsPerPage=${PAGE_SIZE}`,
      { method: 'GET' }
    ).then(({ data }) => data)

  const first = await fetchPage(1)
  const items = [...first.data]
  const lastPage = Math.ceil(first.total / PAGE_SIZE)

  for (let page = 2; page <= lastPage && isActive(); page += PARALLEL_PAGES) {
    const pages = Array.from(
      { length: Math.min(PARALLEL_PAGES, lastPage - page + 1) },
      (_, index) => fetchPage(page + index)
    )
    for (const { data } of await Promise.all(pages)) items.push(...data)
  }
  return items
}

const useResource = <T>(initial: T, load: () => Promise<T>) => {
  // Replaced whole and only read, so thousands of rows needn't be made reactive.
  const data = shallowRef(initial)
  const loading = ref(true)
  const failed = ref(false)
  load()
    .then((value) => {
      data.value = value
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
