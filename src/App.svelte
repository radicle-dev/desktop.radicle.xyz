<script lang="ts">
  import { onMount } from "svelte";
  import Features from "./components/Features.svelte";
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero.svelte";
  import { theme } from "./lib/theme";
  import { scrolled } from "./lib/stores";

  onMount(() => {
    const mainElement = document.querySelector("main");

    if (mainElement) {
      mainElement.addEventListener("scroll", () => {
        scrolled.set(mainElement.scrollTop > 40);
      });
    }
  });

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
