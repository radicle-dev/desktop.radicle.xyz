<script lang="ts">
  import NakedButton from "./NakedButton.svelte";
  import Icon from "./Icon.svelte";
  import { theme } from "../lib/theme";
  import { scrolled } from "../lib/stores";

  function toggleTheme() {
    theme.set($theme === "dark" ? "light" : "dark");
  }
</script>

<style>
  .header {
    z-index: 50;
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.5rem;
    background-color: var(--color-background-default);
    transition: box-shadow 0.325s;
  }
  .title {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-foreground-contrast);
  }
  .header-right {
    gap: irem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

<div
  class="header"
  style:box-shadow={`${$scrolled ? "0 4px 8px 0 rgba(0,0,0,0.075)" : "0 4px 8px 0 rgba(0,0,0,0)"}`}>
  <span class="title">RADWORKS</span>
  <div class="header-right">
    <NakedButton variant="ghost" onclick={toggleTheme}>
      <Icon name={$theme === "dark" ? "moon" : "sun"}></Icon>
    </NakedButton>
    <NakedButton variant="ghost">
      <Icon size="16" name="seedling" />
      About
    </NakedButton>
    <NakedButton variant="ghost">
      <Icon size="16" name="bluesky" />
      Bluesky
    </NakedButton>
    <NakedButton variant="ghost">
      <Icon size="16" name="zulip" />
      Support
    </NakedButton>
  </div>
</div>
