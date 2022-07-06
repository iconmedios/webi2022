<script>
  import TitlePage from '../components/TitlePage.svelte'

  const title = "Inicio";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<TitlePage titlePage="{title}" />
