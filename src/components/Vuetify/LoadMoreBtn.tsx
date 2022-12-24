import { defineComponent, inject, Ref } from 'vue'
export default defineComponent({
  name: 'LoadMoreBtn',
  setup(props, { attrs, slots }) {
    const vqList = inject<{
      loading: Ref<boolean>
      finished: Ref<boolean>
      tableListId: string
      loadMore: () => void
    }>('vqList')

    return () => (
      <>
        {!vqList?.finished.value && (
          <v-btn
            loading={vqList?.loading.value}
            disabled={vqList?.loading.value}
            color="primary"
            onClick={vqList?.loadMore}
            v-slots={slots}
            {...attrs}
          >
            Load More
          </v-btn>
        )}
      </>
    )
  }
})
