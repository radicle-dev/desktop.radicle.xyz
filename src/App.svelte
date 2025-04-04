<script>
    import Features from "./components/Features.svelte";
    import Header from "./components/Header.svelte";
    import Hero from "./components/Hero.svelte";
</script>

<main>
    <Header />
    <Hero />
    <Features />
</main>

<style>
    main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;
    }
</style>
