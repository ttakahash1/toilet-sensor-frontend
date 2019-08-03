<script>
  export let name;
  export let promise;
  import { fetchToiletStatus } from "../commons/fetcher";
  import { convertUtimeToTime } from "../commons/routine";
  import { initNotification } from "../commons/notify";
  initNotification();
  promise = fetchToiletStatus();
  const handleClick = () => {
    promise = fetchToiletStatus();
  };
  import Card from "./Card.svelte";
  import LeakButton from "./LeakButton.svelte";
  // Promiseの更新を子コンポーネントから受け取る
  const updateStatus = event => {
    promise = event.detail.promise;
  };
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
      <LeakButton on:updateStatus={updateStatus}/>
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
