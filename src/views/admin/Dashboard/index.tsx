import { defineComponent } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import graphqlTag from 'graphql-tag'
import { VDataTable } from 'vuetify/labs/VDataTable'
export default defineComponent({
  components: {
    VDataTable
  },
  setup() {
    const { result } = useQuery(graphqlTag`
      query Query {
        users {
          name
          id
          gender
          email
        }
      
      }
    `)
    return () => (
      <div class="wrapper">
        <VDataTable
          itemTitle="name"
          itemValue="email"
          items={[{ id: 1, name: 'yatendra', email: 'test' }]}
        />
        {result.value?.users.map((item, i) => (
          <li key={i}>
            {item.name} {item.email} {item.id} {item.gender}
          </li>
        ))}
        <v-text-field
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
