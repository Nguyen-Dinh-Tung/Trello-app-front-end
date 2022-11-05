import { useState } from "react";
import jwt_decode from "jwt-decode";

export default function IsLogin() {
  const isLogin = localStorage.getItem("token");
  let decode;
  let str = "";
  if (isLogin) {
    decode = jwt_decode(isLogin);
    str = decode.name;
    str.split(" ");
  }
  console.log(decode);
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setOpen(false);
  };
  return (
    <>
      {isLogin ? (
        <div className="flex items-center relative">
          <div className="flex items-center text ml-2  text-stone-700">
            <a
              className="flex items-center text ml-2 "
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span
                className=" rounded-full bg-sky-400 text-center text-white text-lg hover:bg-sky-300 cursor-pointer hover:text-white"
                style={{
                  height: 32 + "px",
                  width: 32 + "px",
                  lineHeight: 32 + "px",
                }}
              >
                {str[0]}
              </span>
            </a>
            <ul
              // style={{ top: 131 + "%", left: -183 + "%" }}
              style={{
                position: "fixed",
                width: 250 + "px",
                top: 58 + "px",
                left: 1280 + "px",
              }}
              className="
              
   dropdown-menu
   bg-white
   text-base
   shadow-lg
   hidden

 "
              aria-labelledby="dropdownMenuButton2"
            >
              <li className=" flex flex-row">
                <a
                  className="
                  w-10-12
       dropdown-item
       text-sm
       font-normal
       block
       whitespace-nowrap
       bg-transparent
       text-gray-700
       text-center
       cursor:text
     "
                >
                  Tài khoản
                </a>
                <span className="cursor:pointer w-2/12 mt-1">
                   <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                  
                  style={{cursor: "pointer"}}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                </span>
               
              </li>

              <li>
                <hr className="mx-3 border-2 text-stone-500 my-2"></hr>
              </li>
              <li>
                <div className="flex ml-3 gap-3 my-1">
                  <span
                    className=" text-center rounded-full bg-sky-400 text-center text-white text-3xl"
                    style={{
                      height: 45 + "px",
                      width: 45 + "px",
                      lineHeight: 45 + "px",
                    }}
                  >
                    {str[0]}
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-sm">{decode.name}</span>
                    <span className="text-xs text-stone-300">{decode.iat}</span>
                  </span>
                </div>
              </li>
              <li>
                <hr className="mx-3 border-2 text-slate-400 my-2"></hr>
              </li>
              <li className="hover:bg-stone-200 ">
                <a
                  className="
       dropdown-item
       text-sm
       font-normal
       block
       w-full
       whitespace-nowrap
       bg-transparent
       text-gray-700
       hover:bg-gray-100
     "
                  href="/account"
                >
                  Hồ sơ tài khoản
                </a>
              </li>
              <li>
                <hr className="mx-3 border-2 text-stone-500 my-2"></hr>
              </li>
              <li className="hover:bg-stone-200">
                <a
                  onClick={() => handleLogout()}
                  className="
       dropdown-item
       text-sm
       font-normal
       block
       w-full
       whitespace-nowrap
       bg-transparent
       text-gray-700
       hover:bg-gray-100
     "
                  href="/home"
                >
                  Đăng xuất khỏi trái đất
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex">
          <a
            href="/register"
            className="block text-md px-4 py-2 rounded  ml-2 font-bold hover:text-white lg:mt-0 "
          >
            Đăng ký
          </a>
          <a
            href="/login"
            className=" block text-md px-4  ml-2 py-2 rounded font-bold hover:text-white lg:mt-0"
          >
            Đăng nhập
          </a>
        </div>
      )}
    </>
  );
}
