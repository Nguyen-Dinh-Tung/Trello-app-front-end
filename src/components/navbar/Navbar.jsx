import axios from "axios";
import { Outlet } from "react-router-dom";
import Modals from "../Modals/Modals";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShowModal } from "../../redux/features/showModal.slice";
import IsLogin from "./IsLogin";
export default function Navbar() {
  const dispatch = useDispatch();
  const handleCreateBroad = () => {
    dispatch(setShowModal("block"));
  };

  return (
    <div>
      <Modals />
      <nav className="navbar flex bg-sky-600 items-center justify-between justify-center flex-wrap  py-1 lg:px-2 shadow text-white">
        <button className="px-2">
          <span
            role="img"
            aria-label="ApplicationSwitcherIcon"
            className="css-snhnyn "
          >
            <svg
              width="24"
              height="24"
              role="presentation"
              focusable="false"
              // viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillrule="evenodd"
                cliprule="evenodd"
                d="M4 5C4 4.44772 4.44772 4 5 4H7C7.55228 4 8 4.44772 8 5V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V5ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11V13C8 13.5523 7.55228 14 7 14H5C4.44772 14 4 13.5523 4 13V11ZM11 4C10.4477 4 10 4.44772 10 5V7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7V5C14 4.44772 13.5523 4 13 4H11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11ZM17 4C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17ZM16 11C16 10.4477 16.4477 10 17 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H17C16.4477 14 16 13.5523 16 13V11ZM5 16C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5ZM10 17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V17ZM17 16C16.4477 16 16 16.4477 16 17V19C16 19.5523 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 19.5523 16 19 16H17Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>
        <div className="flex mr-5 justify-between lg:w-auto w-full lg:border-b-0 ml-2 text-center justify-center border-solid border-b-2 border-gray-300  lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 ">
            <a href="/">
              {" "}
              <span className="font-semibold text-xl tracking-tight ">
                Trello
              </span>
            </a>
          </div>
        </div>
        <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto ">
          <div className=" text-md flex-row flex gap-2 lg:flex-grow ">
            <div className="group inline-block hover:bg-sky-500 focus:bg-sky-500 rounded">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdown1"
                className="text-white  border-b md:border-0 pl-3 pr-4 py-1 px-2  focus:bg-sky-500 rounded md:p-0 flex items-center justify-between w-full md:w-auto"
              >
                Các không gian việc làm
                <svg
                  className="w-6 h-6 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                id="dropdown1"
                className="hidden bg-white z-10 list-none divide-y-2 divide-gray-100 rounded py-2 shadow my-1 w-44 w-64"
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="text-sm block text-center text-black p-2 flex flex-row"
                  >
                    <span className="text-center w-11/12 cursor-text text-stone-500 align-middle">
                      Các không gian việc làm
                    </span>

                    <button
                      className="cursor-pointer  absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded "
                      role="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
                        width={17}
                        height={17}
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </button>
                  </a>
                </div>
                <div>
                  <ul
                    className="py-1 rounded-sm text-black "
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="#" className="text-sm block px-4 py-2">
                        11
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm block px-4 py-2">
                        11
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm block px-4 py-2">
                        cccc
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="group inline-block hover:bg-sky-500 focus:bg-sky-500 rounded">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownGanDay"
                className="text-white  border-b md:border-0 pl-3 pr-4 py-1 px-2  focus:bg-sky-500 rounded md:p-0 flex items-center justify-between w-full md:w-auto"
              >
                Gần đây
                <svg
                  className="w-6 h-6 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                id="dropdownGanDay"
                className="hidden bg-white z-10 list-none divide-y-2 divide-gray-100 rounded py-2 shadow my-1 w-44 w-64"
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="text-sm block text-center text-black p-2 flex flex-row"
                  >
                    <span className="text-center w-11/12 cursor-text text-stone-500 align-middle">
                      Gần đây
                    </span>

                    <button
                      className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded "
                      aria-label="close modal"
                      role="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
                        width={17}
                        height={17}
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </button>
                  </a>
                </div>
                <div>
                  <ul
                    className="py-1 rounded-sm text-black "
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="#" className="text-sm block px-4 py-2">
                        222
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm block px-4 py-2">
                        222
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm block px-4 py-2">
                        cccc
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="group inline-block hover:bg-sky-500 focus:bg-sky-500 rounded">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdown3"
                className="text-white  border-b md:border-0 pl-3  pr-4 py-1 px-2  focus:bg-sky-500 rounded md:p-0 flex items-center justify-between w-full md:w-auto"
              >
                Đã đánh dấu sao
                <svg
                  className="w-6 h-6 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                id="dropdown3"
                className="hidden bg-white z-10 list-none divide-y-2 divide-gray-100 rounded py-2 shadow my-1 w-44 w-64"
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="text-sm block text-center cursor-text text-black p-2 flex flex-row"
                  >
                    <span className="text-center w-11/12 text-stone-500 align-middle">
                      Đã đánh dấu sao
                    </span>
                    <button
                      className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded "
                      aria-label="close modal"
                      role="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
                        width={17}
                        height={17}
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </button>
                  </a>
                </div>
                <div className="flex flew-col gap-3">
                  <ul
                    className="py-1 rounded-sm text-black "
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="#" className="text-sm block px-4 py-2">
                        333
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm block px-4 py-2">
                        33
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm block px-4 py-2">
                        cccc
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="group inline-block hover:bg-sky-500 focus:bg-sky-500 rounded">
              <button
                onClick={handleCreateBroad}
                className="text-white  border-b md:border-0 pl-3 pr-4 py-1 px-2  focus:bg-sky-500 rounded md:p-0 flex items-center justify-between w-full md:w-auto"
              >
                Tạo mới
              </button>
            </div>
          </div>

          {/* This is an example component */}
          <div className="relative mx-auto text-gray-600 lg:block hidden">
            <input
              className="border-2 border-gray-300 bg-white h-8 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
              <svg
                className="text-gray-600 h-4 w-4 "
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          {/* login-logout */}
          <IsLogin />
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
