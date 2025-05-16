<script lang="ts">
  import Command from "./Command.svelte";
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";

  const files = {
    dmg: {
      icon: "apple",
      name: "radicle-desktop-aarch64.dmg",
      label: "Apple Silicon",
    },
    appimage: {
      icon: "linux",
      name: "radicle-desktop-amd64.AppImage",
      label: "Linux AppImage",
    },
  } as const;

  let target: keyof typeof files = $state(
    navigator.platform.startsWith("Mac") ? "dmg" : "appimage",
  );

  let dropdownOpen = $state(false);

  const command = $derived(
    `curl -OJ https://minio-api.radworks.garden/radworks-releases/radicle-desktop/latest/${target}/${files[target].name}`,
  );

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }

  function selectTarget(selectedTarget: keyof typeof files) {
    target = selectedTarget;
    dropdownOpen = false;
  }
</script>

<style>
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2rem;
    width: 100%;
    max-width: 600px;
  }

  .buttons a {
    text-decoration: none;
  }
  .download-instructions {
    font-size: 0.9rem;
    color: var(--color-foreground-dim);
    width: 100%;
  }

  .or-source-code {
    font-size: 0.9rem;
    color: var(--color-foreground-dim);
    width: 100%;
  }

  .download-instructions code {
    background: var(--color-background-float);
    padding: 0.1rem 0.3rem;
    border-radius: 3px;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--color-background-default);
    width: 200px;
    border: 1px solid var(--color-border-hint);
    border-radius: 4px;
    z-index: 1;
    top: 100%;
    left: 0;
  }
  .dropdown-content.show {
    display: block;
  }
  .dropdown-item {
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }
  .dropdown-item:hover {
    background-color: var(--color-background-float);
  }
  .os-button-content {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  .os-label {
    display: flex;
    align-items: center;
    gap: 6px;
  }
</style>

<div class="buttons">
  <div style:display="flex" style:width="100%">
    <div class="dropdown">
      <Button
        fixedWidth="200px"
        variant="ghost"
        flatRight
        onclick={toggleDropdown}>
        <div class="os-button-content">
          <div class="os-label">
            <Icon name={files[target].icon} />
            {files[target].label}
          </div>
          <Icon name="chevron-down" />
        </div>
      </Button>
      <div class="dropdown-content" class:show={dropdownOpen}>
        {#each Object.entries(files) as [extension, file]}
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div
            class="dropdown-item"
            onclick={() => selectTarget(extension as keyof typeof files)}>
            <Icon name={file.icon} />
            {file.label}
          </div>
        {/each}
      </div>
    </div>
    <div style:flex="1" style:width="100%" style:overflow="hidden">
      <Command flatLeft {command} fullWidth></Command>
    </div>
  </div>
  <div class="download-instructions">
    {#if target === "dmg"}
      <p>
        Download and open the DMG file, then drag the Radicle app to your
        Applications folder.
      </p>
    {:else}
      <p>
        Download, make the file executable with <code>chmod +x</code>
        , and run it.
      </p>
    {/if}
  </div>
  <span class="or-source-code">
    Or check out the
    <a
      target="_blank"
      href="https://app.radicle.xyz/nodes/seed.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury">
      source code.
    </a>
  </span>
</div>
