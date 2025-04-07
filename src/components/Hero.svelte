<script lang="ts">
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";

  function goToRepo() {
    // Open the repo in explorer
    window.open(
      "https://app.radicle.xyz/nodes/seed.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury",
      "_blank",
    );
  }

  function downloadApp() {
    // Open the Radicle webpage in a new tab
    window.open("https://radicle.xyz", "_blank");
  }
</script>

<style>
  .container {
    max-width: 960px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 4rem;
    gap: 2rem;
  }
  .hero-text {
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .video-container {
    background-image: url("../assets/desktop-app.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75vh;
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
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam
    </span>
  </div>
  <div class="buttons">
    <Button variant="ghost" onclick={goToRepo}>
      <Icon name="seedling"></Icon>
      See on Radicle
    </Button>
    <Button variant="secondary" onclick={downloadApp}>
      <Icon name="clone"></Icon>
      Download
    </Button>
  </div>
  <div class="video-container">Video placeholder</div>
</div>
