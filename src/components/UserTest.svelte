<script lang="ts">
  import userTestQR from "../assets/user-test-qr.png";
  import QRsvg from "./QR.svg?url";
</script>

<style>
  .container {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    background: var(--color-background-float);
    border: 1px solid var(--color-border-hint);
    color: var(--color-foreground-contrast);
    align-items: center;
    padding: 0.5rem;
    gap: 1rem;
  }
</style>

<div class="container">
  <img src={QRsvg} alt="QR to book user test" />
  <img
    style="width:6rem; height:6rem;"
    alt="Help Shape the Future of Our App!"
    src={userTestQR} />
  <div
    class="txt-small"
    style="display: flex; flex-direction: column; gap: 0.25rem; width:100%;">
    <span class="txt-semibold">Help Shape Our App's Future!</span>
    <span style="width:240px">
      Join our user tests and share your insights.
    </span>
    <a
      style="width:100%"
      href="https://calendly.com/dnl-klmn/radicle-user-test"
      target="_blak">
      Sign Up Now!
    </a>
  </div>
</div>
