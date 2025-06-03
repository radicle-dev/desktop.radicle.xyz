<script lang="ts">
  import { theme } from "$lib/theme";
  import { scrolled } from "$lib/stores";
  import { page } from "$app/state";

  import NakedButton from "$lib/components/NakedButton.svelte";
  import Icon from "$lib/components/Icon.svelte";

  function toggleTheme() {
    theme.set($theme === "dark" ? "light" : "dark");
  }

  let expanded = $state(false);
</script>

<style>
  .header {
    z-index: 50;
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
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
  .desktop-menu {
    gap: 1rem;
    display: none;
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: var(--color-foreground-contrast);
    text-decoration: none;
  }
  a:hover {
    color: var(--color-foreground-contrast);
    text-decoration: none;
  }
  .mobile {
    display: none;
  }
  .mobile-dropdown {
    flex-direction: column;
    width: 100%;
    row-gap: 1rem;
    padding: 1rem;
  }

  @media (min-width: 719.98px) {
    .desktop-menu {
      display: flex;
    }
  }
  @media (max-width: 719.98px) {
    .mobile {
      display: flex;
    }
  }
</style>

{#snippet menu()}
  <a href="/blog">
    <NakedButton variant="ghost" active={page.url.pathname.includes("blog")}>
      <Icon size="16" name="blog" />
      Blog
    </NakedButton>
  </a>

  <a href="https://radicle.xyz" target="_blank">
    <NakedButton variant="ghost">
      <Icon size="16" name="seedling" />
      Radicle
    </NakedButton>
  </a>

  <a href="https://bsky.app/profile/radicle.xyz" target="_blank">
    <NakedButton variant="ghost">
      <Icon size="16" name="bluesky" />
      Bluesky
    </NakedButton>
  </a>

  <a
    href="https://radicle.zulipchat.com/#narrow/channel/369873-support"
    target="_blank">
    <NakedButton variant="ghost">
      <Icon size="16" name="zulip" />
      Support
    </NakedButton>
  </a>
{/snippet}

<div
  class="header"
  style:box-shadow={`${$scrolled ? "0 4px 8px 0 rgba(0,0,0,0.075)" : "0 4px 8px 0 rgba(0,0,0,0)"}`}>
  <a href="/"><span class="title">RADICLE DESKTOP</span></a>

  <div
    class="global-flex"
    style:margin-left="auto"
    style:flex-direction="row"
    style:gap="1rem">
    <NakedButton variant="ghost" onclick={toggleTheme}>
      <Icon name={$theme === "dark" ? "moon" : "sun"}></Icon>
    </NakedButton>
    <div class="desktop-menu">{@render menu()}</div>

    <div class="mobile">
      <NakedButton
        variant="ghost"
        onclick={() => {
          expanded = !expanded;
        }}>
        <Icon size="16" name="menu" />
      </NakedButton>
    </div>
  </div>
</div>

{#if expanded}
  <div class="mobile mobile-dropdown">
    {@render menu()}
  </div>
{/if}
