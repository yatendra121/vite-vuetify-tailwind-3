<template>
  <v-responsive>
    <v-container :fluid="true" style="padding-left: 0px; padding-right: 0px">
      <v-row justify="end" no-gutters style="gap: 0.5rem">
        <slot></slot>
      </v-row>
    </v-container>
  </v-responsive>
</template>
