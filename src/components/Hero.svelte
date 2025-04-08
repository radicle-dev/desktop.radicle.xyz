<script lang="ts">
  import { onMount } from "svelte";
  import Command from "./Command.svelte";
  import videoSrc from "../assets/desktop-review.mp4"; // Import the video source

  let isPlaying = false;

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
        playButton.style.display = "none";
        video.setAttribute("controls", "controls"); // Show video controls
      }
      isPlaying = !isPlaying;
    });

    // Show play button when video ends
    video.addEventListener("ended", () => {
      playButton.style.display = "block";
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
    padding: 2rem 4rem 4rem 4rem;
    gap: 4rem;
  }
  .hero-text {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }
  .video-container {
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh; /* Adjust the height as needed */
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
</style>

<div class="container">
  <div class="hero-text">
    <span class="h1">
      Local-first code collaboration <br />
      on a peer-to-peer network
    </span>
    <span class="subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Download using the
      following command:
    </span>
  </div>
  <div class="buttons">
    <Command command="curl http://some.url --output radicle-desktop.dmg"
    ></Command>
    <span>
      Or check out the repository on
      <a
        target="_blank"
        href="https://app.radicle.xyz/nodes/seed.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury">
        Radicle
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
