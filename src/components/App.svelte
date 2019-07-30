<script>
  export let name;
  export let promise;
  export let timer;
  import { fetchToiletStatus } from "../commons/fetcher";
  import { convertUtimeToTime } from "../commons/routine";
  promise = fetchToiletStatus();
  const handleClick = () => {
    promise = fetchToiletStatus();
  };
  const polling = () => {
    timer = setInterval(() => {
      promise = fetchToiletStatus();
    }, 10000);
  };
  import Card from "./Card.svelte";
  import LeakButton from "./LeakButton.svelte";
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
    <Card
      status={'loading'}
      func={handleClick}
      date={'---'}
    />
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
      <LeakButton func={polling} />
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
