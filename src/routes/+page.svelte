<script lang="ts">
  import { theme } from "$lib/theme";

  import AboutRadicle from "./AboutRadicle.svelte";
  import Features from "./Features.svelte";
  import Hero from "./Hero.svelte";

  $effect(() => document.documentElement.setAttribute("data-theme", $theme));
</script>

<Hero />
<AboutRadicle />
<Features />
