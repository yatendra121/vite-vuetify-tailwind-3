import { useFormFilterStore } from '@/store/reactivity/formFiler'
import { useFormValues } from 'vee-validate'
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  PropType
} from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props, { slots }) {
    const filterId = computed(() => {
      return `${props.id}`
    })

    const formValues = useFormValues()
    const formFilterStore = useFormFilterStore()

    onMounted(() => {
      formFilterStore.addForm(filterId.value, formValues)
    })

    onBeforeUnmount(() => formFilterStore.removeForm(filterId.value))

    return () => <>{slots.default?.()}</>
  }
})
