<script>
  let clicked = false;
  let timer = null;
  import { createEventDispatcher, onDestroy } from "svelte";
  import { fetchToiletStatus } from "../commons/fetcher";

  const dispach = createEventDispatcher();
  // 10秒に一度ポーリングする。
  // 空いていれば、親コンポーネント（App.svelte）にディスパッチする
  // TODO: 上記タイミングで
  const polling = () => {
    timer = setInterval(() => {
      let prms = fetchToiletStatus();
      prms.then(res => {
        if (res[0].Pir === 0) {
          dispach("updateStatus", { promise: prms });
        }
      });
    }, 10000);
  };
  // 破棄される時にタイマーをストップさせる
  onDestroy(() => {
    clearInterval(timer);
  });
</script>

<button
  class={`btn btn-${(clicked) ? 'error': 'primary'} btn-ex-lg btn-action btn-fixed s-circle`}
  on:click|once={() => {
      polling();
      clicked = true;
    }}>
  <i class="fa fa-poo" />
</button>
