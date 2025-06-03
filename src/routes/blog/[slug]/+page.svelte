<script lang="ts">
  import { formatDate } from "$lib/utils";

  let { data } = $props();
</script>

<style>
  .container {
    padding: 2rem 1.5rem;
  }
  .markdown {
    margin-top: 2rem;
  }
  .markdown :global(code) {
    font-family: var(--font-family-monospace);
    font-size: var(--font-size-small);
  }
  .markdown :global(pre) {
    font-family: var(--font-family-monospace);
    font-size: var(--font-size-small);
    overflow: scroll;
    padding: 1rem;
  }
  h4 {
    font-weight: var(--font-weight-regular);
    font-style: italic;
    color: var(--color-foreground-dim);
  }

  @media (min-width: 719.98px) {
    .container {
      max-width: 719.98px;
    }
  }
  @media (max-width: 719.98px) {
    .container {
      max-width: 100vw;
    }
  }
</style>

<svelte:head>
  <title>{data.meta.title}</title>

  <meta name="description" content={data.meta.description} />

  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:description" content={data.meta.description} />
</svelte:head>

<div class="container">
  <h1>{data.meta.title}</h1>
  <h4>
    Published {formatDate(data.meta.date)} by
    <a href={data.meta.authorUrl} target="_blank">{data.meta.author}</a>
  </h4>

  <div class="markdown">
    <data.content theme="dark" />
  </div>
</div>
