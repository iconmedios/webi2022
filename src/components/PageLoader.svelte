<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from 'svelte/transition';


  let isPageLoaded = false;
  onMount(() => {
    //setTimeout(() => {
      isPageLoaded = true;
    //}, 1800);
  });
  //const pageLoaded = ()=>  isPageLoaded = true;
</script>

{#if !isPageLoaded}
  <div class="fixed flex min-h-screen w-screen flex-col justify-center overflow-hidden bg-miblue-900  z-50" transition:fade >
  <h1 class="text-center font-light text-blue-300 text-8xl animate-charcter inline-block" transition:fly="{{ y: -300, duration: 1200 }}" >icon<span class="font-semibold">medios</span></h1>
</div>
{/if}

<style>
  .animate-charcter {
    background-image: linear-gradient(
      -90deg,
      #aacafa 0%,
      #aacafa 29%, 
      #2c599d 67%,
      #fff 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
   
   
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
 
 
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }


</style>

