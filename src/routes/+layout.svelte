<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
</script>

<Header />
<main class="pt-20 px-12 md:px-24 max-w-[700px] mx-auto mb-96">
  <slot />
</main>
