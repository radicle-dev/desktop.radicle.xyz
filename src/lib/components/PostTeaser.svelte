<script lang="ts">
  import type { Post } from "$lib/types";

  import { formatDate } from "$lib/utils.js";

  let { post }: { post: Post } = $props();
</script>

<style>
  a {
    text-decoration: none;
    color: var(--color-foreground-default);
  }

  a:hover {
    text-decoration: none;
    color: var(--color-foreground-emphasized);
  }
  .heading {
    margin-bottom: 1rem;
  }
</style>

{#key post.slug}
  <a href={`/blog/${post.slug}`}>
    <div class="heading">
      <h3>{post.title}</h3>
      <div class="txt-small">
        Published {formatDate(post.date)} by
        {post.author}
      </div>
    </div>
    <div>{post.description}</div>
  </a>
{/key}
