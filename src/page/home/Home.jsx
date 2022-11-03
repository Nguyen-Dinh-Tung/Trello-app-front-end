import axios from "axios";
import React, { useEffect, useState } from "react";
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
    return (status >= 200 && status < 300) || status === 401 || status === 403;
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
          return config;
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
  const [databaclk, setDatabaclk] = useState();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    testApi();
  }, []);

  const testApi = async () => {
    let token = localStorage.getItem("token");
    let data = {
      token: token,
    };
    const response = await instance.post("/user/test", data);
    // console.log("response", response);
    setloading(false);
    setDatabaclk(response.data.status);
  };

  return (
    <>
      <div>Home</div>
      {loading ? (
        <div class="grid min-h-screen place-content-center">
          <div class="flex items-center gap-2 text-gray-500">
            <span class="h-6 w-6 block rounded-full border-4 border-t-blue-300 animate-spin"></span>
            loading...
          </div>
        </div>
      ) : null}
      <div>{databaclk}</div>
    </>
  );
};
