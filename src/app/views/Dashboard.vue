<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue";
import router from "../router";
import { useThemeStore } from "../stores/theme.store";

const themeStore = useThemeStore();

const drawer = ref(false);

console.log(themeStore.theme);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const goTo = (page: string) => {
  router.push(page);
};
</script>

<template>
  <v-app :theme="themeStore.theme">
    <!-- <v-navigation-drawer v-model="drawer" location="start" pers>
      <v-list nav density="compact">
        <v-list-item @click="() => goTo('/')"> Home </v-list-item>
        <v-list-item @click="() => goTo('/about')"> About </v-list-item>
        <v-list-item @click="() => goTo('/login')"> Logout </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-app-bar density="compact" color="primary" class="rounded-b-xl">
      <template v-slot:prepend>
        <v-btn icon="mdi-arrow-left" @click="router.back" />
      </template>
      <!-- <v-app-bar-nav-icon variant="text" @click="toggleDrawer" /> -->

      <v-toolbar-title>DED</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:append>
        <v-btn
          :icon="
            themeStore.theme === 'light'
              ? 'mdi-weather-sunny'
              : 'mdi-weather-night'
          "
          @click="themeStore.toggleTheme"
        />
        <v-btn icon="mdi-home" @click="() => goTo('/')" />
        <v-btn icon="mdi-bell" @click="() => goTo('/')" />
        <v-btn icon="mdi-exit-to-app" @click="() => goTo('/login')" />
      </template>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
