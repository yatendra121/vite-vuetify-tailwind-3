import { mdiCircleEditOutline } from '@mdi/js'
import { toRefs } from '@vueuse/core'
import { defineComponent } from 'vue'
import { VBtn, VTooltip } from 'vuetify/components'
export default defineComponent({
  name: 'VqBtn',
  props: {
    icon: {
      type: String,
      default: () => mdiCircleEditOutline
    },
    hintTitle: {
      type: String,
      default: () => 'Edit'
    },
    variant: {
      type: String,
      default: () => 'text'
    },
    color: {
      type: String,
      default: () => 'primary'
    }
  },
  inheritAttrs: false,
  setup(props, { attrs, slots }) {
    const { variant, color, icon } = toRefs(props)
    return () => (
      <>
        <VTooltip text={props.hintTitle}>
          {{
            activator: ({ props }: any) => (
              <>
                <VBtn
                  variant={variant.value}
                  color={color.value}
                  icon={icon.value}
                  v-slots={slots}
                  {...attrs}
                  {...props}
                />
              </>
            )
          }}
        </VTooltip>
      </>
    )
  }
})
