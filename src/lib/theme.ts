import { writable } from 'svelte/store';
import { literal, union, z } from "zod";

const themeSchema = union([literal("dark"), literal("light")]);
type Theme = z.infer<typeof themeSchema>;

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function loadTheme(): Theme {
  if (!isBrowser()) return 'light';
  
  const stored = localStorage.getItem('theme');
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
      if (isBrowser()) {
        localStorage.setItem('theme', value);
      }
      set(value);
    }
  };
}

export const theme = createThemeStore();
