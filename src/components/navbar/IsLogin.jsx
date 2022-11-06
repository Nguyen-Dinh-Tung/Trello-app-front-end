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
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setOpen(false);
  };
  return (
    <>
      {isLogin ? (
        <div className="flex items-center relative">
          <div>
            <a
              className="flex items-center hover:bg-sky-400  cursor-pointer hover:text-white bg-sky-300 rounded-full px-3 py-2 ml-2 text-lg"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {str[0]}
            </a>
            <ul
              style={{ top: 131 + "%", left: -283 + "%" }}
              className="
        w-48
   dropdown-menu
   absolute
   hidden
   bg-white
   text-base
   list-none
   shadow-lg
   hidden
   bg-clip-padding
   border-none

 "
              aria-labelledby="dropdownMenuButton2"
            >
              <li className="hover:bg-stone-300">
                <a
                  className="
       dropdown-item
       text-sm
       font-normal
       block
       whitespace-nowrap
       bg-transparent
       text-gray-700
       hover:bg-gray-100
       text-center
     "
                  href="#"
                >
                  Tài khoản
                </a>
                <hr></hr>
              </li>
              <li className="hover:bg-stone-300 ">
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
                  href="#"
                >
                  Hồ sơ tài khoản
                </a>
                <hr></hr>
              </li>
              <li className="hover:bg-stone-300">
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
                  href="/login"
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
