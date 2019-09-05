<script>
  export let results;
  export let func;
  import { createEventDispatcher, onMount } from "svelte";
  import { convertUtimeToTime } from "../commons/routine";
  let disable = 0;
  let enable = 0;
  for (let i = 0, l = results.length; i < l; i++) {
    if (results[i].Pir === 0) {
      enable++;
    } else {
      disable++;
    }
  }
  const dispatch = createEventDispatcher();
  onMount(() => {
    dispatch("updateEnableCnt", { enableCnt: enable });
  });
  const iconClasses = ["fa fa-smile text-success", "fa fa-tired text-warning"];
</script>

<div class="card result-card">
  <div class="card-header">
  <h5>
    {#if enable > 0}
      <i class="fa fa-check-circle text-success"/>&nbsp;{enable}室の空きがあります
    {:else}
      <i class="fa fa-exclamation-triangle text-warning"/>&nbsp;空きがありません
    {/if}
    <small class="float-right text-gray">{convertUtimeToTime(results[0].UpdateAt)}</small>
  </h5>
  </div>
  <div class="card-body">
    <div class="columns">
      {#each results as result}
      <div class="column">
        <div class="icon-wrapper">
          <i class={iconClasses[result.Pir]}/>
        </div>
      </div>
      {/each}
    </div>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-full"
      on:click={func}>
      <i class="fa fa-sync"/>&nbsp;
      空き状況を更新する
    </button>
  </div>
</div>
