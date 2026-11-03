<template>
  <div class="d-flex flex-column align-center text-center pa-6">
    <img
      src="@/assets/404-illustration.svg"
      alt=""
      width="320"
      style="max-width: 100%; height: auto"
    />
    <h1 class="text-headline-small font-weight-bold mt-6">Page not found</h1>
    <p class="text-body-medium text-medium-emphasis mt-2 mb-6">
      The page you're looking for doesn't exist or has moved.
    </p>
    <v-btn color="primary" :to="{ name: 'dashboard' }">Back to Dashboard</v-btn>
  </div>
</template>
