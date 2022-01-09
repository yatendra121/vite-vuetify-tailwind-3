<template>
  <v-layout :full-height="true">
    <v-container fluid>
      <v-card
        align="center"
        justify="center"
        min-width="500"
        min-height="300"
        rounded
        variant="contained"
        density="comfortable"
      >
        <v-card-img>
          <v-img src="..." />
        </v-card-img>

        <v-card-media>
          <v-img src="..." />
        </v-card-media>

        <v-card-header>
          <v-card-avatar>
            <!-- <v-avatar image="..." /> -->
          </v-card-avatar>

          <v-card-header-text>
            <v-card-title>404</v-card-title>

            <v-card-subtitle>Page Not Found.</v-card-subtitle>
          </v-card-header-text>

          <v-card-avatar>
            <!-- <v-avatar icon="..."> -->
          </v-card-avatar>
        </v-card-header>

        <v-card-text> Page not found </v-card-text>

        <v-card-actions>
          <v-btn>Action 1</v-btn>

          <v-btn>Action 2</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-layout>
</template>
