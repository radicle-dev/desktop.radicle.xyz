<script lang="ts">
  import { onMount } from "svelte";

  import { scrolled } from "$lib/stores";

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
  }

  footer {
    display: inline;
    text-align: center;
    margin-top: auto;
    padding: 1rem 0;
    color: var(--color-foreground-dim);
  }
</style>

<div class="layout">
  <Header />

  <main>
    {@render children?.()}
  </main>

  <footer class="txt-small">&copy; 2025 Radicle</footer>
</div>
