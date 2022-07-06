<script>
  // @ts-ignore
  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
  const title = "Scroll Section";
  let active = "";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<nav class="fixed right-5 top-20 bg-slate-600 flex flex-col text-white p-6 z-40">
  <a href="#section-1" on:click|preventDefault={scrollIntoView}>Section 1</a>
  <a href="#section-2" on:click|preventDefault={scrollIntoView}>Section 2</a>
  <a href="#section-3" on:click|preventDefault={scrollIntoView}>Section 3</a>
</nav>

<main>
  <section id="section-1" class=" bg-orange-700 h-screen text-white">
    <div class="container mx-auto">
      <h2 class="text-white pt-20 flex  ">
        
        <span class="text-5x1 text-yellow-300 "> {title}</span>
      </h2>
    </div>
  </section>

  <section id="section-2" class=" bg-orange-600 h-screen pt-20">
    <h2 class="text-white container mx-auto">Section 2</h2>
  </section>

  <section id="section-3" class=" bg-orange-500 h-screen pt-20">
    <h2 class="text-white">Section 3</h2>
  </section>
</main>

<style>
</style>
