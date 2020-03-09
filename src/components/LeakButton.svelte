<script>
  let clicked = false;
  let timer = null;
  import { createEventDispatcher, onDestroy } from "svelte";
  import { fetchMultiSensors } from "../commons/fetcher";
  import { notify, getPermission } from "../commons/notify";
  const permit = getPermission();
  const dispatch = createEventDispatcher();
  // 10秒に一度ポーリングする。
  // 空いていれば、親コンポーネント（App.svelte）にディスパッチする
  // 上記タイミングで通知をだす
  const polling = () => {
    timer = setInterval(() => {
      let prms = fetchMultiSensors();
      prms.then(res => {
        let enableCnt = 0;
        for (let i = 0, l = res.results.length; i < l; i++) {
          if (res.results[i].Pir === 0) {
            enableCnt++;
          }
        }
        if (enableCnt > 0) {
          notify();
          dispatch("updateStatus", { promise: prms });
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
  disabled={(permit !== 'granted')}
  on:click|once={() => {
      polling();
      clicked = true;
    }}>
  <i class="fa fa-poo" />
</button>
