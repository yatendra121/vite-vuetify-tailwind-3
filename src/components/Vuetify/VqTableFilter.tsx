import { computed, defineComponent, PropType } from 'vue'
import { Form } from 'vee-validate'
import VqTableFilterHandler from '@/components/Vuetify/VqTableFilterHandler'

export default defineComponent({
  components: {
    Form,
    VqTableFilterHandler
  },
  props: {
    id: {
      type: String as PropType<string>,
      required: true,
      default: () => ''
    }
  },
  setup(props, { attrs, slots }) {
    const filterId = computed(() => {
      return `${props.id}_filter`
    })

    return () => (
      <>
        <Form id={filterId.value} {...attrs}>
          <VqTableFilterHandler id={filterId.value} v-slots={slots}>
            <>{slots.default?.()}</>
          </VqTableFilterHandler>
        </Form>
      </>
    )
  }
})
