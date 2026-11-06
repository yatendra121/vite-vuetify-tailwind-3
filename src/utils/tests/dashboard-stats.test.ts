import { describe, expect, it } from 'vitest'
import {
    catalogHealth,
    categoryBreakdown,
    monthlyActivity,
    recentProducts,
    stockValue,
    type DashboardProduct
} from '@/components/dashboard/dashboardStats'

const product = (over: Partial<DashboardProduct>): DashboardProduct => ({
    id: 'p',
    name: 'P',
    quantity: 1,
    price: 10,
    salePrice: 8,
    categoryId: 'a',
    status: 'active',
    createdAt: '2026-01-15T00:00:00',
    images: [{}],
    ...over
})

describe('stockValue', () => {
    it('multiplies units by the chosen price', () => {
        const items = [
            product({ quantity: 2 }),
            product({ quantity: 3, salePrice: 5 })
        ]
        expect(stockValue(items, 'salePrice')).toBe(31)
        expect(stockValue(items, 'price')).toBe(50)
    })
})

describe('categoryBreakdown', () => {
    const categories = [
        { id: 'a', name: 'Alpha' },
        { id: 'b', name: 'Beta' },
        { id: 'c', name: 'Empty' }
    ]
    const items = [
        product({ categoryId: 'b', quantity: 5, salePrice: 2 }),
        product({ categoryId: 'b', quantity: 1, salePrice: 2 }),
        product({ categoryId: 'a', quantity: 9, salePrice: 10 })
    ]

    it('counts products, largest first, keeping empty categories', () => {
        expect(categoryBreakdown(items, categories, 'products')).toEqual([
            { name: 'Beta', value: 2 },
            { name: 'Alpha', value: 1 },
            { name: 'Empty', value: 0 }
        ])
    })

    it('sums units and stock value', () => {
        expect(categoryBreakdown(items, categories, 'units')[0]).toEqual({
            name: 'Alpha',
            value: 9
        })
        expect(categoryBreakdown(items, categories, 'value')[1]).toEqual({
            name: 'Beta',
            value: 12
        })
    })

    it('does not drop products whose category is missing', () => {
        expect(
            categoryBreakdown([product({ categoryId: 'gone' })], [], 'products')
        ).toEqual([{ name: 'Unknown category', value: 1 }])
    })
})

describe('catalogHealth', () => {
    it('counts each check', () => {
        expect(
            catalogHealth([
                product({ status: 'inactive', quantity: 0 }),
                product({ images: [], salePrice: 20 })
            ])
        ).toEqual({
            active: 1,
            inactive: 1,
            outOfStock: 1,
            withoutImages: 1,
            saleAboveList: 1
        })
    })
})

describe('monthlyActivity', () => {
    const now = new Date(2026, 2, 20)
    const records = [
        { createdAt: '2026-03-02T12:00:00' },
        { createdAt: '2026-03-03T12:00:00' },
        { createdAt: '2025-12-31T12:00:00' },
        { createdAt: null }
    ]

    it('covers a fixed window ending this month', () => {
        const { counts, months, hasData } = monthlyActivity([records], 3, now)
        expect(months).toEqual(['2026-01', '2026-02', '2026-03'])
        expect(counts[0]).toEqual([0, 0, 2])
        expect(hasData).toBe(true)
    })

    it('starts at the earliest record for all time', () => {
        const { counts } = monthlyActivity([records], null, now)
        expect(counts[0]).toEqual([1, 0, 0, 2])
    })

    it('reports an empty period', () => {
        const old = [{ createdAt: '2020-01-01T12:00:00' }]
        expect(monthlyActivity([old], 3, now).hasData).toBe(false)
    })

    it('keeps series aligned by month', () => {
        const { counts } = monthlyActivity(
            [
                [{ createdAt: '2026-03-02T12:00:00' }],
                [{ createdAt: '2026-01-02T12:00:00' }]
            ],
            null,
            now
        )
        expect(counts).toEqual([
            [0, 0, 1],
            [1, 0, 0]
        ])
    })
})

describe('recentProducts', () => {
    it('returns the newest first, up to the limit', () => {
        const items = [
            product({ id: 'old', createdAt: '2020-01-01' }),
            product({ id: 'new', createdAt: '2026-01-01' }),
            product({ id: 'mid', createdAt: '2023-01-01' })
        ]
        expect(recentProducts(items, 2).map(({ id }) => id)).toEqual([
            'new',
            'mid'
        ])
    })
})
