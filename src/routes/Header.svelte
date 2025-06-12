<script lang="ts">
  import { base } from "$app/paths";
  import { theme } from "$lib/theme";
  import { scrolled } from "$lib/stores";

  function toggleTheme() {
    theme.set($theme === "dark" ? "light" : "dark");
  }
</script>

<style>
  .header {
    z-index: 50;
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: var(--color-background-default);
    transition: box-shadow 0.325s;
  }
  .header .logo {
    width: 1.75rem;
    height: 1.75rem;
  }
  .header a {
    display: flex;
    align-items: center;
    text-decoration: none;
    border-bottom: none;
  }

  .header a:hover {
    text-decoration: none;
    border-bottom: none;
  }
  a {
    color: var(--color-foreground-contrast);
    text-decoration: none;
  }
  a:hover {
    color: var(--color-foreground-contrast);
    text-decoration: none;
  }

  .theme-toggle {
    border: none;
    color: var(--color-foreground-contrast);
    padding: 0;
    cursor: pointer;
    background-color: var(--color-background-default);
    width: 1.75rem;
    height: 1.75rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  @media (max-width: 719.98px) {
    .header {
      padding: 1rem;
      height: 59.5px;
    }
  }
</style>

<div
  class="header"
  style:box-shadow={`${$scrolled ? "0 4px 8px 0 rgba(0,0,0,0.075)" : "0 4px 8px 0 rgba(0,0,0,0)"}`}>
  <a href="https://radicle.xyz" aria-label="radicle.xyz">
    <img src="{base}/radicle.svg" alt="Radicle logo" class="logo" />
  </a>

  <div style:margin-left="auto">
    <button class="theme-toggle" onclick={toggleTheme}>
      {#if $theme === "dark"}
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M25.1999 22.4001V19.6001H22.3999V22.4001H25.1999Z"
            fill="#29C8C6" />
          <path
            d="M22.4001 25.1999V22.3999H19.6001V25.1999H22.4001Z"
            fill="#29C8C6" />
          <path
            d="M25.1999 8.4001V5.6001H22.3999V8.4001H25.1999Z"
            fill="#2BF3F1" />
          <path
            d="M8.4001 11.1999V8.3999H5.6001V11.1999H8.4001Z"
            fill="#2BF3F1" />
          <path d="M8.4001 14V11.2H5.6001V14H8.4001Z" fill="#2BF3F1" />
          <path d="M8.4001 16.8V14H5.6001V16.8H8.4001Z" fill="#2BF3F1" />
          <path
            d="M19.5998 8.4001V5.6001H16.7998V8.4001H19.5998Z"
            fill="#2BF3F1" />
          <path
            d="M19.5998 22.4001V19.6001H16.7998V22.4001H19.5998Z"
            fill="#2BF3F1" />
          <path d="M8.4001 19.6V16.8H5.6001V19.6H8.4001Z" fill="#2BF3F1" />
          <path
            d="M11.1999 2.80005H19.5999V5.60005H16.7999V22.4H19.5999V25.2H11.1999V22.4H8.3999V5.60005H11.1999V2.80005Z"
            fill="#2BF3F1" />
          <path
            d="M8.3999 11.1999H11.1999V8.3999H8.3999V11.1999Z"
            fill="#E8FF29" />
          <path d="M14 8.3999V11.1999H16.8V8.3999H14Z" fill="#E8FF29" />
          <path d="M11.2002 16.8V19.6H14.0002V16.8H11.2002Z" fill="#A141C3" />
          <path
            d="M22.4001 5.60005V2.80005H19.6001V5.60005H22.4001Z"
            fill="#2BF3F1" />
          <path
            d="M19.6002 25.1999V22.3999H11.2002V25.1999H19.6002Z"
            fill="#29C8C6" />
          <path
            d="M19.5999 22.4001V19.6001H8.3999V22.4001H19.5999Z"
            fill="#29C8C6" />
          <path d="M8.4001 19.6V16.8H5.6001V19.6H8.4001Z" fill="#29C8C6" />
          <path d="M16.8 19.6V16.8H14V19.6H16.8Z" fill="#29C8C6" />
        </svg>
      {:else}
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_8_5578)">
            <path d="M15.2725 0H12.7271V2.54545H15.2725V0Z" fill="#EF7D57" />
            <path
              d="M5.09086 2.54541H2.54541V5.09086H5.09086V2.54541Z"
              fill="#EF7D57" />
            <path
              d="M15.2725 2.54541H12.7271V5.09086H15.2725V2.54541Z"
              fill="#FFCD75" />
            <path
              d="M25.4546 2.54541H22.9092V5.09086H25.4546V2.54541Z"
              fill="#EF7D57" />
            <path
              d="M7.63627 5.09082H5.09082V7.63627H7.63627V5.09082Z"
              fill="#FFCD75" />
            <path
              d="M12.7271 5.09082H10.1816V7.63627H12.7271V5.09082Z"
              fill="#EF7D57" />
            <path
              d="M15.2725 5.09082H12.7271V7.63627H15.2725V5.09082Z"
              fill="#FFCD75" />
            <path
              d="M17.8184 5.09082H15.2729V7.63627H17.8184V5.09082Z"
              fill="#EF7D57" />
            <path
              d="M22.9092 5.09082H20.3638V7.63627H22.9092V5.09082Z"
              fill="#FFCD75" />
            <path
              d="M10.1817 7.63647H7.63623V10.1819H10.1817V7.63647Z"
              fill="#EF7D57" />
            <path
              d="M12.7271 7.63647H10.1816V10.1819H12.7271V7.63647Z"
              fill="#FFCD75" />
            <path
              d="M15.2725 7.63647H12.7271V10.1819H15.2725V7.63647Z"
              fill="#EF7D57" />
            <path
              d="M17.8184 7.63647H15.2729V10.1819H17.8184V7.63647Z"
              fill="#FFCD75" />
            <path
              d="M20.3638 7.63647H17.8184V10.1819H20.3638V7.63647Z"
              fill="#EF7D57" />
            <path
              d="M7.63627 10.1819H5.09082V12.7273H7.63627V10.1819Z"
              fill="#EF7D57" />
            <path
              d="M10.1817 10.1819H7.63623V12.7273H10.1817V10.1819Z"
              fill="#FFCD75" />
            <path
              d="M12.7271 10.1819H10.1816V12.7273H12.7271V10.1819Z"
              fill="#FFCD75" />
            <path
              d="M15.2725 10.1819H12.7271V12.7273H15.2725V10.1819Z"
              fill="#FFCD75" />
            <path
              d="M17.8184 10.1819H15.2729V12.7273H17.8184V10.1819Z"
              fill="#FFCD75" />
            <path
              d="M20.3638 10.1819H17.8184V12.7273H20.3638V10.1819Z"
              fill="#FFCD75" />
            <path
              d="M22.9092 10.1819H20.3638V12.7273H22.9092V10.1819Z"
              fill="#EF7D57" />
            <path
              d="M2.54545 12.7273H0V15.2727H2.54545V12.7273Z"
              fill="#EF7D57" />
            <path
              d="M5.09086 12.7273H2.54541V15.2727H5.09086V12.7273Z"
              fill="#FFCD75" />
            <path
              d="M7.63627 12.7273H5.09082V15.2727H7.63627V12.7273Z"
              fill="#FFCD75" />
            <path
              d="M10.1817 12.7273H7.63623V15.2727H10.1817V12.7273Z"
              fill="#1A1C2C" />
            <path
              d="M12.7271 12.7273H10.1816V15.2727H12.7271V12.7273Z"
              fill="#F4F4F4" />
            <path
              d="M15.2725 12.7273H12.7271V15.2727H15.2725V12.7273Z"
              fill="#FFCD75" />
            <path
              d="M17.8184 12.7273H15.2729V15.2727H17.8184V12.7273Z"
              fill="#1A1C2C" />
            <path
              d="M20.3638 12.7273H17.8184V15.2727H20.3638V12.7273Z"
              fill="#F4F4F4" />
            <path
              d="M22.9092 12.7273H20.3638V15.2727H22.9092V12.7273Z"
              fill="#FFCD75" />
            <path
              d="M25.4546 12.7273H22.9092V15.2727H25.4546V12.7273Z"
              fill="#FFCD75" />
            <path d="M28 12.7273H25.4546V15.2727H28V12.7273Z" fill="#EF7D57" />
            <path
              d="M7.63627 15.2727H5.09082V17.8182H7.63627V15.2727Z"
              fill="#EF7D57" />
            <path
              d="M10.1817 15.2727H7.63623V17.8182H10.1817V15.2727Z"
              fill="#FFCD75" />
            <path
              d="M12.7271 15.2727H10.1816V17.8182H12.7271V15.2727Z"
              fill="#FFCD75" />
            <path
              d="M15.2725 15.2727H12.7271V17.8182H15.2725V15.2727Z"
              fill="#FFCD75" />
            <path
              d="M17.8184 15.2727H15.2729V17.8182H17.8184V15.2727Z"
              fill="#FFCD75" />
            <path
              d="M20.3638 15.2727H17.8184V17.8182H20.3638V15.2727Z"
              fill="#FFCD75" />
            <path
              d="M22.9092 15.2727H20.3638V17.8182H22.9092V15.2727Z"
              fill="#EF7D57" />
            <path
              d="M10.1817 17.8181H7.63623V20.3636H10.1817V17.8181Z"
              fill="#EF7D57" />
            <path
              d="M12.7271 17.8181H10.1816V20.3636H12.7271V17.8181Z"
              fill="#FFCD75" />
            <path
              d="M15.2725 17.8181H12.7271V20.3636H15.2725V17.8181Z"
              fill="#EF7D57" />
            <path
              d="M17.8184 17.8181H15.2729V20.3636H17.8184V17.8181Z"
              fill="#FFCD75" />
            <path
              d="M20.3638 17.8181H17.8184V20.3636H20.3638V17.8181Z"
              fill="#EF7D57" />
            <path
              d="M7.63627 20.3635H5.09082V22.909H7.63627V20.3635Z"
              fill="#FFCD75" />
            <path
              d="M12.7271 20.3635H10.1816V22.909H12.7271V20.3635Z"
              fill="#EF7D57" />
            <path
              d="M15.2725 20.3635H12.7271V22.909H15.2725V20.3635Z"
              fill="#FFCD75" />
            <path
              d="M17.8184 20.3635H15.2729V22.909H17.8184V20.3635Z"
              fill="#EF7D57" />
            <path
              d="M22.9092 20.3635H20.3638V22.909H22.9092V20.3635Z"
              fill="#FFCD75" />
            <path
              d="M5.09086 22.9092H2.54541V25.4546H5.09086V22.9092Z"
              fill="#EF7D57" />
            <path
              d="M15.2725 22.9092H12.7271V25.4546H15.2725V22.9092Z"
              fill="#FFCD75" />
            <path
              d="M25.4546 22.9092H22.9092V25.4546H25.4546V22.9092Z"
              fill="#EF7D57" />
            <path
              d="M15.2725 25.4546H12.7271V28H15.2725V25.4546Z"
              fill="#EF7D57" />
          </g>
          <defs>
            <clipPath id="clip0_8_5578">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      {/if}
    </button>
  </div>
</div>
