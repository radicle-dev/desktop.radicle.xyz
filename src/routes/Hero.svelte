<script lang="ts">
  import { base } from "$app/paths";

  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Download from "./Download.svelte";

  let isPlaying = false;
  let lightboxOpen = $state(false);
  let lightboxVideo: HTMLVideoElement | undefined = $state();

  function openLightbox() {
    lightboxOpen = true;
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  }

  function closeLightbox() {
    lightboxOpen = false;
    document.body.style.overflow = "";
    if (lightboxVideo) {
      lightboxVideo.pause();
    }
  }

  function handleLightboxClick(event: any) {
    // Check if clicked on the lightbox background (not the video itself)
    if (event.target.classList.contains("lightbox")) {
      closeLightbox();
    }
  }

  onMount(() => {
    const video = document.getElementById("video") as HTMLVideoElement;
    const preloader = document.querySelector(".preloader") as HTMLElement;
    const playButton = document.querySelector(".play-button") as HTMLElement;

    // Show the preloader
    preloader.style.display = "block";

    // Set the video source dynamically
    const source = document.createElement("source");
    source.src = `${base}/desktop-review.mp4`;
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

    // Handle play button click
    playButton.addEventListener("click", () => {
      openLightbox();
    });

    // Make video clickable to open lightbox
    video.addEventListener("click", () => {
      if (!isPlaying) {
        openLightbox();
      }
    });

    // Show play button when video ends
    video.addEventListener("ended", () => {
      playButton.style.display = "flex";
      isPlaying = false;
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
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    .container {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 2rem;
      gap: 4rem;
    }
  }

  .hero-text {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    .hero-text {
      padding: 6rem 2rem;
      flex: 2;
      align-items: flex-start;
      text-align: left;
      max-width: 40%;
    }
  }

  .video-container {
    position: relative;
    padding: 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    display: flex;
    justify-content: center;
    align-items: center;
    width: min(560px, 100%);
  }

  @media (min-width: 1024px) {
    .video-container {
      flex: 3;
      padding: 0;
      width: min(750px, 100%);
    }
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
    width: 100%;
    height: 100%;
    aspect-ratio: 16/9;
    display: none;
    border-radius: 8px;
    cursor: pointer;
    object-fit: cover;
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
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .play-button:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 2rem;
    box-sizing: border-box;
    backdrop-filter: blur(5px);
  }

  .lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
  }

  .lightbox-video {
    width: 100%;
    height: 100%;
    aspect-ratio: 16/9;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    object-fit: contain;
  }

  .close-button {
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 36px;
    height: 36px;
    background-color: var(--color-foreground-white);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-foreground-emphasized);
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    line-height: 1;
    padding-bottom: 2px;
    z-index: 1001;
  }

  @media (min-width: 719.98px) {
    .download {
      width: 100%;
      max-width: 600px;
    }
    .container {
      padding: 2rem 4rem 4rem 4rem;
    }
  }

  @media (max-width: 1023.98px) {
    .container {
      flex-direction: column;
    }
  }

  @media (max-width: 719.98px) {
    .download {
      width: 100vw;
    }
    .close-button {
      top: 1rem;
      right: 1rem;
    }
  }
</style>

<div class="container">
  <div class="hero-text">
    <span class="h1">Code collaboration</span>
    <span class="h2">Local-First & Synced on the Radicle Network</span>
    <span class="subtitle">
      Radicle Desktop offers a familiar user interface to manage issues and
      review code - all on the radicle peer-to-peer network. Radicle Desktop
      runs locally and syncs with the network.
    </span>
    <div class="download">
      <Download />
    </div>
  </div>
  <div class="video-container">
    <div class="preloader">Loading...</div>
    <video id="video" class="video">
      <track kind="captions" />
      Your browser does not support the video tag.
    </video>
    <div class="play-button">▶</div>
  </div>

  {#if lightboxOpen}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="lightbox"
      onclick={handleLightboxClick}
      transition:fade={{ duration: 200 }}>
      <div class="lightbox-content">
        <button
          class="close-button"
          onclick={closeLightbox}
          aria-label="Close video">
          ×
        </button>
        <video
          bind:this={lightboxVideo}
          id="lightbox-video"
          class="lightbox-video"
          controls
          autoplay>
          <source src="{base}/desktop-review.mp4" type="video/mp4" />
          <track kind="captions" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  {/if}
</div>
