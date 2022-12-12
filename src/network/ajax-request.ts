import axios from "axios";
import nprogress from "nprogress";
import { errorMsg } from "./notify";

function getHeaderConfig() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "x-api-key": " db933426-eb41-4dbc-9cda-60bc56b6d916 ",
    },
  };

  return config;
}

let progressCount = 0;
function startProgress() {
  if (progressCount === 0) {
    nprogress.start();
  }
  progressCount += 1;
}
function stopProgress() {
  progressCount -= 1;
  if (progressCount === 0) {
    nprogress.done();
  }
}

/* For axios instance  */

const axiosWithProgress = axios.create();
axiosWithProgress.interceptors.request.use(
  (config) => {
    startProgress();
    return config;
  },
  (err) => {
    stopProgress();
    return Promise.reject(err);
  }
);
axiosWithProgress.interceptors.response.use(
  (config) => {
    stopProgress();
    return config;
  },
  (err) => {
    stopProgress();
    if (err.response && err.response.status === 409) {
      // validation errors, should be handled by caller
      errorMsg(err.response.message);
    } else {
      // errorMsg("some thing went wrong");
    }
    return Promise.reject(err);
  }
);

function get(url: string) {
  const headers = getHeaderConfig();
  return axiosWithProgress.get(url, headers).then((resp) => resp.data);
}

export default get;
