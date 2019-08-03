<script>
  let clicked = false;
  let timer = null;
  import { createEventDispatcher, onDestroy } from "svelte";
  import { fetchToiletStatus } from "../commons/fetcher";
  import { notify } from "../commons/notify";

  const dispach = createEventDispatcher();
  // 10秒に一度ポーリングする。
  // 空いていれば、親コンポーネント（App.svelte）にディスパッチする
  // 上記タイミングで通知をだす
  const polling = () => {
    timer = setInterval(() => {
      let prms = fetchToiletStatus();
      prms.then(res => {
        if (res[0].Pir === 0) {
          notify();
          dispach("updateStatus", { promise: prms });
        }
      });
    }, 5000);
  };
  // 破棄される時にタイマーをストップさせる
  onDestroy(() => {
    if (timer !== null) {
      clearInterval(timer);
    }
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
