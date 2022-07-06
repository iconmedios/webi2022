<script lang="ts">
  import { fade, fly } from 'svelte/transition';
    export let url: URL
 //out:fade
</script>

{#key url}

  <div in:fly='{{ y: 50, duration: 250, delay:300 }}' out:fly='{{ y: -50, duration: 250, delay:300 }}' >
    <slot />

  </div>
    
{/key}