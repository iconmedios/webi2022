<script>
    import SvgNav1 from "../components/elementos/SvgNav1.svelte";

    let enlaces = [
      { 'nom': 'LOGO' ,'url': '/'} ,
      { 'nom': 'Inicio' ,'url': '/'} ,
      { 'nom': 'Acerca' ,'url': '/acerca'} ,
      { 'nom': 'Contacto' ,'url': '/contacto'}, 
      { 'nom': 'Landing' ,'url': '/landing'}
        
    ]

</script>

<section class=" bg-slate-500 top-0 left-0 w-screen z-40">

  
  <div class="container mx-auto ">

  <nav class="flex h-10 align-center content-center ">
 
    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
    {#each enlaces as enlace}
	      <a href="{enlace.url} "class="text-gray-300 hover:text-gray-200  flex items-center justify-center">
          {enlace.nom}
        </a>
    {/each}
  
  
  
  <div class="absolute right-1 top-1 block z-50"> <SvgNav1 /></div>
</nav>




</div>
</section>


<section class=" bg-green-700 top-0 left-0 w-screen z-40" >
  <div class="flex h-[100px]">
    {#each enlaces as enlace}
  <a href="{enlace.url} "class="text-gray-300 hover:text-gray-200 hover:bg-slate-800 flex-1 flex items-center justify-center">
    {enlace.nom} </a>
  {/each}
  </div>
  


</section>