import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref("light");

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  const setTheme = (newTheme: any) => {
    theme.value = newTheme;
  };

  return {
    theme,
    toggleTheme,
    setTheme,
  };
});
