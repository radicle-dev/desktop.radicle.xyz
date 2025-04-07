import storedWritable from "@efstajas/svelte-stored-writable";
import { literal, union, z } from "zod";

const themeSchema = union([literal("dark"), literal("light")]);
type Theme = z.infer<typeof themeSchema>;

export const theme = storedWritable<Theme>(
  "theme",
  themeSchema,
  loadTheme(),
  !window.localStorage,
);

export function loadTheme(): Theme {
  const { matches } = window.matchMedia("(prefers-color-scheme: dark)");

  return matches ? "dark" : "light";
}
