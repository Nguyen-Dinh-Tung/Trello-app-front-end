import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useGoogleLogin } from "@react-oauth/google";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export const Login = () => {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [errorsMessage, setErrorsMessage] = useState("");

  const handleShowPass = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const login = async (data) => {
    return await axios.post("http://localhost:8080/login", data);
  };
  const loginGoogle = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <div
        className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1525302220185-c387a117886e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0" />
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Welcom Back!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please sign in to your account
            </p>
          </div>
          <div className="flex flex-row justify-center items-center space-x-3">
            <span className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white  bg-emerald-600 hover:shadow-lg cursor-pointer transition ease-in duration-300">
              <a onClick={loginGoogle}>
                {" "}
                <i className="fa-brands fa-google fa-2xl"></i>
              </a>
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-16 bg-gray-300" />
            <span className="text-gray-500 font-normal">OR</span>
            <span className="h-px w-16 bg-gray-300" />
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              let data = {
                email: values.email,
                password: values.password,
              };

              login(data)
                .then((res) => {
                  let data = res.data.message;
                  if (data === "Đăng nhập thất bại! Vui lòng thử lại !") {
                    setErrorsMessage(data);
                  } else if (data === "Sai mật khẩu ! Vui lòng thử lại !") {
                    setErrorsMessage(data);
                  } else if (
                    data ===
                    "Tài khoản chưa được xác thực. Vui lòng kiểm tra email !"
                  ) {
                    setErrorsMessage(data);
                  } else {
                    console.log(res.data.data);
                    let token = JSON.stringify(res.data.data.token);
                    let refreshToken = JSON.stringify(
                      res.data.data.refreshToken
                    );
                    localStorage.setItem("token", token);
                    localStorage.setItem("refreshToken", refreshToken);
                    Swal.fire("Đăng nhập thành công !").then((result) => {
                      navigate("/user");
                    });
                  }
                })
                .catch((e) => {
                  // setErrorsMessage(e.response.data.message);
                });
            }}
          >
            {({
              errors,
              touched,
              isValidating,
              handleChange,
              handleSubmit,
            }) => (
              <form className="mt-8 space-y-6">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="relative">
                  {errorsMessage ? (
                    <div className="flex w-full px-6 py-4 my-2 rounded-xl shadow-md font-semibold text-md bg-white text-red-700">
                      <span className="h-6 w-6 mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                      </span>
                      {errorsMessage}
                      <button className="h-6 w-6 ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : null}
                  <div className="absolute right-0 mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <label className="text-sm font-bold text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    className=" w-full text-base py-2 border-b text-black border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="mail@gmail.com"
                  />
                  {errors.email && touched.email ? (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  ) : null}
                </div>
                <div className="mt-8 content-center">
                  <label className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </label>
                  <div className="grid grid-cols-12">
                    <div className="col-span-11">
                      <input
                        className="w-full content-center text-base py-2 border-b text-black border-gray-300 focus:outline-none focus:border-indigo-500"
                        type={passwordType}
                        name="password"
                        onChange={handleChange}
                        placeholder="Enter your password"
                      />
                    </div>

                    <div onClick={handleShowPass} className="col-span-1">
                      <i className="fa-solid fa-eye"></i>
                    </div>
                  </div>
                  {errors.password && touched.password ? (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  ) : null}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember_me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-500 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full flex justify-center bg-indigo-500 text-black p-4  rounded-full tracking-wide
                          font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    Login
                  </button>
                </div>
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don't have an account?</span>
                  <a
                    href="/register"
                    className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
