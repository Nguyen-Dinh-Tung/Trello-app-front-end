import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import getImageUser from "../../api/GetImageUser";

export default function IsLogin() {
  const [avatar, setAvatar] = useState(false);
  const [valueAvatar, setValueAvatar] = useState();

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
  let idUser = decode["id"];
  useEffect(() => {
    getImageUser(idUser)
      .then((res) => {
        if (res.data.message === "Không có ảnh!") {
          setAvatar(false);
        } else if (res.data.message === "Unauthorized access.") {
          setAvatar(false);
        } else {
          setValueAvatar(res.data.message);
          setAvatar(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      {isLogin ? (
        <div className="flex items-center relative">
          <div className=" items-center text ml-2  text-stone-700">
            <div
              className="avatar "
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="w-12 rounded-full   ">
                <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    className="absolute -left-1 w-12 h-12 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <ul
              style={{
                position: "fixed",
                width: 20 + "%",
                top: 8 + "%",
                left: 80 + "%",
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
                  focus:text-gray-700
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
                <span className=" w-2/12 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                    style={{ cursor: "pointer" }}
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
              <li></li>
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
                  Thông tin tài khoản
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
                  href="/"
                >
                  Đăng xuất
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
