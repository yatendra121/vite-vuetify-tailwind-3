import { computed, defineComponent, PropType } from 'vue'
import { mdiAlertCircleOutline } from '@mdi/js'
import {
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VDialog,
  VSpacer
} from 'vuetify/components'

// `onClick` is missing from VBtn's generated JSX types.
const Btn: any = VBtn

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
    confirmText: {
      type: String as PropType<string>,
      default: () => 'Confirm'
    },
    width: {
      type: String as PropType<number | string>,
      default: () => '25rem'
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: () => false
    },
    modelValue: {
      type: Boolean as PropType<boolean>,
      default: () => false
    }
  },
  emits: {
    'click:close': (_val: boolean) => true,
    'click:confirm': (_val: boolean) => true
  },
  setup(props, { attrs, emit, slots }) {
    const modelValue = computed(() => {
      return props.modelValue
    })

    return () => (
      <>
        <VDialog
          modelValue={modelValue.value}
          onUpdate:modelValue={() => emit('click:close', false)}
          v-slots={slots}
          {...attrs}
          persistent={props.loading}
          maxWidth={props.width}
        >
          <VCard prependIcon={mdiAlertCircleOutline} title={props.title}>
            <VCardText>{props.description}</VCardText>
            <VCardActions>
              <VSpacer />
              <Btn
                disabled={props.loading}
                onClick={() => emit('click:close', false)}
              >
                Cancel
              </Btn>
              <Btn
                color="error"
                variant="flat"
                loading={props.loading}
                onClick={() => emit('click:confirm', true)}
              >
                {props.confirmText}
              </Btn>
            </VCardActions>
          </VCard>
        </VDialog>
      </>
    )
  }
})
