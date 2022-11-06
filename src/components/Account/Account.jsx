import jwt_decode from "jwt-decode";
import { Outlet } from "react-router-dom";

export default function Account() {
  const isLogin = localStorage.getItem("token");
  let decode;
  let str = "";
  if (isLogin) {
    decode = jwt_decode(isLogin);
    str = decode.name;
    str.split(" ");
  }
  return (
    <div className="overflow-y-scrol">
      <div className="w-full bg-slate-100 h-56 l  leading-5 flex flex-col  gap-y-12   drop-shadow-sm  ">
        <div className="flex flex-row justify-center py-0 mx-48">
          <div className=" my-10 flex ">
            <span
              className="flex flex-row gap-3 items-center  text-center rounded-full "
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span
                className="  text-center rounded-full bg-sky-400   "
                style={{
                  height: 60 + "px",
                  width: 60 + "px",
                  lineHeight: 60 + "px",
                  cursor: "text",
                }}
              >
                <span className=" text-center text-black text-3xl font-semibold">
                  {str[0]}
                </span>
              </span>
              <span className="text-2xl font-semibold    ">{str}</span>
            </span>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-center 1">
            <button class="flex px-3 py-2 bg-gray-300 focus:bg-white mr-1 text-black font-semibold rounded-sm">
              {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg> */}
              <a href="/account/profile">
                {" "}
                <span class="ml-1">Hồ sơ</span>
              </a>
            </button>

            <button class="flex px-3 py-2 bg-gray-300 focus:bg-white text-black font-semibold rounded-sm">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg> */}
              <a href="/account/resetpassword">
                {" "}
                <span class="ml-1">Thay đổi mật khẩu</span>
              </a>
            </button>
          </div>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
