<script>
  export let name;
  export let promise;
  import { fetchToiletStatus } from "../commons/fetcher";
  import { convertUtimeToTime } from "../commons/routine";
  import { initNotification } from "../commons/notify";
  import Head from "./Head.svelte";
  import Card from "./Card.svelte";
  import LeakButton from "./LeakButton.svelte";
  // 通知の許可をとる
  initNotification();
  promise = fetchToiletStatus();
  const handleClick = () => {
    promise = fetchToiletStatus();
  };
  // Promiseの更新を子コンポーネントから受け取る
  const updateStatus = event => {
    promise = event.detail.promise;
  };
</script>

<Head promise={promise}/>

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
