<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import NakedButton from "./NakedButton.svelte";
  import Icon from "./Icon.svelte";

  let currentTheme = "";

  // Function to toggle the theme
  const toggleTheme = () => {
    if (currentTheme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem("theme");
      currentTheme = "";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      currentTheme = "dark";
    }
  };

  // Check local storage for theme on component mount
  onMount(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      currentTheme = "dark";
    }
  });

  function goToRepo() {
    // Open the repo in explorer
    window.open(
      "https://app.radicle.xyz/nodes/seed.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury",
      "_blank",
    );
  }

  function downloadApp() {
    // Open the Radicle webpage in a new tab
    window.open("https://radicle.xyz", "_blank");
  }
</script>

<style>
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: var(--color-background-default);
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

<div class="header">
  <span class="title">RADWORKS</span>
  <div class="header-right">
    <NakedButton variant="ghost" onclick={toggleTheme}>
      <Icon name={currentTheme === "dark" ? "moon" : "sun"}></Icon>
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
