<script lang="ts">
  import Icon from "./Icon.svelte";

  let features = [
    {
      title: "Best feature",
      description:
        "This is the ultimate feature that covers all your needs, ensuring you won't require anything else ever again. It's designed to provide unparalleled convenience and efficiency in every aspect.",
      icon: "filter",
    },
    {
      title: "Second feature",
      description:
        "Almost as impressive as the best, this feature offers exceptional performance and reliability. It's a close contender that will meet most of your expectations with ease.",
      icon: "filter",
    },
    {
      title: "Third feature",
      description:
        "This feature is still pretty good, delivering solid functionality and value. It stands out with its dependable performance and user-friendly design.",
      icon: "filter",
    },
    {
      title: "Fourth feature",
      description:
        "Not bad at all, this feature provides a good balance of utility and simplicity. It's a reliable choice that won't disappoint in everyday use",
      icon: "filter",
    },
    {
      title: "Fifth feature",
      description:
        "Quite useful, this feature adds significant value to your experience. It's designed to enhance productivity and streamline tasks effectively.",
      icon: "filter",
    },
    {
      title: "Sixth feature",
      description:
        "You might like this one for its unique benefits and practical applications. It's a versatile addition that can cater to various needs and preferences.",
      icon: "filter",
    },
  ] as const;
</script>

<style>
  .container {
    width: 100%;
    display: flex;
    /* box-shadow: inset 0 0 0 1px var(--color-border-default); */
    background: var(--color-background-float);
    color: var(--color-foreground-contrast);
    height: 1000px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 4rem;
    gap: 2rem;
  }
  .features-grid {
    width: 960px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
</style>

<div class="container">
  <div class="features-grid">
    {#each features as { title, description, icon }}
      <div class="feature-box">
        <div class="icon-container">
          <Icon size="16" name={icon} />
        </div>
        <div class="feature-text">
          <span><strong>{title}</strong></span>
          <span>{description}</span>
        </div>
      </div>
    {/each}
  </div>
</div>
