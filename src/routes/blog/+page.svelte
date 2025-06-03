<script lang="ts">
  import PostTeaser from "$lib/components/PostTeaser.svelte";
  let { data } = $props();
</script>

<style>
  .container {
    display: flex;
    min-height: calc(100vh - 12rem);
    flex-direction: column;
    padding: 2rem 0;
  }
</style>

<svelte:head>
  <title>Radworks • Blog</title>
</svelte:head>

<div class="container">
  {#each data.posts as post}
    <PostTeaser {post} />
  {/each}
</div>
