import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LoadMoreBtn',
  props: {
    finished: {
      type: Boolean,

      required: true
    },
    loading: {
      type: Boolean,
      required: true
    },
    loadMore: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    return () => (
      <>
        {!props.finished && (
          <v-btn
            loading={props.loading}
            disabled={props.loading}
            color="primary"
            onClick={props.loadMore}
          >
            Load More
          </v-btn>
        )}
      </>
    )
  }
})
