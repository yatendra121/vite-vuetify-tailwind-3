// Figures for the dashboard, all derived from records the API returns.

export type DashboardProduct = {
    id: string
    name: string
    quantity: number
    price: number
    salePrice: number
    categoryId: string
    status: 'active' | 'inactive'
    createdAt: string | null
    images?: unknown[]
}

export type DashboardCategory = { id: string; name: string }

export type DatedRecord = { createdAt: string | null }

export const stockValue = (
    products: DashboardProduct[],
    field: 'price' | 'salePrice'
) => products.reduce((sum, item) => sum + item.quantity * item[field], 0)

export type CategoryMetric = 'products' | 'units' | 'value'

/** One row per category, largest first. Empty categories are included. */
export const categoryBreakdown = (
    products: DashboardProduct[],
    categories: DashboardCategory[],
    metric: CategoryMetric
) => {
    const totals = new Map<string, number>(
        categories.map((category) => [category.id, 0])
    )
    for (const item of products) {
        const amount =
            metric === 'products'
                ? 1
                : metric === 'units'
                  ? item.quantity
                  : item.quantity * item.salePrice
        totals.set(item.categoryId, (totals.get(item.categoryId) ?? 0) + amount)
    }
    const names = new Map(categories.map(({ id, name }) => [id, name]))
    return [...totals]
        .map(([id, value]) => ({
            name: names.get(id) ?? 'Unknown category',
            value
        }))
        .sort((a, b) => b.value - a.value)
}

export const catalogHealth = (products: DashboardProduct[]) => ({
    active: products.filter((item) => item.status === 'active').length,
    inactive: products.filter((item) => item.status === 'inactive').length,
    outOfStock: products.filter((item) => item.quantity <= 0).length,
    withoutImages: products.filter((item) => !item.images?.length).length,
    saleAboveList: products.filter((item) => item.salePrice > item.price).length
})

const monthKey = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`

/**
 * Records created per month, for each series. Covers the last `months` months
 * up to `now`, or everything since the earliest record when `months` is null.
 */
export const monthlyActivity = (
    series: DatedRecord[][],
    months: number | null,
    now = new Date()
) => {
    const dates = series.map((records) =>
        records
            .map(({ createdAt }) => (createdAt ? new Date(createdAt) : null))
            .filter((date): date is Date => !!date && !isNaN(date.getTime()))
    )
    const earliest = dates
        .flat()
        .reduce<Date | null>(
            (min, date) => (!min || date < min ? date : min),
            null
        )

    const end = new Date(now.getFullYear(), now.getMonth(), 1)
    const start =
        months === null
            ? new Date(
                  (earliest ?? end).getFullYear(),
                  (earliest ?? end).getMonth(),
                  1
              )
            : new Date(now.getFullYear(), now.getMonth() - months + 1, 1)

    const keys: string[] = []
    for (
        const month = new Date(start);
        month <= end;
        month.setMonth(month.getMonth() + 1)
    ) {
        keys.push(monthKey(month))
    }

    const counts = dates.map((list) => {
        const perMonth = new Map<string, number>()
        for (const date of list) {
            perMonth.set(
                monthKey(date),
                (perMonth.get(monthKey(date)) ?? 0) + 1
            )
        }
        return keys.map((key) => perMonth.get(key) ?? 0)
    })

    return {
        months: keys,
        counts,
        hasData: counts.some((list) => list.some(Boolean))
    }
}

export const recentProducts = (products: DashboardProduct[], limit = 5) =>
    [...products]
        .sort(
            (a, b) =>
                new Date(b.createdAt ?? 0).getTime() -
                new Date(a.createdAt ?? 0).getTime()
        )
        .slice(0, limit)
