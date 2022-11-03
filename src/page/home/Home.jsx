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
const refreshToken = async () => {
  let ref = getLocalRefreshToken();
  let reftoken = {
    refreshToken: ref,
  };
  return await instance.post("http://localhost:8080/token", reftoken);
};

instance.setToken = (token) => {
  instance.defaults.headers["x-access-token"] = token;
  window.localStorage.setItem("token", token);
};


instance.interceptors.response.use(
  (response) => {
    const err = response.data;
    if (err.message == "Unauthorized access.") {
      refreshToken()
        .then((rs) => {
          console.log(rs);
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
  testApi();

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
