<script lang="ts">
  let features = [
    {
      title: "Peer-to-Peer by Default",
      description:
        "Radicle connects devices directly in a global peer-to-peer network - no central servers, no single point of failure.<br/>You host and sync code with others just by running the app.",
      icon: "🕸️",
    },
    {
      title: "Git-Native Collaboration",
      description:
        "Radicle stores issues and patches inside Git, making them portable, versioned, and fully offline-friendly.<br/>Social collaboration is synchonized together with your code.",
      icon: "🧱",
    },
    {
      title: "Local-First",
      description:
        "Your entire repository - code, issues, patches - lives on your machine, always available.<br/>Work offline and sync when you’re online.",
      icon: "💾",
    },
    {
      title: "No Accounts, Just Keys",
      description:
        "Identities in Radicle are public keys you generate locally - no signup needed.<br/>You are fully in control of your identity.",
      icon: "🆔",
    },
    {
      title: "Cryptographic Verification",
      description:
        "Every action you take is signed with your pirvate key and can be verified by everyone else. There is no need to trust a third party.",
      icon: "🔐",
    },
  ] as const;
</script>

<style>
  .container {
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
    .container {
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
    .container {
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
    }
  }
</style>

<div class="container">
  <div class="title-block">
    <span class="h2">Features</span>
  </div>
  <div class="features-grid">
    {#each features as { title, description, icon }}
      <div class="feature-box">
        <div class="icon-container">{icon}</div>
        <div><strong>{title}</strong></div>
        <div></div>
        <div>{@html description}</div>
      </div>
    {/each}
  </div>
</div>
