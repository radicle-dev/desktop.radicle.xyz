<script lang="ts">
  import Command from "./Command.svelte";
  import RepoCard from "./RepoCard.svelte";
</script>

<style>
  .container {
    width: 100%;
    display: flex;
    background: var(--color-background-default);
    color: var(--color-foreground-contrast);
    height: 1000px;
    flex-direction: column;
    align-items: center;
    padding: 4rem 4rem;
    gap: 2rem;
  }
</style>

<div class="container">
  <span class="txt-large txt-semibold">Need something to play with?</span>
  <div
    style="display: flex; gap: 2rem; align-items: center; justify-content: center; padding-left: 4rem; ">
    <RepoCard />
    <div
      style="display: flex; flex-direction: column; justify-items: space-between; gap: 1rem; width: 50%; height: 100%;">
      <span>
        Clone this repo to get started. You'll find instructions and hints to
        learn your way around Radicle.
      </span>
      <Command command="rad clone <rid>" />
    </div>
  </div>
</div>
