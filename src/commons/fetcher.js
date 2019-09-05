const URL = {
  prod: {
    pir: 'https://pb52o89yja.execute-api.us-east-1.amazonaws.com/Prod/pir?limit=1',
    restroom: 'https://qy638wuifg.execute-api.us-east-1.amazonaws.com/Prod/restroom'
  },
  dev: {
    pir: 'http://localhost:3000/pir',
    restroom: 'http://localhost:3000/restroom'
  }
};

export const fetchToiletStatus = async () => {
  const url = getURLByEnv('pir');
  const res = await fetch(url);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw new Error("取得できませんでした。");
  }
}

export const fetchMultiSensors = async () => {
  const url = getURLByEnv();
  const res = await fetch(url);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw new Error("取得できませんでした。");
  }
};

const getURLByEnv = (type = 'restroom') => {
  const env = (window.location.hostname !== 'localhost') ? 'prod': 'dev';
  return URL[env][type];
}
