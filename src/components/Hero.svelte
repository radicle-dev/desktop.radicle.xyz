<script lang="ts">
  import { onMount } from "svelte";
  import Command from "./Command.svelte";
  import videoSrc from "../assets/desktop-review.mp4"; // Import the video source
  import OsSwitch from "./OsSwitch.svelte";

  let { qrcodeVisible = $bindable() }: { qrcodeVisible: boolean } = $props();

  const version = "0.3.0";
  const releaseFolder = "2025-05-08T16:24:32Z_25c6ab32";
  const buildSha = releaseFolder.split("_")[1];

  const files = {
    mac: { extension: "dmg", name: `Radicle_${version}_aarch64.dmg` },
    linux: { extension: "AppImage", name: `Radicle_${version}_amd64.AppImage` },
  };

  let isPlaying = false;
  let os: "mac" | "linux" = $state(
    navigator.platform.startsWith("Mac") ? "mac" : "linux",
  );

  const command = $derived(
    `curl --output radicle-desktop-${version}-${buildSha}.${files[os].extension} 'https://minio-api.radworks.garden/radworks-releases/radicle-desktop/${releaseFolder}/${files[os].name}'`,
  );

  onMount(() => {
    const video = document.getElementById("video") as HTMLVideoElement;
    const preloader = document.querySelector(".preloader") as HTMLElement;
    const playButton = document.querySelector(".play-button") as HTMLElement;

    // Show the preloader
    preloader.style.display = "block";

    // Set the video source dynamically
    const source = document.createElement("source");
    source.src = videoSrc;
    source.type = "video/mp4";
    video.appendChild(source);

    // Listen for the video to be ready to play
    video.addEventListener("canplaythrough", () => {
      // Hide the preloader
      preloader.style.display = "none";
      // Show the video
      video.style.display = "block";
    });

    // Handle video loading errors
    video.addEventListener("error", () => {
      preloader.textContent = "Failed to load video";
    });

    // Handle play/pause functionality
    playButton.addEventListener("click", () => {
      if (isPlaying) {
        video.pause();
        playButton.style.display = "block";
      } else {
        video.play();
        qrcodeVisible = false;
        playButton.style.display = "none";
        video.setAttribute("controls", "controls"); // Show video controls
      }
      isPlaying = !isPlaying;
    });

    // Show play button when video ends
    video.addEventListener("ended", () => {
      playButton.style.display = "flex";
      isPlaying = false;
      qrcodeVisible = true;
    });
  });
</script>

<style>
  .container {
    background: var(--color-background-default);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    gap: 4rem;
  }
  .hero-text {
    max-width: 40rem;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
  .buttons {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }
  .video-container {
    position: relative;
    padding: 0 4rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-foreground-dim);
    font-size: 20px;
    display: none;
  }

  .video {
    border: 1px solid var(--color-border-hint);
    height: 100%; /* Adjust the height as needed */
    display: none;
  }
  .buttons a {
    text-decoration: none;
  }
  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 64px;
    height: 64px;
    background-color: var(--color-foreground-white);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-foreground-emphasized);
    font-size: 1.5rem;
    cursor: pointer;
  }

  @media (min-width: 719.98px) {
    .container {
      padding: 2rem 4rem 4rem 4rem;
    }
    .buttons {
      display: flex;
    }
  }
</style>

<div class="container">
  <div class="hero-text">
    <span class="h1">
      Local-first code collaboration <br />
      on a peer-to-peer network
    </span>
    <span class="subtitle">
      Radicle Desktop lets you manage issues, review code, and stay in sync with
      your team — all on a peer-to-peer network. Say goodbye to platform
      lock-in. Radicle runs locally and syncs with your network.
    </span>
  </div>
  <div class="buttons">
    <div style:display="inline-flex">
      <OsSwitch bind:os />
      <Command flatLeft {command}></Command>
    </div>
    <span>
      Or check out the
      <a
        target="_blank"
        href="https://app.radicle.xyz/nodes/seed.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury">
        source code
      </a>
    </span>
  </div>
  <div class="video-container">
    <div class="preloader">Loading...</div>
    <video id="video" class="video">
      <track kind="captions" />
      Your browser does not support the video tag.
    </video>
    <div class="play-button">▶</div>
  </div>
</div>
