<script>
  export let promise;
  let isNothing = true;
</script>

<svelte:head>
  {#await promise}
  <link rel='icon' type='image/png' href='/favicon__.ico'>
  {:then items}
    {#each items.results as result}
      {#if result.Pir === 0}
        {isNothing = false}
      {/if}
    {/each}
    {#if isNothing === false}
    <link rel='icon' type='image/png' href='/favicon.ico'>
    {:else}
    <link rel='icon' type='image/png' href='/favicon__.ico'>
    {/if}
  {:catch err}
  <link rel='icon' type='image/png' href='/favicon__.ico'>
  {/await}
</svelte:head>
