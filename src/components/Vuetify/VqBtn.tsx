import { mdiCircleEditOutline } from '@mdi/js'
import { toRefs } from '@vueuse/core'
import { defineComponent } from 'vue'
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
  setup(props, { attrs, slots }) {
    const { variant, color, icon } = toRefs(props)
    return () => (
      <>
        <v-tooltip text={props.hintTitle}>
          {{
            activator: ({ props }: any) => (
              <>
                <v-btn
                  variant={variant.value}
                  color={color.value}
                  icon={icon.value}
                  v-slots={slots}
                  {...attrs}
                  {...props}
                ></v-btn>
              </>
            )
          }}
        </v-tooltip>
      </>
    )
  }
})
