<script>
  export let status;
  export let date;
  export let func;
</script>

<div class="card">
  <div class="card-header">
    <h5>
    {#if status === 'enable'}
      <i class="fa fa-check-circle text-success"/>&nbsp;
      空室
      {:else if status === 'disable'}
      <i class="fa fa-exclamation-triangle text-warning"/>&nbsp;
      使用中
      {:else if status === 'error'}
      エラー発生中
      {:else if status === 'loading'}
      <i class="fa fa-circle-notch fa-spin text-gray"/>&nbsp;
      問い合わせ中
      {/if}
      <small class="float-right text-gray">{date}</small>
    </h5>
  </div>
  <div class="card-body">
    <div class="toilet-status">
      {#if status === 'enable'}
      <i class="fa fa-smile text-success"/>
      {:else if status === 'disable'}
      <i class="fa fa-tired text-warning"/>
      {:else if status === 'error'}
      <i class="fa fa-dizzy text-error"/>
      {:else if status === 'loading'}
      <i class="fa fa-meh text-gray"/>
      {/if}
    </div>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-full"
      disabled={(status === 'loading')}
      on:click={func}>
      <i class="fa fa-sync"/>&nbsp;
      空き状況を更新する
    </button>
  </div>
</div>
