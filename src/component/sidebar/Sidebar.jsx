export default function Sidebar() {
  return (
    <div>
      <div className="fixed ml-56 mt-8 flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-white-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
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

        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1 ">
            <li className="text-slate-500 mb-2 text-xs flex items-start">
              <span className="pr-8 pl-1">Các không gian công việc</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-14 hover:bg-stone-200 rounded"
                style={{color:"GrayText",cursor:"pointer"}}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </li>
            <li>
              <a
                href="#"
                className="a1 relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
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
                <span className="ml-2 text-sm tracking-wide truncate">
                  Trang chủ
                </span>
              </a>
            </li>
            <li>
                
            </li>
          </ul>
          <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
            Copyright @2022
          </p>
        </div>
      </div>
    </div>
  );
}
