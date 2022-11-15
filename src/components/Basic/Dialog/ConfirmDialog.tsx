import { computed, defineComponent, PropType } from 'vue'
import { mdiAlert } from '@mdi/js'

export default defineComponent({
  name: 'ConfirmDialog',
  props: {
    title: {
      type: String as PropType<string>,
      default: () => 'Confirmation'
    },
    description: {
      type: String as PropType<string>,
      default: () => 'Are you sure?'
    },
    width: {
      type: String as PropType<number | string>,
      default: () => '25rem'
    },
    minHeight: {
      type: String as PropType<number | string>,
      default: () => '12rem'
    },
    modelValue: {
      type: Boolean as PropType<boolean>,
      default: () => false
    }
  },
  emits: {
    'click:close': (val: boolean) => undefined,
    'click:confirm': (val: boolean) => undefined
  },
  setup(props, { attrs, emit, slots }) {
    const modelValue = computed(() => {
      return props.modelValue
    })

    return () => (
      <>
        <v-dialog
          model-value={modelValue.value}
          onUpdate:modelValue={() => emit('click:close', false)}
          v-slots={slots}
          {...attrs}
          scrollable
          width={props.width}
          min-height={props.minHeight}
        >
          <v-card prepend-icon={mdiAlert} title={props.title}>
            <v-card-text>{props.description}</v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                onClick={() => emit('click:confirm', true)}
              >
                Yes
              </v-btn>
              <v-btn color="primary" onClick={() => emit('click:close', false)}>
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </>
    )
  }
})
