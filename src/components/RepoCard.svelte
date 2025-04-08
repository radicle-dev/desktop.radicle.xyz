<script lang="ts">
  export let fullWidth: boolean = false;
</script>

<style>
  .wrapper {
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
    cursor: pointer;
    line-height: 2rem;
    border-radius: var(--border-radius-small);
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-regular);
    padding: 0.5rem 2rem 0.5rem 0.75rem;
    position: relative;
    color: var(--color-foreground-dim);
    user-select: none;
  }
  .cmd:hover {
    color: var(--color-foreground-contrast);
  }
  /* Add these styles to change colors on hover */
  .wrapper:hover .cmd-vertical,
  .wrapper:hover .cmd-horizontal {
    background: var(
      --color-fill-secondary
    ); /* Replace with your desired hover color */
  }

  .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-fill-ghost-hover);
    clip-path: var(--1px-corner-fill);
    height: 1.5rem;
    padding: 0 0.625rem;
    min-width: 1.5rem;
    font-weight: var(--font-weight-regular);
    flex-shrink: 0;
  }
</style>

<div class="wrapper" class:full-width={fullWidth}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div id="top-horizontal" style:display="flex">
    <div style:width="4px" style:height="2px"></div>
    <div class="cmd-horizontal"></div>
    <div style:width="4px" style:height="2px"></div>
  </div>
  <div id="top-horizontal-2" style:display="flex">
    <div style:width="2px" style:height="2px"></div>
    <div style:width="2px" class="cmd-horizontal"></div>
    <div style:display="flex" style:width="100%"></div>
    <div style:width="2px" class="cmd-horizontal"></div>
    <div style:width="2px"></div>
  </div>
  <div class="cmd-center">
    <div class="cmd-vertical"></div>
    <div role="button" tabindex="0" class="cmd txt-overflow">
      <div
        class="txt-semibold txt-regular"
        style="display:flex; gap:0.5rem; align-items: center;">
        <div class="badge" style:background-color="var(--color-fill-ghost)">
          d
        </div>
        <span>demo-repo</span>
      </div>
      <span style="line-height:2rem">A repo to play around with</span>
      <span
        class="txt-monospace txt-semibold"
        style="color:var(--color-foreground-emphasized); line-height:1rem">
        rad:z39mP9...i473tY
      </span>
    </div>
    <div class="cmd-vertical"></div>
  </div>
  <div id="top-horizontal-2" style:display="flex">
    <div style:width="2px" style:height="2px"></div>
    <div style:width="2px" class="cmd-horizontal"></div>
    <div style:display="flex" style:width="100%"></div>
    <div style:width="2px" class="cmd-horizontal"></div>
    <div style:width="2px"></div>
  </div>
  <div id="top-horizontal" style:display="flex">
    <div style:width="4px" style:height="2px"></div>
    <div class="cmd-horizontal"></div>
    <div style:width="4px" style:height="2px"></div>
  </div>
</div>
