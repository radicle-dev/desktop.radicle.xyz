<script lang="ts">
  import Features from "./components/Features.svelte";
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero.svelte";
  import { theme } from "./lib/theme";

  $effect(() => document.documentElement.setAttribute("data-theme", $theme));
</script>

<style>
  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
  }
</style>

<main>
  <Header />
  <Hero />
  <Features />
</main>
