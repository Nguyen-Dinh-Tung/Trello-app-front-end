import { useState } from "react";

export default function Sidebar() {
  const [onCreate, setOnCreate] = useState(true);
  return (
    <div class="flex flex-cols gap-12 justify-center mt-8 ">
      <div className="flex flex-col">
        <div className=" top-14 left-0 md:w-64 bg-white-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
          <div className="divide-stone-300">
            <ul className="text-stone-900 ">
              <li className="flex-row rounded hover:bg-gray-200 mb-2">
                <a href="#" className="flex align-items-center p-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 024 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 items-center"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>

                  <span className="px-4 text-sm text-center text-justify">
                    Bảng
                  </span>
                </a>
              </li>
              <li className="flex-row rounded hover:bg-gray-200 mb-2">
                <a href="#" className="flex align-items-center p-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                    />
                  </svg>

                  <span className="px-4 text-sm text-center text-justify">
                    Mẫu
                  </span>
                </a>
              </li>
              <li className="flex-row rounded hover:bg-gray-200">
                <a href="#" className="flex align-items-center p-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                    />
                  </svg>

                  <span className="px-4 text-sm text-center text-justify">
                    Trang chủ
                  </span>
                </a>
              </li>
            </ul>
            <hr className="mt-5"></hr>
          </div>

          <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between ">
            <ul className="flex flex-col py-4 space-y-1 w-80 h-96 ">
              <li className="text-slate-500 mb-2 text-xs flex items-start">
                <span className="pr-8 pl-1">Các không gian công việc</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-14 hover:bg-stone-200 rounded"
                  style={{ color: "GrayText", cursor: "pointer" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </li>
              <li>
                <div
                  href="#"
                  className=" relative flex items-center h-11 focus:outline-none hover:bg-stone-300 text-gray-600 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide  flex gap-28 ">
                    Dự án...
                    {/* <BiChevronDown size={20} /> */}
                  </span>
                </div>
                <ul className="bg-red mr-96 text-stone-200 display-on">
                  <li>
                    <a>
                      <span >Bảng</span>
                      <span></span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* oulet */}

      <div className="pl-5 w-fit ">
        <div className="text-slate-400 text-xl pb-5">
          Các không gian làm việc của bạn
        </div>
        <div className="flex px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-1 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
            />
          </svg>
          <span className="font-bold">Dự án...</span>
          <div className=" ml-40  flex flex-row gap-3 mb-6">
            <div className="flex hover:bg-slate-300 bg-slate-200 p-1 px-2 rounded cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 022 20"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-0.5 items-center mr-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
              <a>Bảng</a>
            </div>
            <div className="flex hover:bg-slate-300 bg-slate-200 p-1 px-2 rounded cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-1 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>

              <a>Dạng xem</a>
            </div>
            <div className="flex hover:bg-slate-300 bg-slate-200 p-1 px-2 rounded cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-1 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <a>Thành viên(10)</a>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div>
            <a
              href="#"
              class="block p-2 text-left max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              style={{ height: 150 + "px", width: 300 + "px" }}
            >
              <span class="text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Trello
              </span>
            </a>
          </div>
          <div>
            <a
              href="#"
              class="block text-center justify-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              style={{ height: 150 + "px", width: 300 + "px" }}
            >
              <div className="flex flex-col">
                <span class="text-center text-base tracking-tight text-gray-600 dark:text-white">
                  Tạo bảng mới
                </span>
                <span className="text-xs text-gray-600  ">5 còn lại</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
