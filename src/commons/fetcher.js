const PROD_URL = "https://pb52o89yja.execute-api.us-east-1.amazonaws.com/Prod/pir?limit=1";
const DEV_URL = "http://localhost:3000/toilet";

 export const fetchToiletStatus = async () => {
  const res = await fetch(PROD_URL);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw new Error("取得できませんでした。");
  }
}
