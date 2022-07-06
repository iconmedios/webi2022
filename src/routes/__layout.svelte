<script>
  import "../app.css";
  import { fade, fly } from "svelte/transition";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import PageLoader from "../components/PageLoader.svelte";
</script>

<PageLoader />

<Header />

<slot />

<Footer />
