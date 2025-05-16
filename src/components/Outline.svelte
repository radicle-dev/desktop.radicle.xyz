<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    fullWidth?: boolean;
    flatTop?: boolean;
    flatBottom?: boolean;
    children: Snippet;
  }

  const {
    fullWidth = false,
    flatTop = false,
    flatBottom = true,
    children,
  }: Props = $props();
</script>

<style>
  .inner-box {
    width: 100%;
    flex: 1;
    padding: 0;
  }

  .wrapper {
    width: 25rem;
    display: flex;
    flex-direction: column;
    min-height: 3rem;
  }
  .cmd-center {
    display: flex;
    height: 100%;
  }
  .cmd-vertical {
    background: var(--color-fill-ghost);
    width: 2px;
  }
  .cmd-horizontal {
    background: var(--color-border-hint);
    display: flex;
    width: 100%;
    height: 2px;
  }

  .full-width.wrapper {
    width: 100%;
  }
</style>

<div class="wrapper" class:full-width={fullWidth}>
  <div style:display="flex">
    {#if !flatTop}
      <div style:width="2px" style:height="2px"></div>
    {/if}
    <div class="cmd-horizontal"></div>
    {#if !flatTop}
      <div style:width="2px" style:height="2px"></div>
    {/if}
  </div>
  <div class="cmd-center">
    <div class="cmd-vertical"></div>
    <div class="inner-box">{@render children()}</div>
    <div class="cmd-vertical"></div>
  </div>
  <div style:display="flex">
    {#if !flatBottom}
      <div style:width="2px" style:height="2px"></div>
    {/if}
    <div class="cmd-horizontal"></div>
    {#if !flatBottom}
      <div style:width="2px" style:height="2px"></div>
    {/if}
  </div>
</div>
