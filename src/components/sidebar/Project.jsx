import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import getBroad from "../../api/GetBroad";

export default function Project() {
  let icon1 = document.getElementById("icon1");
  let menu1 = document.getElementById("menu1");
  let [workspace, setWorkSpace] = useState([]);

  const showMenu1 = (flag) => {
    if (flag) {
      icon1.classList.toggle("rotate-180");
      menu1.classList.toggle("hidden");
    }
  };
  let token = localStorage.getItem("token");
  let idUser = jwtDecode(token).id;
  useEffect(() => {
    getBroad(idUser)
      .then((res) => {
        console.log("🚀 ~ file: Home.jsx ~ line 24 ~ .then ~ res", res);
        setWorkSpace(res.data.listWorkSpace);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <>
      <div
        id="Main"
        class="xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-white-900 flex-col"
      >
        <div class="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
          {/* Bảng */}
          <button class="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-black rounded ">
          <span> <i class="fa-brands fa-trello"></i> </span>
          <span> Bảng </span>
          </button>
          {/* Mẫu */}
          <button class="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-black focus:text-indigo-400   rounded ">
          <span> <i class="fa-brands fa-trello"></i> </span>
          <span> Bảng Mẫu </span>
          </button>
           {/* Trang chủ */}
          <button class="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-black focus:text-indigo-400   rounded ">
          <span> <i class="fa-solid fa-house"></i> </span>
          <span> Trang chủ </span>
          </button>
          {/* Project */}
        </div>
        {workspace.map((item,index) => (
          <div className="w-full ">
            <div class="flex flex-col justify-start items-center px-2 py-1 border-b border-gray-600  ">
              <button
                onClick={showMenu1}
                class="focus:outline-none px-2 rounded hover:bg-gray-300 focus:text-indigo-400 text-left text-black flex justify-between items-center w-full py-2 space-x-14  "
              >
                <p class="text-sm leading-5 ">{item.name}</p>
                <svg
                  id="icon1"
                  class="transform"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div
                id="menu1"
                class="flex justify-start flex-col w-full md:w-auto items-start pb-1 "
              >
                <button class="flex justify-start items-center space-x-6 hover:text-black focus:bg-gray-200 focus:text-black hover:bg-gray-200 text-gray-400 rounded px-3 py-2 w-full md:w-52">
                  <svg
                    class="fill-stroke"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="text-base leading-4  ">Messages</p>
                </button>
                <button class="flex justify-start items-center space-x-6 hover:text-black focus:bg-gray-200 focus:text-black hover:bg-gray-200 text-gray-400 rounded px-3 py-2  w-full ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.85 12.15L19 4"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18 5L20 7"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 8L17 10"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="text-base leading-4  ">Security</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
