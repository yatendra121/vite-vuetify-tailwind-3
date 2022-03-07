
import { defineComponent } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import graphqlTag from 'graphql-tag'
export default defineComponent({
  setup() {
    const { result } = useQuery(graphqlTag`
      query Query {
        allChats {
          message
        }
      }
    `)
    return () => (
      <div class="wrapper">
        <v-text-field
          append-inner-icon="mdi-magnify"
          placeholder="Search"
          color="primary"
          clearable
          loading
          label="Testing "
          persistent-clear
        />
        <div>{JSON.stringify(result.value)}</div>
      </div>
    )
  }
})
