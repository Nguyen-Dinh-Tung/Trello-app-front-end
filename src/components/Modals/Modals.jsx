import React, { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import createBroad from "../../api/CreateBroad.api";
import { useSelector } from "react-redux";
import { setShowModal } from "../../redux/features/showModal.slice";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";

function Modals(props) {
  const isShowModal = useSelector((state) => state.isShowModal.isShowModal);
  const dispath = useDispatch();
  let token = localStorage.getItem("token");
  let idUser = jwtDecode(token).id;
  const [newBroad, setNewBroad] = useState({
    title: "",
    mode: "",
    idUser: idUser,
  });
  const [isCreateBroad, setCreateBroad] = useState(true);
  const handleHiddenModals = () => {
    dispath(setShowModal("none"));
  };
  useEffect(() => {
    if (newBroad.title && newBroad.mode) {
      setCreateBroad(false);
    } else {
      setCreateBroad(true);
    }
  }, [newBroad]);
  const handleClick = () => {
    if (isCreateBroad === false) {
      createBroad(newBroad)
        .then((res) => {
          // console.log(res);
          dispath(setShowModal("none"));
        })
        .catch((e) => console.log(e.message));
    }
  };
  return (
    <>
      <div className="modals" style={{ display: isShowModal }}>
        <div
          className="py-12 backdrop-blur-sm  transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
          id="modal"
        >
          <div role="alert" className="container">
            <div className="relative flex gap-10 py-8 px-10 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
              <div className="w-6/12">
                <h1 className="text-gray-800 dark:text-white  font-lg font-bold tracking-normal leading-tight mb-4">
                  Thêm bảng mới
                </h1>
                <label
                  htmlFor="name"
                  className="text-gray-800 dark:text-white  text-sm font-bold leading-tight tracking-normal"
                >
                  Tiêu đề
                </label>

                <input
                  id="name"
                  className="mb-5 mt-2 text-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-200 dark:border-gray-700 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  name="title"
                  onChange={(e) => {
                    setNewBroad({
                      ...newBroad,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  placeholder="Tiêu đề của bạn"
                  required
                />
                <label
                  htmlFor="cvc"
                  className="text-gray-800 dark:text-white  text-sm font-bold leading-tight tracking-normal"
                >
                  Trạng thái
                </label>
                <div className="relative mb-5 mt-2">
                  <select
                    className="text-gray-600"
                    onChange={(e) => {
                      setNewBroad({ ...newBroad, mode: e.target.value });
                    }}
                  >
                    <option value="">Trạng thái</option>
                    <option value="private">Chỉ mình tôi</option>
                    <option value="group">Nhóm</option>
                    <option value="public">Công khai</option>
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
                  className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
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
              <div className="w-6/12" > <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhKPwtKWqf1gsmDU3gtl3S4oEi0CWdLj0iaKWbdc8FQwcd_NMvo7yBFZdJx4HI7uXCFIE&usqp=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" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modals;
