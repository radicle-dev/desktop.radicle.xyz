<script lang="ts">
  import { formatDate } from "$lib/utils";

  let { data } = $props();
</script>

<style>
  .container {
    max-width: 50rem;
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
</style>

<svelte:head>
  <title>{data.meta.title}</title>

  <meta name="description" content={data.meta.description} />

  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:description" content={data.meta.description} />
</svelte:head>

<div class="container">
  <h1 class="">{data.meta.title}</h1>
  <i>
    Published {formatDate(data.meta.date)} by
    <a href={data.meta.authorUrl} target="_blank">{data.meta.author}</a>
  </i>

  <div class="markdown">
    <data.content theme="dark" />
  </div>
</div>
