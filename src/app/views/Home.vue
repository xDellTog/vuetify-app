<script setup lang="ts">
import router from "../router";

//
</script>

<template>
  <v-container>
    <h1>Home</h1>

    <v-btn @click="() => router.push('/about')"> About </v-btn>
  </v-container>
</template>
