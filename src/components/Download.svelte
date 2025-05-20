<script lang="ts">
  import Button from "./Button.svelte";
  import Command from "./Command.svelte";
  import Icon from "./Icon.svelte";

  const buildSha = "25c6ab322b697ace4bd30bce2c515e659a14bccb";

  const platforms = {
    macOS: {
      icon: "apple",
      label: "Apple Silicon",
      command:
        "curl -OJ https://minio-api.radworks.garden/radworks-releases/radicle-desktop/latest/dmg/radicle-desktop-aarch64.dmg",
    },
    Linux: {
      icon: "linux",
      command:
        "curl -OJ https://minio-api.radworks.garden/radworks-releases/radicle-desktop/latest/appimage/radicle-desktop-amd64.AppImage",
      label: "Linux AppImage",
    },
    NixOS: {
      icon: "nixos",
      label: "NixOS",
      command: `nix run git+https://seed.radicle.xyz/z4D5UCArafTzTQpDZNQRuqswh3ury.git?rev=${buildSha}`,
    },
  } as const;

  let target: keyof typeof platforms = $state(
    navigator.platform.startsWith("Mac") ? "macOS" : "Linux",
  );

  let dropdownOpen = $state(false);
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
    white-space: pre;
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
    border: 0;
    width: 100%;
    background-color: var(--color-background-default);
    color: var(--color-foreground-default);
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
        onclick={() => (dropdownOpen = !dropdownOpen)}>
        <div class="os-button-content">
          <div class="os-label">
            <Icon name={platforms[target].icon} />
            {platforms[target].label}
          </div>
          <Icon name="chevron-down" />
        </div>
      </Button>
      <div class="dropdown-content" class:show={dropdownOpen}>
        {#each Object.entries(platforms) as [platform, { icon, label }]}
          <button
            class="dropdown-item"
            onclick={() => {
              target = platform as keyof typeof platforms;
              dropdownOpen = false;
            }}>
            <Icon name={icon} />
            {label}
          </button>
        {/each}
      </div>
    </div>
    <div style:flex="1" style:width="100%" style:overflow="hidden">
      <Command flatLeft command={platforms[target].command} fullWidth></Command>
    </div>
  </div>
  <div class="download-instructions">
    {#if target === "macOS"}
      <p>
        Download and open the DMG file, then drag the Radicle app to your
        Applications folder.
      </p>
    {:else if target === "Linux"}
      <!-- prettier-ignore -->
      <p>
        Download, make the file executable with <code>chmod +x</code>, and run
        it.
      </p>
    {:else if target === "NixOS"}
      <!-- prettier-ignore -->
      <p>
        Give it a try with <code>nix run</code> and if you like it, make it
        permanent with <code>nix profile install</code>.
      </p>
    {/if}
  </div>
  <span class="or-source-code">
    Or check out the
    <!-- prettier-ignore -->
    <span>
      <a
        target="_blank"
        href="https://app.radicle.xyz/nodes/seed.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury">
        source code
      </a>.
    </span>
  </span>
</div>
