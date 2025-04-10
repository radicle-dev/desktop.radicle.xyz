<script lang="ts">
  import Icon from "./Icon.svelte";
  import Button from "./Button.svelte";

  let { os = $bindable() }: { os: "mac" | "linux" } = $props();
</script>

<style>
  .container {
    display: flex;
    align-items: center;
  }
</style>

<div class="container">
  <Button
    flatRight
    active={os === "mac"}
    variant="ghost"
    onclick={() => (os = "mac")}>
    <Icon name="moon" />
    Mac
  </Button>

  <Button
    flatLeft
    flatRight
    variant="ghost"
    active={os === "linux"}
    onclick={() => (os = "linux")}>
    <Icon name="sun" />
    Linux
  </Button>
</div>
