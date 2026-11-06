<template>
  <!-- Uses no fixed props, so it shows exactly what the global settings do. -->
  <v-card class="pa-3">
    <div class="d-flex flex-wrap align-center ga-2 mb-3">
      <v-btn color="primary" size="small">Button</v-btn>
      <v-chip color="primary" size="small">Chip</v-chip>
      <v-badge content="3" color="error" inline>
        <span class="text-body-small">Badge</span>
      </v-badge>
    </div>
    <v-text-field label="Text field" hide-details class="mb-2" />
    <v-select
      label="Select"
      :items="['One', 'Two']"
      model-value="One"
      hide-details
      class="mb-2"
    />
    <div class="d-flex align-center ga-2 mb-2">
      <v-checkbox :model-value="true" label="Check" hide-details />
      <v-switch :model-value="true" label="Switch" hide-details />
    </div>
    <v-alert type="info" text="Alert message" />
  </v-card>
</template>
