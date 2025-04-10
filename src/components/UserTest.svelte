<script lang="ts">
  import Qr from "./QR.svelte";
</script>

<style>
  .container {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    display: none;
    background: var(--color-background-float);
    border: 1px solid var(--color-border-hint);
    color: var(--color-foreground-contrast);
    align-items: center;
    padding: 0.5rem;
    padding-right: 2rem;
    gap: 1rem;
  }

  @media (min-width: 719.98px) {
    .container {
      display: flex;
    }
  }
</style>

<div class="container">
  <Qr />
  <div
    class="txt-small"
    style="display: flex; flex-direction: column; gap: 0.25rem;">
    <span class="txt-semibold">Help Shape Our App's Future!</span>
    <span>Join our user tests and share your insights.</span>
    <a
      style="width:100%"
      href="https://calendly.com/dnl-klmn/radicle-user-test"
      target="_blank"
      rel="noopener">
      Sign Up Now!
    </a>
  </div>
</div>
