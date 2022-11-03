import jwt_decode from "jwt-decode";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function IsLogin() {
  const isLogin = localStorage.getItem("token");
  let decode;
  let str = "";
  if (isLogin) {
    decode = jwt_decode(isLogin);
    str = decode.name;
    str.split(" ");
  }
  console.log(str);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isLogin ? (
        <div>
          <div className="flex flex-row gap-2 ml-3">
            {/* <button className="rounded-full bg-sky-400 py-1.5 px-4 text-2xl">{str[0]}</button> */}
            <button
                  type="button"
                  className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-user"
                  data-collapse-toggle="dropdown-user"
                >
                {str[0]}
                </button>
                {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{str[0]}</button> */}
          </div>
         
      
        </div>
      ) : (
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
      )}
    </>
  );
}
