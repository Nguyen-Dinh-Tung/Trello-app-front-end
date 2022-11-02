import axios from "axios";
import React from "react";

// response parse

//get token o localStorage
function getLocalToken() {
  const token = window.localStorage.getItem("token");
  console.log("token >>>", token);
  return token;
}

//get token o refreshToken
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
});
function refreshToken() {
  return instance.post("/token", {
    refreshToken: getLocalRefreshToken(),
  });
}

instance.setToken = (token) => {
  instance.defaults.headers["x-access-token"] = token;
  window.localStorage.setItem("token", token);
};


instance.interceptors.response.use(
  (response) => {
    const err = response.data.err;
    // console.log("🚀 ~ file: Home.jsx ~ line 40 ~ err", err);
    console.log("🚀 ~ file: Home.jsx ~ line 39 ~ response", err.name);
    if (err.name == "TokenExpiredError") {
      console.log(1);
      return refreshToken()
        .then((rs) => {
          console.log("🚀 ~ file: Home.jsx ~ line 47 ~ .then ~ rs", rs);
          const { token } = rs.data;
          instance.setToken(token);
          const config = response.config;
          config.headers["x-access-token"] = token;
          config.baseURL = "http://localhost:8080/";
          return instance(config);
        })
        .catch((e) => {
          console.log(2);
        });
    }
    // console.log(11);
    return response;
  },
  (error) => {
    console.log("Error status");
    //return Promise.reject(error)
    if (error.response) {
      return error;
    } else {
      return Promise.reject(error);
    }
  }
);

export const Home = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  let data = {
    token: token,
  };

  const testApi = async (data) => {
    return await instance.post("http://localhost:8080/user/test", data);
  };
  testApi();

  testApi(data)
    .then((res) => {
      console.log("🚀 ~ file: Home.jsx ~ line 75 ~ .then ~ res", res);
    })
    .catch((e) => {
      //   console.log(e);
    });
  return <div>Home</div>;
};
