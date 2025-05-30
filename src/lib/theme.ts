import { browser } from "$app/environment";
import { writable } from "svelte/store";
import z from "zod";

const themeSchema = z.union([z.literal("dark"), z.literal("light")]);
type Theme = z.infer<typeof themeSchema>;

function loadTheme(): Theme {
  if (!browser) return "light";

  const stored = localStorage.getItem("theme");
  if (stored && themeSchema.safeParse(stored).success) {
    return stored as Theme;
  }

  const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
  return matches ? "dark" : "light";
}

function createThemeStore() {
  const { subscribe, set } = writable<Theme>(loadTheme());

  return {
    subscribe,
    set: (value: Theme) => {
      if (browser) {
        localStorage.setItem("theme", value);
        document.documentElement.setAttribute("data-theme", value);
      }
      set(value);
    },
  };
}

export const theme = createThemeStore();
