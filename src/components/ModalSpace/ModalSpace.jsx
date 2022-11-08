import React, { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import createBroad from "../../api/CreateBroad.api";
import { useSelector } from "react-redux";
import {
  setShowMenuDivider,
  setShowModal,
} from "../../redux/features/showModal.slice";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import CreateWorkSpace from "../../api/CreateWorkSpace";

function ModalSpace(props) {
  const isShowMenudivider = useSelector((state) => {
    return state.isShowModal.isShowMenudivider;
  });
  const dispath = useDispatch();
  let token = localStorage.getItem("token");
  let idUser = jwtDecode(token).id;
  const [newBroad, setNewBroad] = useState({
    name: "",
    des: "",
    idUser: idUser,
  });

  const [isCreateBroad, setCreateBroad] = useState(true);
  const handleHiddenModals = () => {
    dispath(setShowMenuDivider("none"));
  };

  useEffect(() => {
    if (newBroad.name && newBroad.des) {
      setCreateBroad(false);
    } else {
      setCreateBroad(true);
    }
  }, [newBroad]);
  const handleClick = () => {
    if (isCreateBroad === false) {
      // console.log(
      //   "🚀 ~ file: ModalSpace.jsx ~ line 24 ~ ModalSpace ~ newBroad",
      //   newBroad
      // );
      CreateWorkSpace(newBroad)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));

      // createBroad(newBroad)
      //   .then((res) => {
      //     console.log(res);
      //     dispath(setShowModal("none"));
      //   })
      //   .catch((e) => console.log(e.message));
    } else {
      console.log(1);
    }
  };

  return (
    <>
      <div className="modals" style={{ display: isShowMenudivider }}>
        <div
          className="  backdrop-blur-sm  transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
          id="modal"
        >
          <div role="alert" className="container  mt-24">
            <div className="">
              <div className="relative flex py-16 gap-10 px-5 md:px-10 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
                <div className="w-6/12">
                  {" "}
                  <h1 className="text-gray-800 dark:text-black  font-lg font-bold tracking-normal leading-tight mb-4">
                    Hãy xây dựng một Không gian làm việc
                  </h1>
                  <label
                    htmlFor="name"
                    className="text-gray-800 dark:text-black  text-sm font-bold leading-tight tracking-normal"
                  >
                    Tên Không gian làm việc
                  </label>
                  <input
                    id="name"
                    className="mb-5 mt-2 text-gray-600  dark:text-black dark:placeholder-gray-600 dark:border-gray-700 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    name="name"
                    placeholder="Công ty của Taco"
                    onChange={(e) => {
                      setNewBroad({ ...newBroad, name: e.target.value });
                    }}
                    required
                  />
                  <label
                    htmlFor="cvc"
                    className="text-gray-800 dark:text-black  text-sm font-bold leading-tight tracking-normal"
                  >
                    Mô tả Không gian làm việc
                  </label>
                  <div className="relative mb-5 mt-2">
                    <select
                      className="text-gray-600"
                      onChange={(e) => {
                        setNewBroad({ ...newBroad, des: e.target.value });
                      }}
                    >
                      <option value="">Chọn</option>
                      <option value="Doanh nghệp nhỏ">Doanh nghệp nhỏ</option>
                      <option value="Kỹ thuật-CNTT">Kỹ thuật-CNTT</option>
                      <option value="Giáo dục">Giáo dục</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-start w-full">
                    <button
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                      disabled={isCreateBroad}
                      onClick={handleClick}
                    >
                      Tạo
                    </button>
                    <button
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                      onClick={handleHiddenModals}
                    >
                      Hủy
                    </button>
                  </div>
                  <button
                    className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded "
                    onclick="modalHandler()"
                    aria-label="close modal"
                    role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-x"
                      onClick={handleHiddenModals}
                      width={20}
                      height={20}
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
                </div>
                <div className="w-6/12">
                  <img
                    className="w-full"
                    src="https://a.trellocdn.com/prgb/dist/images/organization/empty-board.d1f066971350650d3346.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ModalSpace;
