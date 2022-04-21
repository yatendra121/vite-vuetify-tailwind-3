import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: 'ConfirmDialog',
  setup() {

    const dialog = ref(false)

    return () => (
      <>
      <v-dialog
      model-value={dialog}
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block onClick="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </>
    )
  }
})

