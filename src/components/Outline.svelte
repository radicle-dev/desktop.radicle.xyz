<script lang="ts">
  interface Props {
    fullWidth?: boolean;
    flatLeft?: boolean;
    flatTop?: boolean;
    flatBottom?: boolean;
  }

  const {
    fullWidth = false,
    flatLeft = false,
    flatTop = false,
    flatBottom = true,
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
    <div class="inner-box"><slot /></div>
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
