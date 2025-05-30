<script lang="ts">
  import { onMount } from "svelte";

  import { scrolled } from "$lib/stores";

  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";

  let { children } = $props();

  onMount(() => {
    const mainElement = document.querySelector(".layout");

    if (mainElement) {
      mainElement.addEventListener("scroll", () => {
        scrolled.set(mainElement.scrollTop > 40);
      });
    }
  });
</script>

<style>
  .layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
  }
</style>

<div class="layout">
  <Header />

  <main>
    {@render children?.()}
  </main>

  <Footer />
</div>
