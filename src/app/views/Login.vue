<script setup lang="ts">
import router from "../router";

const login = () => {
  router.replace("/");
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Login</h1>
        <v-btn @click="login" color="primary">Entrar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
