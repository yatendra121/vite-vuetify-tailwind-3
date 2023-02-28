<template>
  <input type="file" @change="handleFile" id="input_dom_element" />
</template>

<script setup lang="ts">
//import { read, utils } from 'xlsx'
import { ref } from 'vue'

const list = ref<any>()

function handleFile(e: any) {
  // const file = e.target.files[0]
  // const reader = new FileReader()
  // reader.onload = function (e: any) {
  //   const data = e.target.result
  //   /* reader.readAsArrayBuffer(file) -> data will be an ArrayBuffer */
  //   const wb = read(e.target.result)
  //   const dataTest = utils.sheet_to_json<any>(wb.Sheets[wb.SheetNames[0]])
  //   list.value = dataTest
  //   console.log({ dataTest })
  //   /* DO SOMETHING WITH workbook HERE */
  // }
  // reader.readAsArrayBuffer(file)
}
</script>
