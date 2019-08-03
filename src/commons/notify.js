// TODO 実装
export const notify = () => {
  if (!("Notification" in window)) {
    alert('このブラウザは通知に対応していません。');
  } else if (Notification.permission === 'granted') {
    new Notification('トイレが空きました。');
  }
};


export const initNotification = () => {
  if (!("Notification" in window)) {
    alert('このブラウザは通知に対応していません。');
  } else if (Notification.permission === 'default') {
    Notification.requestPermission((permission) => {
      if (permission === 'granted') {
        new Notification('通知が許可されました。')
      }
    });
  }
}
