<script lang="ts">
  import Icon from "./Icon.svelte";

  let features = [
    {
      title: "Peer-to-Peer by Default",
      description:
        "Radicle connects devices directly in a global peer-to-peer network — no central servers, no single point of failure.<br/>You host and sync code with others just by running the app.",
      icon: "device",
    },
    {
      title: "Git-Native Collaboration",
      description:
        "Radicle stores issues and patches inside Git, making them portable, versioned, and fully offline-friendly.<br/>Social collaboration is now as decentralized as your code.",
      icon: "filter",
    },
    {
      title: "Always Local, Always Yours",
      description:
        "Your entire repository — code, issues, patches — lives on your machine, always available.<br/>Work offline, sync when you’re online.",
      icon: "filter",
    },
    {
      title: "No Accounts, Just Keys",
      description:
        "Identities in Radicle are public keys you generate locally — no signups, passwords, or email needed.<br/>You’re in control of your identity, always.",
      icon: "filter",
    },
    {
      title: "Trust Through Cryptography",
      description:
        "Every repository and identity is verified through cryptographic signatures, not centralized authority.",
      icon: "filter",
    },
  ] as const;
</script>

<style>
  .container {
    width: 100%;
    display: flex;
    background: var(--color-background-float);
    color: var(--color-foreground-contrast);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
    gap: 4rem;
  }
  .features-grid {
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 4rem;
  }
  .feature-box {
    width: 100%;
    text-align: left;
    display: flex;
    gap: 0.5rem;
  }
  .icon-container {
    display: flex;
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.25rem;
  }
  .feature-text {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
  }

  @media (min-width: 1011px) {
    .features-grid {
      width: 960px;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 719.98px) {
    .container {
      padding: 4rem 4rem;
    }
    .features-grid {
      padding: 0 2rem;
    }
  }
</style>

<div class="container">
  <span class="txt-large txt-semibold">Features</span>
  <div class="features-grid">
    {#each features as { title, description, icon }}
      <div class="feature-box">
        <div class="icon-container">
          <Icon size="16" name={icon} />
        </div>
        <div class="feature-text">
          <span><strong>{title}</strong></span>
          <span>{@html description}</span>
        </div>
      </div>
    {/each}
  </div>
</div>
