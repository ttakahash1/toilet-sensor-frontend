<script>
export let promise;
</script>

<svelte:head>
  {#await promise}
  <link rel='icon' type='image/png' href='/favicon__.ico'>
  {:then items}
    {#if items[0].Pir === 0}
    <link rel='icon' type='image/png' href='/favicon.ico'>
    {:else}
    <link rel='icon' type='image/png' href='/favicon__.ico'>
    {/if}
  {:catch err}
  <link rel='icon' type='image/png' href='/favicon__.ico'>
  {/await}
</svelte:head>
