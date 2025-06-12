<script lang="ts">
  import { base } from "$app/paths";
  import Icon from "$lib/components/Icon.svelte";

  import Download from "./Download.svelte";

  const carousel = [
    `${base}/hero/repos.png`,
    `${base}/hero/repo.png`,
    `${base}/hero/notifications.png`,
    `${base}/hero/review.png`,
    `${base}/hero/issue.png`,
  ];

  let index = 0;

  function previous() {
    index = (index - 1 + carousel.length) % carousel.length;
  }
  function next() {
    index = (index + 1) % carousel.length;
  }
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

  .hero-text {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .carousel {
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

  .carousel button {
    height: 100%;
    width: 45%;
    display: none;
    color: white;
    align-items: center;
    font-size: 10rem;
    cursor: pointer;
    touch-action: manipulation;
  }

  .carousel:hover button {
    display: flex;
    border: 0;
    background-color: transparent;
    position: absolute;
  }

  .previous {
    left: 5%;
    opacity: 50%;
  }
  .next {
    right: 5%;
    justify-content: flex-end;
    opacity: 50%;
  }
  .previous:hover,
  .next:hover {
    opacity: 100%;
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
    .carousel {
      flex: 3;
      padding: 0;
      width: min(750px, 100%);
    }
    .hero-text {
      padding: 6rem 2rem;
      flex: 2;
      align-items: flex-start;
      text-align: left;
      max-width: 40%;
    }
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
    .title-block {
      margin-top: 6rem;
      margin-bottom: 1rem;
    }
    .download {
      width: calc(100vw - 5rem);
    }
  }

  .features-container {
    width: 100%;
    display: flex;
    color: var(--color-foreground-contrast);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    gap: 4rem;
  }

  @media (min-width: 1024px) {
    .features-container {
      width: 100%;
      display: flex;
      color: var(--color-foreground-contrast);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 0;
      gap: 4rem;
    }
  }

  .features-grid {
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 4rem;
  }
  .feature-box {
    display: grid;
    grid-template-columns: 1rem auto;
    grid-template-rows: 1rem auto;
    column-gap: 1rem;
    row-gap: 1rem;
    width: 100%;
  }

  @media (min-width: 1011px) {
    .features-grid {
      width: 960px;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 719.98px) {
    .features-container {
      padding: 4rem 4rem;
    }
    .features-grid {
      padding: 0 2rem;
    }
  }

  .title-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  @media (min-width: 1024px) {
    .title-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      margin-top: 4rem;
      margin-bottom: 2rem;
    }
  }
</style>

<svelte:head>
  <title>Radicle Desktop</title>

  <meta
    name="description"
    content="Local-first code collaboration on a peer-to-peer network" />

  <meta property="og:url" content="https://radicle.xyz/desktop" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Radicle Desktop" />
  <meta
    property="og:description"
    content="Local-first code collaboration on a peer-to-peer network" />
  <meta
    property="og:image"
    content="https://app.radicle.xyz/images/radicle-og-853x853-624f.png" />

  <meta name="twitter:card" content="summary" />
  <meta property="twitter:domain" content="radicle.xyz" />
  <meta property="twitter:url" content="https://radicle.xyz/desktop" />
  <meta name="twitter:title" content="Radicle Desktop" />
  <meta
    name="twitter:description"
    content="Local-first code collaboration on a peer-to-peer network" />
  <meta
    name="twitter:image"
    content="https://app.radicle.xyz/images/radicle-og-853x853-624f.png" />

  {#each carousel as image}
    <link rel="preload" as="image" href={image} />
  {/each}
</svelte:head>

<div class="container">
  <div class="hero-text">
    <span class="h1">Radicle Desktop</span>
    <span class="subtitle">
      A simple, intuitive desktop app that makes contributing to the Radicle
      network easier than ever.
    </span>
    <div class="download">
      <Download />
    </div>
  </div>
  <div class="carousel">
    <button onclick={previous} class="previous">
      <Icon size="128" name="chevron-left" />
    </button>
    {#each [carousel[index]] as src (index)}
      <img {src} alt="Screenshot" />
    {/each}
    <button onclick={next} class="next">
      <Icon size="128" name="chevron-right" />
    </button>
  </div>
</div>

<div class="features-container">
  <div class="title-block">
    <span class="h2">What's in the box?</span>
  </div>
  <div class="features-grid">
    <div class="feature-box">
      <Icon name="inbox" size="16" />
      <div><strong>Notifications</strong></div>
      <div></div>
      <div>
        Stay in the loop with built-in notifications designed for an inbox-zero
        workflow.
      </div>
    </div>

    <div class="feature-box">
      <Icon name="patch" size="16" />
      <div><strong>Patches</strong></div>
      <div></div>
      <div>
        Propose code changes with patches and review your teammates’ work using
        a familiar interface that supports common workflows.
      </div>
    </div>

    <div class="feature-box">
      <Icon name="markdown" size="16" />
      <div><strong>Rich text & embeds</strong></div>
      <div></div>
      <div>
        Embed screenshots, videos, and other artifacts in issues, patches,
        comments, and reviews — all with Markdown support. React to anything
        with emojis to show your support.
      </div>
    </div>

    <div class="feature-box">
      <Icon name="issue" size="16" />
      <div><strong>Issues</strong></div>
      <div></div>
      <div>Join discussions and manage work through issues.</div>
    </div>

    <div class="feature-box">
      <div>
        <Icon name="offline" size="16" />
      </div>
      <div><strong>Works offline</strong></div>
      <div></div>
      <div>
        Write and review code offline, then sync with your team when you're back
        online.
      </div>
    </div>
  </div>
</div>
