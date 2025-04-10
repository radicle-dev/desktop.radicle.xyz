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
    gap: 1rem;
    display: none;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 719.98px) {
    .header-right {
      display: flex;
    }
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
    <NakedButton
      onclick={() => window.open("https://radicle.xyz")}
      variant="ghost">
      <Icon size="16" name="seedling" />
      Radicle
    </NakedButton>
    <NakedButton
      variant="ghost"
      onclick={() => window.open("https://bsky.app/profile/radicle.xyz")}>
      <Icon size="16" name="bluesky" />
      Bluesky
    </NakedButton>
    <NakedButton
      onclick={() =>
        window.open(
          "https://radicle.zulipchat.com/#narrow/channel/369873-support",
        )}
      variant="ghost">
      <Icon size="16" name="zulip" />
      Support
    </NakedButton>
  </div>
</div>
