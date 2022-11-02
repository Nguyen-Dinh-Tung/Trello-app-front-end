import axios from "axios";
import React, { useEffect } from "react";
import { getData } from "../../services/dataset";

function getLocalRefreshToken() {
  const token = window.localStorage.getItem("refreshToken");
  return JSON.parse(token);
}

const instance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: function (status) {
    return (status >= 200 && status < 300) || status === 401;
  },
});
const refreshToken = async () => {
  let ref = getLocalRefreshToken();
  let reftoken = {
    refreshToken: ref,
  };
  return await axios.post("http://localhost:8080/token", reftoken);
};

instance.setToken = (token) => {
  instance.defaults.headers["x-access-token"] = token;
  window.localStorage.setItem("token", token);
};

instance.interceptors.response.use(
  (response) => {
    const err = response.data;
    if (err.message == "Unauthorized access.") {
      console.log(1);
      refreshToken()
        .then((rs) => {
          const { token } = rs.data;
          instance.setToken(token);
          const config = response.config;
          config.headers["x-access-token"] = token;
          config.baseURL = "http://localhost:8080/";
          return instance(config);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
    return response;
  },
  (error) => {
    if (error.response) {
      return error;
    } else {
      return Promise.reject(error);
    }
  }
);

export const Home = () => {
  // useEffect(() => {
  //   testApi();
  // }, []);

  // const testApi = async () => {
  //   try {
  //     await getData().then((res) => {
  //       console.log(res);
  //     });
  //   } catch (error) {}
  // };
  useEffect(() => {
    testApi();
  }, []);

  const testApi = async () => {
    let token = localStorage.getItem("token");
    let data = {
      token: token,
    };
    const response = await instance.post("/user/test", data);
    console.log("response", response);
  };

  return <div>Home</div>;
};
