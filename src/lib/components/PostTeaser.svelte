<script lang="ts">
  import type { Post } from "$lib/types";

  import { formatDate } from "$lib/utils.js";

  let { post }: { post: Post } = $props();
</script>

<style>
  a {
    text-decoration: none;
    color: var(--color-foreground-default);
    padding: 1rem;
    margin: 0 1.5rem;
    font-weight: var(--font-weight-regular);
  }

  a:hover {
    text-decoration: none;
    color: var(--color-foreground-default);
    background-color: var(--color-background-float);
  }
  .heading {
    margin-bottom: 1rem;
  }
  h4 {
    font-weight: var(--font-weight-regular);
    font-style: italic;
    color: var(--color-foreground-dim);
  }
</style>

{#key post.slug}
  <a href={`/blog/${post.slug}`}>
    <div class="heading">
      <h3>{post.title}</h3>
      <h4>
        Published {formatDate(post.date)} by
        {post.author}
      </h4>
    </div>
    <div>{post.description}</div>
  </a>
{/key}
