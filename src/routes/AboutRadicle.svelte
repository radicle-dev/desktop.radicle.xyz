<script lang="ts">
  function scrollToTop() {
    const mainElement = document.querySelector(".layout");
    if (mainElement) {
      mainElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
  import Outline from "$lib/components/Outline.svelte";

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
    color: var(--color-foreground-contrast);
  }

  .image-container svg {
    width: 400px;
    height: 400px;
    color: var(--color-foreground-contrast);
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
  @media (max-width: 719.98px) {
    .title-block {
      margin-bottom: 2rem;
    }
    .float-background {
      padding: 0.5rem;
    }
  }
</style>

<div class="container">
  <div class="outline-wrapper">
    <Outline fullWidth>
      <div class="float-background">
        <div class="title-block">
          <span class="h2">Getting started</span>
          <span class="subtitle">
            Participate in the network in 4 easy steps.
          </span>
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
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="28" y="31" width="23" height="1" />
                <rect x="27" y="47" width="1" height="3" />
                <rect x="27" y="32" width="1" height="16" />
                <rect x="51" y="46" width="1" height="4" />
                <rect x="51" y="32" width="1" height="15" />
                <rect x="26" y="50" width="1" height="1" />
                <rect x="52" y="50" width="1" height="1" />
                <rect x="24" y="55" width="25" height="1" />
                <rect x="45" y="55" width="10" height="1" />
                <rect x="29" y="49" width="22" height="1" />
                <rect x="53" y="51" width="1" height="1" />
                <rect x="54" y="52" width="1" height="1" />
                <rect x="24" y="52" width="1" height="1" />
                <rect x="55" y="53" width="1" height="1" />
                <rect x="55" y="54" width="1" height="1" />
                <rect x="25" y="51" width="1" height="1" />
                <rect x="45" y="53" width="11" height="1" />
                <rect x="23" y="53" width="26" height="1" />
                <rect x="23" y="53" width="1" height="1" />
                <rect x="23" y="54" width="1" height="1" />
                <rect x="28" y="49" width="1" height="1" />
                <path d="M44 37H45V39H44V37Z" />
                <path d="M44 44H45V37H44V44Z" />
                <path d="M34 39H33L33 37H34L34 39Z" />
                <path d="M34 37H33L33 44H34V37Z" />
                <path d="M42 36H44V37L42 37V36Z" />
                <path d="M42 40H44V39H42V40Z" />
                <path d="M42 45H44V44H42V45Z" />
                <path d="M40 35H42V36L40 36V35Z" />
                <path d="M40 41H42V40H40V41Z" />
                <path d="M40 46H42V45H40V46Z" />
                <path d="M39 34H40V35L39 35V34Z" />
                <path d="M39 42H40V41H39V42Z" />
                <path d="M39 47H40V46H39V47Z" />
                <path d="M38 34L39 34V35L38 35V34Z" />
                <path d="M38 42L39 42V41L38 41V42Z" />
                <path d="M38 47H39V46H38V47Z" />
                <path d="M36 37L34 37L34 36L36 36V37Z" />
                <path d="M36 39H34L34 40L36 40L36 39Z" />
                <path d="M36 44H34L34 45H36V44Z" />
                <path d="M38 36L36 36V35H38L38 36Z" />
                <path d="M38 40H36V41H38L38 40Z" />
                <path d="M38 45H36L36 46H38L38 45Z" />
              </svg>
            {:else if features[selectedFeatureIndex].svgId === "svg2"}
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="28" y="31" width="23" height="1" />
                <rect x="27" y="47" width="1" height="3" />
                <rect x="27" y="32" width="1" height="16" />
                <rect x="51" y="46" width="1" height="4" />
                <rect x="51" y="32" width="1" height="15" />
                <rect x="26" y="50" width="1" height="1" />
                <rect x="52" y="50" width="1" height="1" />
                <rect x="24" y="55" width="25" height="1" />
                <rect x="45" y="55" width="10" height="1" />
                <rect x="29" y="49" width="22" height="1" />
                <rect x="53" y="51" width="1" height="1" />
                <rect x="54" y="52" width="1" height="1" />
                <rect x="24" y="52" width="1" height="1" />
                <rect x="55" y="53" width="1" height="1" />
                <rect x="55" y="54" width="1" height="1" />
                <rect x="25" y="51" width="1" height="1" />
                <rect x="45" y="53" width="11" height="1" />
                <rect x="23" y="53" width="26" height="1" />
                <rect x="23" y="53" width="1" height="1" />
                <rect x="23" y="54" width="1" height="1" />
                <rect x="37" y="37" width="1" height="1" />
                <rect
                  x="37"
                  y="40"
                  width="2"
                  height="1"
                  transform="rotate(90 37 40)" />
                <rect
                  x="43"
                  y="39"
                  width="3"
                  height="1"
                  transform="rotate(90 43 39)" />
                <rect x="36" y="39" width="1" height="2" />
                <rect x="41" y="37" width="1" height="1" />
                <rect x="38" y="37" width="3" height="1" />
                <rect x="37" y="42" width="1" height="1" />
                <rect x="38" y="43" width="3" height="1" />
                <rect x="41" y="42" width="1" height="1" />
                <rect x="41" y="44" width="2" height="1" />
                <rect x="36" y="44" width="2" height="1" />
                <rect x="43" y="45" width="1" height="1" />
                <rect x="35" y="45" width="1" height="1" />
                <rect x="44" y="46" width="1" height="1" />
                <rect x="34" y="46" width="1" height="1" />
                <rect x="34" y="46" width="11" height="1" />
                <rect x="37" y="38" width="5" height="1" />
                <rect x="40" y="40" width="1" height="1" />
                <rect x="38" y="40" width="1" height="1" />
                <rect x="37" y="39" width="1" height="1" />
                <rect x="41" y="39" width="1" height="1" />
                <rect x="48" y="34" width="1" height="13" />
                <rect x="30" y="46" width="19" height="1" />
                <rect x="30" y="34" width="18" height="1" />
                <rect x="30" y="34" width="1" height="13" />
                <rect x="28" y="49" width="1" height="1" />
              </svg>
            {:else if features[selectedFeatureIndex].svgId === "svg3"}
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="28" y="31" width="23" height="1" />
                <rect x="27" y="47" width="1" height="3" />
                <rect x="27" y="32" width="1" height="16" />
                <rect x="51" y="46" width="1" height="4" />
                <rect x="51" y="32" width="1" height="15" />
                <rect x="26" y="50" width="1" height="1" />
                <rect x="52" y="50" width="1" height="1" />
                <rect x="24" y="55" width="10" height="1" />
                <rect x="45" y="55" width="10" height="1" />
                <rect x="29" y="49" width="22" height="1" />
                <rect x="53" y="51" width="1" height="1" />
                <rect x="54" y="52" width="1" height="1" />
                <rect x="24" y="52" width="1" height="1" />
                <rect x="55" y="53" width="1" height="1" />
                <rect x="55" y="54" width="1" height="1" />
                <rect x="25" y="51" width="1" height="1" />
                <rect x="45" y="53" width="11" height="1" />
                <rect x="23" y="53" width="11" height="1" />
                <rect x="23" y="53" width="1" height="1" />
                <rect x="23" y="54" width="1" height="1" />
                <rect x="39" y="52" width="1" height="7" />
                <rect x="42" y="55" width="1" height="1" />
                <rect x="36" y="55" width="7" height="1" />
                <rect x="40" y="54" width="1" height="1" />
                <rect x="42" y="52" width="1" height="1" />
                <rect x="38" y="54" width="1" height="1" />
                <rect x="40" y="56" width="1" height="1" />
                <rect x="38" y="56" width="1" height="1" />
                <rect x="42" y="58" width="1" height="1" />
                <rect x="36" y="58" width="1" height="1" />
                <rect x="36" y="52" width="1" height="1" />
                <rect x="37" y="37" width="1" height="1" />
                <rect
                  x="37"
                  y="40"
                  width="2"
                  height="1"
                  transform="rotate(90 37 40)" />
                <rect
                  x="43"
                  y="39"
                  width="3"
                  height="1"
                  transform="rotate(90 43 39)" />
                <rect x="36" y="39" width="1" height="2" />
                <rect x="41" y="37" width="1" height="1" />
                <rect x="38" y="37" width="3" height="1" />
                <rect x="37" y="42" width="1" height="1" />
                <rect x="38" y="43" width="3" height="1" />
                <rect x="41" y="42" width="1" height="1" />
                <rect x="41" y="44" width="2" height="1" />
                <rect x="36" y="44" width="2" height="1" />
                <rect x="43" y="45" width="1" height="1" />
                <rect x="35" y="45" width="1" height="1" />
                <rect x="44" y="46" width="1" height="1" />
                <rect x="34" y="46" width="1" height="1" />
                <rect x="34" y="46" width="11" height="1" />
                <rect x="37" y="38" width="5" height="1" />
                <rect x="40" y="41" width="1" height="1" />
                <rect x="38" y="41" width="1" height="1" />
                <rect x="37" y="39" width="1" height="1" />
                <rect x="41" y="39" width="1" height="1" />
                <rect x="48" y="34" width="1" height="13" />
                <rect x="30" y="46" width="19" height="1" />
                <rect x="30" y="34" width="18" height="1" />
                <rect x="30" y="34" width="1" height="13" />
                <rect x="28" y="49" width="1" height="1" />
              </svg>
            {:else}
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="28" y="31" width="23" height="1" />
                <rect x="27" y="47" width="1" height="3" />
                <rect x="27" y="32" width="1" height="7" />
                <rect x="51" y="46" width="1" height="4" />
                <rect x="51" y="32" width="1" height="9" />
                <rect x="26" y="50" width="1" height="1" />
                <rect x="52" y="50" width="1" height="1" />
                <rect x="24" y="55" width="10" height="1" />
                <rect x="45" y="55" width="10" height="1" />
                <rect x="33" y="49" width="11" height="1" />
                <rect x="53" y="51" width="1" height="1" />
                <rect x="54" y="52" width="1" height="1" />
                <rect x="24" y="52" width="1" height="1" />
                <rect x="55" y="53" width="1" height="1" />
                <rect x="55" y="54" width="1" height="1" />
                <rect x="25" y="51" width="1" height="1" />
                <rect x="45" y="53" width="11" height="1" />
                <rect x="23" y="53" width="11" height="1" />
                <rect x="23" y="53" width="1" height="1" />
                <rect x="23" y="54" width="1" height="1" />
                <rect x="39" y="52" width="1" height="7" />
                <rect x="42" y="55" width="1" height="1" />
                <rect x="36" y="55" width="7" height="1" />
                <rect x="40" y="54" width="1" height="1" />
                <rect x="42" y="52" width="1" height="1" />
                <rect x="38" y="54" width="1" height="1" />
                <rect x="40" y="56" width="1" height="1" />
                <rect x="38" y="56" width="1" height="1" />
                <rect x="42" y="58" width="1" height="1" />
                <rect x="36" y="58" width="1" height="1" />
                <rect x="36" y="52" width="1" height="1" />
                <rect x="18" y="21" width="1" height="7" />
                <rect x="21" y="24" width="1" height="1" />
                <rect x="15" y="24" width="7" height="1" />
                <rect x="19" y="23" width="1" height="1" />
                <rect x="21" y="21" width="1" height="1" />
                <rect x="17" y="23" width="1" height="1" />
                <rect x="19" y="25" width="1" height="1" />
                <rect x="17" y="25" width="1" height="1" />
                <rect x="21" y="27" width="1" height="1" />
                <rect x="15" y="27" width="1" height="1" />
                <rect x="15" y="21" width="1" height="1" />
                <rect x="61" y="29" width="1" height="7" />
                <rect x="64" y="32" width="1" height="1" />
                <rect x="58" y="32" width="7" height="1" />
                <rect x="62" y="31" width="1" height="1" />
                <rect x="64" y="29" width="1" height="1" />
                <rect x="60" y="31" width="1" height="1" />
                <rect x="62" y="33" width="1" height="1" />
                <rect x="60" y="33" width="1" height="1" />
                <rect x="64" y="35" width="1" height="1" />
                <rect x="58" y="35" width="1" height="1" />
                <rect x="58" y="29" width="1" height="1" />
                <rect x="37" y="37" width="1" height="1" />
                <rect
                  x="37"
                  y="40"
                  width="2"
                  height="1"
                  transform="rotate(90 37 40)" />
                <rect
                  x="43"
                  y="39"
                  width="3"
                  height="1"
                  transform="rotate(90 43 39)" />
                <rect x="36" y="39" width="1" height="2" />
                <rect x="41" y="37" width="1" height="1" />
                <rect x="38" y="37" width="3" height="1" />
                <rect x="37" y="42" width="1" height="1" />
                <rect x="38" y="43" width="3" height="1" />
                <rect x="41" y="42" width="1" height="1" />
                <rect x="41" y="44" width="2" height="1" />
                <rect x="36" y="44" width="2" height="1" />
                <rect x="43" y="45" width="1" height="1" />
                <rect x="35" y="45" width="1" height="1" />
                <rect x="44" y="46" width="1" height="1" />
                <rect x="34" y="46" width="1" height="1" />
                <rect x="34" y="46" width="11" height="1" />
                <rect x="37" y="38" width="5" height="1" />
                <rect x="40" y="40" width="1" height="1" />
                <rect x="38" y="40" width="1" height="1" />
                <rect x="37" y="39" width="1" height="1" />
                <rect x="41" y="39" width="1" height="1" />
                <rect
                  x="51"
                  y="44"
                  width="1"
                  height="1"
                  transform="rotate(90 51 44)" />
                <rect
                  x="57"
                  y="38"
                  width="1"
                  height="1"
                  transform="rotate(90 57 38)" />
                <rect
                  x="50"
                  y="45"
                  width="1"
                  height="1"
                  transform="rotate(90 50 45)" />
                <rect
                  x="56"
                  y="39"
                  width="1"
                  height="1"
                  transform="rotate(90 56 39)" />
                <rect
                  x="49"
                  y="46"
                  width="1"
                  height="1"
                  transform="rotate(90 49 46)" />
                <rect
                  x="55"
                  y="40"
                  width="1"
                  height="1"
                  transform="rotate(90 55 40)" />
                <rect
                  x="48"
                  y="47"
                  width="1"
                  height="1"
                  transform="rotate(90 48 47)" />
                <rect
                  x="54"
                  y="41"
                  width="1"
                  height="1"
                  transform="rotate(90 54 41)" />
                <rect
                  x="47"
                  y="48"
                  width="1"
                  height="1"
                  transform="rotate(90 47 48)" />
                <rect
                  x="53"
                  y="42"
                  width="1"
                  height="1"
                  transform="rotate(90 53 42)" />
                <rect
                  x="46"
                  y="49"
                  width="1"
                  height="1"
                  transform="rotate(90 46 49)" />
                <rect
                  x="52"
                  y="43"
                  width="1"
                  height="1"
                  transform="rotate(90 52 43)" />
                <rect
                  width="1"
                  height="4.85714"
                  transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 35.5714 25)" />
                <rect
                  width="1"
                  height="4.85714"
                  transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 40.4285 26)" />
                <rect
                  width="1"
                  height="4.85714"
                  transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 45.2857 27)" />
                <rect
                  width="1"
                  height="4.85714"
                  transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 50.1428 28)" />
                <rect
                  width="1"
                  height="4.85714"
                  transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 55 29)" />
                <rect
                  width="1"
                  height="4.85714"
                  transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 30.7143 24)" />
                <rect
                  x="23"
                  y="34"
                  width="1"
                  height="2"
                  transform="rotate(180 23 34)" />
                <rect
                  x="29"
                  y="46"
                  width="1"
                  height="2"
                  transform="rotate(180 29 46)" />
                <rect
                  x="24"
                  y="36"
                  width="1"
                  height="2"
                  transform="rotate(180 24 36)" />
                <rect
                  x="30"
                  y="48"
                  width="1"
                  height="2"
                  transform="rotate(180 30 48)" />
                <rect
                  x="25"
                  y="38"
                  width="1"
                  height="2"
                  transform="rotate(180 25 38)" />
                <rect
                  x="31"
                  y="50"
                  width="1"
                  height="2"
                  transform="rotate(180 31 50)" />
                <rect
                  x="32"
                  y="52"
                  width="1"
                  height="2"
                  transform="rotate(180 32 52)" />
                <rect
                  x="26"
                  y="40"
                  width="1"
                  height="2"
                  transform="rotate(180 26 40)" />
                <rect
                  x="27"
                  y="42"
                  width="1"
                  height="2"
                  transform="rotate(180 27 42)" />
                <rect
                  x="22"
                  y="32"
                  width="1"
                  height="2"
                  transform="rotate(180 22 32)" />
                <rect
                  x="28"
                  y="44"
                  width="1"
                  height="2"
                  transform="rotate(180 28 44)" />
                <rect x="48" y="34" width="1" height="10" />
                <rect x="31" y="46" width="15" height="1" />
                <rect x="30" y="34" width="18" height="1" />
                <rect x="30" y="34" width="1" height="11" />
                <rect x="28" y="49" width="1" height="1" />
                <rect x="48" y="49" width="3" height="1" />
              </svg>
            {/if}
          </div>
        </div>
      </div>
    </Outline>
  </div>
</div>
