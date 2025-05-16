<script lang="ts">
  import svgOne from "../assets/about-radicle/1.svg?raw";
  import svgTwo from "../assets/about-radicle/2.svg?raw";
  import svgThree from "../assets/about-radicle/3.svg?raw";
  import svgFour from "../assets/about-radicle/4.svg?raw";

  function scrollToTop() {
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
  import Outline from "./Outline.svelte";

  let features = [
    {
      title: "Install the Radicle Desktop App",
      description:
        "Install the radicle desktop app on your computer. Find your package or build it from source.",
      svgId: "svg1",
    },
    {
      title: "Create your identity",
      description:
        "This identity is how you will be known on the network. It's yours and yours only, stored safely on your computer.",
      svgId: "svg2",
    },
    {
      title: "Install and start your node",
      description:
        "Your node is on your computer. Together with your identity they allow you to interact with the network.",
      svgId: "svg3",
    },
    {
      title: "Fetch from or push to the network",
      description:
        "Once connected to the network, share your contributions or access the work of others. ",
      svgId: "svg4",
    },
  ] as const;

  let selectedFeatureIndex = $state(0);
  let hasTouchSupport = $state(false);

  function selectFeature(index: number) {
    selectedFeatureIndex = index;
  }

  function handleInteraction(index: number, event: Event) {
    if (hasTouchSupport) {
      event.preventDefault();
      selectFeature(index);
    }
  }

  // Check for touch support on mount
  $effect(() => {
    hasTouchSupport = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  });
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
    min-height: 550px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .outline-wrapper {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    .outline-wrapper {
      width: 66%;
    }
  }

  :global(.cmd-vertical),
  :global(.cmd-horizontal) {
    background: var(--color-background-float) !important;
  }

  .float-background {
    background: var(--color-background-float);
    padding: 1rem 2rem 1rem 2rem;
  }

  .widget-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 960px;
    gap: 4rem;
  }

  .title-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 0rem;
  }

  @media (min-width: 1011px) {
    .widget-container {
      flex-direction: row;
      align-items: center;
    }
  }

  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-container :global(svg) {
    width: 400px;
    height: 400px;
    color: var(--color-foreground-contrast);
  }

  .image-container :global(svg path),
  .image-container :global(svg rect) {
    fill: currentColor;
  }

  .blocks-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .feature-box {
    background: var(--color-fill-ghost);
    padding: 0.75rem 1rem;
  }

  .feature-box.expanded {
    background: var(--color-fill-ghost-hover);
  }

  .feature-box:hover {
    box-shadow: inset 0 0 0 2px var(--color-fill-secondary);
  }

  .feature-title {
    font-weight: 600;
  }

  .expanded .feature-title {
    margin-bottom: 0.75rem;
  }

  .feature-description {
    font-size: 0.9rem;
    color: var(--color-foreground-contrast);
  }

  .download-link {
    display: block;
    margin-top: 0.75rem;
    color: var(--color-foreground-contrast);
    text-decoration: none;
    font-weight: 500;
  }

  .download-link:hover {
    text-decoration: underline;
  }

  @media (min-width: 719.98px) {
    .container {
      padding: 0;
    }
  }
</style>

<div class="container">
  <div class="outline-wrapper">
    <Outline fullWidth>
      <div class="float-background">
        <div class="title-block">
          <span class="h2">Getting started</span>
          <span class="subtitle">Get on the network in 4 easy steps.</span>
        </div>
        <div class="widget-container">
          <div class="blocks-container">
            {#each features as feature, index}
              <!-- svelte-ignore a11y_click_events_have_key_events -->
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <!-- svelte-ignore a11y_mouse_events_have_key_events -->
              <div
                class="feature-box"
                class:expanded={selectedFeatureIndex === index}
                onmouseover={() => !hasTouchSupport && selectFeature(index)}
                onclick={e => handleInteraction(index, e)}
                ontouchstart={() => {
                  selectFeature(index);
                }}>
                <div class="feature-title">{feature.title}</div>
                {#if selectedFeatureIndex === index}
                  <div class="feature-description">
                    {@html feature.description}
                    {#if index === 0}
                      <!-- svelte-ignore a11y_invalid_attribute -->
                      <a
                        href="#"
                        class="download-link"
                        onclick={e => {
                          e.preventDefault();
                          scrollToTop();
                        }}>
                        Download instructions →
                      </a>
                    {/if}
                  </div>
                {/if}
              </div>
            {/each}
          </div>
          <div class="image-container">
            {#if features[selectedFeatureIndex].svgId === "svg1"}
              {@html svgOne}
            {:else if features[selectedFeatureIndex].svgId === "svg2"}
              {@html svgTwo}
            {:else if features[selectedFeatureIndex].svgId === "svg3"}
              {@html svgThree}
            {:else}
              {@html svgFour}
            {/if}
          </div>
        </div>
      </div>
    </Outline>
  </div>
</div>
