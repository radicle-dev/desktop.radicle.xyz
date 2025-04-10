<script lang="ts">
  import Clipboard from "./Clipboard.svelte";

  interface Props {
    command: string;
    fullWidth?: boolean;
    flatLeft?: boolean;
  }

  const { command, fullWidth = false, flatLeft = false }: Props = $props();

  let clipboard: Clipboard;

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      clipboard.copy();
      event.preventDefault(); // Prevent default action for space key
    }
  }
</script>

<style>
  .wrapper {
    width: 23rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .cmd-center {
    display: flex;
  }
  .cmd-vertical {
    background: var(--color-fill-ghost);
    width: 2px;
    height: 100%;
  }
  .cmd-horizontal {
    background: var(--color-border-hint);
    display: flex;
    width: 100%;
    height: 2px;
  }
  .cmd {
    width: 100%;
    cursor: pointer;
    height: 2rem;
    line-height: 2rem;
    border-radius: var(--border-radius-small);
    display: inline-block;
    font-family: var(--font-family-monospace);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-regular);
    padding: 0 2rem 0 0.75rem;
    position: relative;
    color: var(--color-foreground-dim);
    user-select: none;
  }
  .cmd:hover {
    color: var(--color-foreground-contrast);
  }
  .clipboard {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 2rem;
    height: 100%;
  }

  .full-width.wrapper,
  .full-width.cmd {
    width: 100%;
  }

  /* Add these styles to change colors on hover */
  .wrapper:hover .cmd-vertical,
  .wrapper:hover .cmd-horizontal {
    background: var(
      --color-fill-secondary
    ); /* Replace with your desired hover color */
  }
</style>

<div class="wrapper" class:full-width={fullWidth}>
  <div style:display="flex">
    {#if !flatLeft}
      <div style:width="2px" style:height="2px"></div>
    {/if}
    <div class="cmd-horizontal"></div>
    <div style:width="2px" style:height="2px"></div>
  </div>
  <div class="cmd-center">
    <div class="cmd-vertical"></div>
    <div
      role="button"
      tabindex="0"
      class="cmd txt-overflow"
      class:full-width={fullWidth}
      onclick={() => {
        clipboard.copy();
      }}
      onkeydown={handleKeyDown}>
      $ {command}
      <div class="clipboard">
        <Clipboard bind:this={clipboard} text={command} />
      </div>
    </div>
    <div class="cmd-vertical"></div>
  </div>
  <div style:display="flex">
    {#if !flatLeft}
      <div style:width="2px" style:height="2px"></div>
    {/if}
    <div class="cmd-horizontal"></div>
    <div style:width="2px" style:height="2px"></div>
  </div>
</div>
