import { Outlet } from "react-router-dom";
import "./navbar.css";
import Modals from '../Modals/Modals'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setShowModal } from "../../redux/features/showModal.slice";
export default function Navbar() {
  const dispatch = useDispatch()
  const handleCreateBroad = () =>{
    dispatch(setShowModal('block'))
  }
  return (
    <div>
    <Modals/>

      <nav className="navbar flex items-center justify-between justify-center flex-wrap  py-2 lg:px-2 shadow text-white  border-blue-700 text-white-700">
        <button className="btn1">
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
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 ml-2 text-center justify-center  border-solid border-b-2 border-gray-300  lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 ">
            <span className="font-semibold text-xl tracking-tight">Trello</span>
          </div>
        </div>
        <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-md font-bold flex-row lg:flex-grow">
            <div className="group inline-block ">
              <button className="btn1 rounded-sm flex items-center min-w-32">
                <span className="pr-1 font-semibold flex-1 ">
                  Các không gian làm việc
                </span>
                <span>
                  <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>

              <ul

                className=" border rounded-sm transform scale-0 group-hover:scale-100 absolute

  transition duration-150 ease-in-out origin-top min-w-32 w-80 mt-4"
              >
                <li className="li1 color-text-li text-center justify-center bg-inherit hover:bg-inherit ">
                  Các không gian làm việc
                </li>
                <hr className="hr-navbar"></hr>
                <li className="li1 rounded-sm px-3 py-1 hover:bg-gray-100">
                  ...
                </li>
                <li className="li1 rounded-sm px-3 py-1 hover:bg-gray-100">
                  ...
                </li>
              </ul>
            </div>
            <div className="group inline-block ">
              <button className="btn1 rounded-sm flex items-center min-w-32">
                <span className="pr-1 font-semibold flex-1 ">Gần đây</span>
                <span>
                  <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>

              <ul

                className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute

  transition duration-150 ease-in-out origin-top min-w-32 w-80 mt-4"
              >
                <li className="li1 color-text-li text-center justify-center bg-inherit hover:bg-inherit ">
                  Gần đây
                </li>
                <hr className="hr-navbar"></hr>
                <li className="li1 rounded-sm px-3 py-1 hover:bg-gray-100">
                  ...
                </li>
                <li className="li1 rounded-sm px-3 py-1 hover:bg-gray-100">
                  ...
                </li>
              </ul>
            </div>
            <div className="group inline-block ">
              <button className="btn1 rounded-sm flex items-center min-w-32">
                <span className="pr-1 font-semibold flex-1 ">
                  Đã đánh dấu sao
                </span>
                <span>
                  <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>

              <ul

                className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute

  transition duration-150 ease-in-out origin-top min-w-32 w-80 mt-4"
              >
                <li className="li1 color-text-li text-center justify-center bg-inherit hover:bg-inherit ">
                  Đã đánh dấu sao
                </li>
                <hr className="hr-navbar"></hr>
                <li className="li1 rounded-sm px-3 py-1 hover:bg-gray-100">
                  ...
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">...</li>
              </ul>
            </div>

            <div className="group inline-block " >
              <button className="btn1 flex items-center button-create" onClick={handleCreateBroad} >

                Tạo mới
              </button>

              <ul

                className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute

  transition duration-150 ease-in-out origin-top min-w-32 w-80 mt-4"
              >
                <li className="li1 color-text-li text-center justify-center bg-inherit hover:bg-inherit ">
                  Tạo mới
                </li>
                <hr className="hr-navbar"></hr>
                <li className="li1 rounded-sm px-3 py-1 hover:bg-gray-100">
                  Tạo bảng
                </li>
              </ul>
            </div>
          </div>

          {/* This is an example component */}
          <div className="relative mx-auto text-gray-600 lg:block hidden">
            <input
              className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
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
          <div className="flex">
            <a
              href="/register"
              className="block text-md px-4 py-2 rounded  ml-2 font-bold hover:text-white mt-4 lg:mt-0 "
            >
              Đăng ký
            </a>
            <a
              href="/login"
              className=" block text-md px-4  ml-2 py-2 rounded font-bold hover:text-white mt-4 lg:mt-0"
            >
              Đăng nhập
            </a>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
