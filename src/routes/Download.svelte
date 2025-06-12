<script lang="ts">
  import type { ComponentProps } from "svelte";

  import { browser } from "$app/environment";

  import Button from "$lib/components/Button.svelte";
  import Command from "$lib/components/Command.svelte";
  import Icon from "$lib/components/Icon.svelte";

  const latestUrl =
    "https://minio-api.radworks.garden/radworks-releases/radicle-desktop/latest/latest.json";

  type Platform =
    | "LinuxAppImage"
    | "LinuxArch"
    | "LinuxDebian"
    | "NixOS"
    | "WindowsWSL2"
    | "macOS";

  interface Installer {
    icon: ComponentProps<typeof Icon>["name"];
    label: string;
    command: string | undefined;
  }

  async function fetchLatest(): Promise<Record<Platform, Installer>> {
    const response = await fetch(latestUrl, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${latestUrl}: ${response.status}`);
    }

    const data = await response.json();

    const buildSha = data.sha;
    const shortBuildSha = buildSha.substring(0, 7);

    const version = data.version;

    return {
      macOS: {
        icon: "apple",
        label: "Apple Silicon",
        command: `curl --output ~/Downloads/radicle-desktop-${version}-${shortBuildSha}-aarch64.dmg https://minio-api.radworks.garden/radworks-releases/radicle-desktop/latest/dmg/radicle-desktop-aarch64.dmg && open ~/Downloads/radicle-desktop-${version}-${shortBuildSha}-aarch64.dmg`,
      },
      LinuxAppImage: {
        icon: "linux",
        command: `curl --output radicle-desktop-${version}-${shortBuildSha}-amd64.AppImage https://minio-api.radworks.garden/radworks-releases/radicle-desktop/latest/appimage/radicle-desktop-amd64.AppImage`,
        label: "Linux AppImage",
      },
      LinuxDebian: {
        icon: "linux",
        label: "Debian/Ubuntu",
        command: undefined,
      },
      LinuxArch: {
        icon: "archlinux",
        label: "Arch Linux",
        command: "yay -S radicle-desktop",
      },
      NixOS: {
        icon: "nixos",
        label: "NixOS",
        command: `nix run 'git+https://seed.radicle.xyz/z4D5UCArafTzTQpDZNQRuqswh3ury.git?rev=${buildSha}'`,
      },
      WindowsWSL2: {
        icon: "windows",
        label: "Windows WSL2",
        command: undefined,
      },
    };
  }

  let target: Platform = $state(
    browser && /^(Mac|iPhone|iPad)/.test(navigator.platform)
      ? "macOS"
      : "LinuxDebian",
  );

  let dropdownOpen = $state(false);
</script>

<style>
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2rem;
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
  .instructions-box {
    background: var(--color-fill-ghost);
    padding: 0.75rem 1rem;
  }
</style>

<div class="buttons">
  {#await fetchLatest()}
    Fetching latest versions…
  {:then platforms}
    <div style:display="flex" style:width="100%">
      <div class="dropdown">
        <Button
          fixedWidth="200px"
          variant="ghost"
          flatRight={platforms[target].command !== undefined}
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
                target = platform as Platform;
                dropdownOpen = false;
              }}>
              <Icon name={icon} />
              {label}
            </button>
          {/each}
        </div>
      </div>
      {#if platforms[target].command !== undefined}
        <div style:flex="1" style:width="100%" style:overflow="hidden">
          <Command flatLeft command={platforms[target].command!} fullWidth
          ></Command>
        </div>
      {/if}
    </div>
    <div class="download-instructions">
      {#if target === "macOS"}
        <p>
          Run the command in your terminal to download and open the DMG file.
          <br />
          Then drag the Radicle app to your Applications folder.
        </p>
      {:else if target === "LinuxDebian"}
        <!-- prettier-ignore -->
        <p>
        Add the following line to your <code>/etc/apt/sources.list</code>:
      </p>
        <p class="instructions-box txt-monospace txt-small">
          deb [trusted=yes] https://radicle.xyz/apt unstable main
        </p>
        <p>Run the following command to install Radicle Desktop:</p>
        <p class="instructions-box txt-monospace txt-small">
          $ sudo apt update
          <br />
          $ sudo apt install radicle-desktop
        </p>
      {:else if target === "LinuxAppImage"}
        <!-- prettier-ignore -->
        <p>
        Download, make the file executable with <code>chmod +x</code>, and run
        it.
      </p>
      {:else if target === "LinuxArch"}
        <!-- prettier-ignore -->
        <p>
        A <a
          href="https://aur.archlinux.org/packages/radicle-desktop"><code>radicle-desktop</code></a>
        package is available from the Arch User Repository.
      </p>
        <!-- prettier-ignore -->
        <p>
          See the Arch Linux Wiki to learn how to <a
            href="https://wiki.archlinux.org/title/Arch_User_Repository#Installing_and_upgrading_packages">
            install packages from the AUR
          </a>.
        </p>
      {:else if target === "NixOS"}
        <!-- prettier-ignore -->
        <p>
        Give it a try with <code>nix run</code> and if you like it, make it
        permanent with <code>nix profile install</code>.
      </p>
      {:else if target === "WindowsWSL2"}
        <p>
          Use <a href="https://learn.microsoft.com/en-us/windows/wsl/install">
            WSL2
          </a>
          with any of the Linux install options to run Radicle Desktop on Windows.
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
      </a>.</span>
    </span>
  {:catch err}
    <div>
      <div class="global-flex" style:margin-bottom="1rem">
        <Icon name="warning" />
        The download section is currently unavailable.
      </div>
      <code class="txt-tiny">
        {err}
      </code>
    </div>
    <span class="or-source-code" style:margin-top="1rem">
      In the mean time, try compiling from
      <!-- prettier-ignore -->
      <span>
      <a
        target="_blank"
        href="https://app.radicle.xyz/nodes/seed.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury">
        source
      </a>.</span>
    </span>
  {/await}
</div>
