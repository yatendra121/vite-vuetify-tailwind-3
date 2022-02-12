<template>
  <v-layout :full-height="true">
    <v-container fluid>
      <v-hover v-slot="{ hover, props }" open-delay="0">
        <v-card
          :elevation="hover ? 24 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          height="500"
          max-width="500"
          v-bind="props"
        >
          <img
            position="absolute"
            height="500"
            width="500"
            contained
            src="@/assets/404-illustration.svg"
            alt="Logo"
          />
        </v-card>
      </v-hover>
      <!-- <v-hover v-slot="{ hover }" open-delay="200">
        <v-sheet height="200" elevation="10">
          <img contain src="@/assets/404-illustration.svg" alt="Logo" />
        </v-sheet>
      </v-hover> -->
    </v-container>
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { AES, enc } from 'crypto-js'

export default defineComponent({
  setup() {
    console.time()
    const fruits = 'cascasc'
    //const text = fruits.toString()

    const text = JSON.stringify(fruits)

    // Encrypt
    const ciphertext = AES.encrypt(text, 'secret key 123').toString()

    console.log({ ciphertext })

    // Decrypt
    const bytes = AES.decrypt(ciphertext, 'secret key 123')
    console.log({ bytes })
    const originalText = bytes.toString(enc.Utf8)
    const last = JSON.parse(originalText)
    console.log({ last })
    console.timeEnd()
    // console.log(originalText)
    // console.log(originalText.split(','))
    // console.log(...originalText)
    // console.log(Array.from(originalText))
    // console.log(Object.assign([], originalText))
  }
})
</script>
