export const convertUtimeToTime = utime => {
  const time = new Date(utime);
  const year = time.getFullYear();
  const month = ('0' + (time.getMonth() + 1)).slice(-2);
  const day = ('0' + time.getDate()).slice(-2);
  const hour = ('0' + time.getHours()).slice(-2);
  const min = ('0' + time.getMinutes()).slice(-2);
  const sec = ('0' + time.getSeconds()).slice(-2);
  return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}
