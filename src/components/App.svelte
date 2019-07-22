<script>
  export let name;
  export let promise;
  import { fetchToiletStatus } from "../commons/fetcher";
  import { convertUtimeToTime } from "../commons/routine";
  promise = fetchToiletStatus();
  function handleClick() {
    promise = fetchToiletStatus();
  }
  import Card from "./Card.svelte";
</script>

<div class="navbar fixed">
  <section class="navbar-section">
    <div class="ml-2">
      <i class="fa fa-restroom"/>
      &nbsp;{name}
    </div>
  </section>
</div>

<div class="container grid-xs">
  <div class="content">
    {#await promise}
    <div class="loading loading-lg"></div>
    {:then items}
      {#if items[0].Pir === 0}
      <Card
        status={'enable'}
        func={handleClick}
        date={convertUtimeToTime(items[0].UpdateAt)}
      />
      {:else}
      <Card
        status={'disable'}
        func={handleClick}
        date={convertUtimeToTime(items[0].UpdateAt)}
      />
      {/if}
    {:catch err}
    <Card
      status={'error'}
      func={handleClick}
      date={'---'}
    />
    {/await}
  </div>
</div>
