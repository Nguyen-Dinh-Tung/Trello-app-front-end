import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";

const registerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  name: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password done not match !")
    .required("Required !"),
});

export default function Register() {
  let navigate = useNavigate();

  const [errorsMessage, setErrorsMessage] = useState("");

  const register = async (data) => {
    return await axios.post("http://localhost:8080/register", data);
  };

  return (
    <div>
      <div className="p-28 w-screen h-screen mx-auto overflow-hidden bg-gray-100 shadow-lg md:flex md:h-full">
        <div className="grid w-full grid-cols-2">
          <div
            className="h-full col-span-1 p-6 bg-bottom bg-cover rounded-none sm:h-full sm:rounded sm:w-auto "
            style={{
              backgroundImage:
                'url("https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp")',
            }}
          >
            {/* <div className="pt-2 font-serif text-3xl font-bold text-left text-black my-18"></div>
            <div className="text-left text-white-600"></div>
            <div className="inline-block px-4 py-2 mt-5 text-center text-white"></div> */}
          </div>
          <div className="flex items-center justify-center w-full col-span-1">
            <Formik
              initialValues={{
                email: "",
                name: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={registerSchema}
              onSubmit={(values) => {
                let data = {
                  email: values.email,
                  name: values.name,
                  password: values.password,
                };
                register(data)
                  .then((res) => {
                    let data = res.data.message;
                    if (data === "Username đã tồn tại !") {
                      setErrorsMessage(data);
                    } else if (data === "Email đã tồn tại !") {
                      setErrorsMessage(data);
                    } else {
                      // console.log(JSON.stringify(res.data));
                    //   localStorage.setItem(
                    //     "verifyRegister",
                    //     JSON.stringify(res.data)
                    //   );
                      Swal.fire("Đăng ký tài khoản thành công !").then(
                        (result) => {
                          navigate("/login");
                        }
                      );
                    }
                  })
                  .catch((e) => {
                    console.log(e.message);
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
                <form className="max-w-xl p-4 mx-auto mt-4">
                  <div className="mb-8 font-serif text-5xl font-bold text-center text-black">
                    Register
                  </div>
                  {errorsMessage ? (
                    <div className="alert alert-error shadow-lg">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{errorsMessage}</span>
                      </div>
                    </div>
                  ) : null}

                  <div className="flex flex-wrap mb-6 -mx-3">
                    <div className="w-full px-3">
                      <label
                        className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                        htmlFor="grid-password"
                      >
                        Username
                      </label>
                      <input
                        className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-orange-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        placeholder="HarshDoe"
                        required
                      />
                      {errors.name && touched.name ? (
                        <div style={{ color: "red" }}>{errors.name}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-6 -mx-3">
                    <div className="w-full px-3">
                      <label
                        className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                        htmlFor="grid-first-name"
                      >
                        Email Address
                      </label>
                      <input
                        className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-indigo-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="harshdoe@example.com"
                        required
                      />
                      {errors.email && touched.email ? (
                        <div style={{ color: "red" }}>{errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-6 -mx-3">
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                      <label
                        className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                        htmlFor="grid-first-name"
                      >
                        Password
                      </label>
                      <input
                        className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-green-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        placeholder="Password"
                        required
                      />
                      {errors.password && touched.password ? (
                        <div style={{ color: "red" }}>{errors.password}</div>
                      ) : null}
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <label
                        className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                        htmlFor="grid-last-name"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-blue-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        required
                      />
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <div style={{ color: "red" }}>
                          {errors.confirmPassword}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="px-8 py-2 font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-pink-500 to-orange-500 hover:from-teal-400 hover:to-blue-500"
                    >
                      Register
                    </button>
                  </div>
                  <div className="flex justify-center mt-1">
                    <h6 className="text-xs font-bold tracking-wide text-gray-700 ">
                      or register with
                    </h6>
                  </div>

                  <br></br>
                  <div className="mb-8 font-serif text-xl font-bold text-center">
                    <a href="/login">Login</a>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
