<script lang="ts">
  import Command from "./Command.svelte";
</script>

<style>
  .container {
    max-width: 960px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 4rem 1rem 4rem;
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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
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
  .buttons a {
    text-decoration: none;
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
  <div class="video-container"></div>
</div>
