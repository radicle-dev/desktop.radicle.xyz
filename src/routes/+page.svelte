<script lang="ts">
  import AboutRadicle from "./AboutRadicle.svelte";
  import Features from "./Features.svelte";
  import Hero from "./Hero.svelte";
</script>

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
</svelte:head>

<Hero />
<AboutRadicle />
<Features />
