<script>
  export let name;
  export let promise;
  import { fetchMultiSensors } from "../commons/fetcher";
  import { initNotification } from "../commons/notify";
  import Head from "./Head.svelte";
  import Card from "./Card.svelte";
  import LeakButton from "./LeakButton.svelte";
  import ResultCard from "./ResultCard.svelte";
  // 通知の許可をとる
  initNotification();
  promise = fetchMultiSensors();
  const handleClick = () => {
    promise = fetchMultiSensors();
  };
  // Promiseの更新をLeakButtonから受け取る
  const updateStatus = event => {
    promise = event.detail.promise;
  };
  // 利用可能なトイレ数をResultCardから受け取る
  let enableCnt = -1;
  const updateEnableCnt = event => {
    enableCnt = event.detail.enableCnt;
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
    />
    {:then items}
    <ResultCard
      results={items.results}
      func={handleClick}
      on:updateEnableCnt={updateEnableCnt}
    />
    {:catch err}
    <Card
      status={'error'}
      func={handleClick}
    />
    {/await}
  </div>
</div>

{#if enableCnt === 0}
<LeakButton on:updateStatus={updateStatus}/>
{/if}
