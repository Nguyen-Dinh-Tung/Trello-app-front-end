import React, { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import createBroad from "../../api/CreateBroad.api";
import { useSelector } from "react-redux";
import { setFlag, setShowModal } from "../../redux/features/showModal.slice";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import getBroad from "../../api/GetBroad";

function Modals(props) {
  const isShowModal = useSelector((state) => state.isShowModal.isShowModal);

  let [workspace, setWorkSpace] = useState([]);

  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  let idUser = jwtDecode(token).id;
  const [newBroad, setNewBroad] = useState({
    title: "",
    mode: "",
    idUser: idUser,
    workSpace: "",
  });
  const [isCreateBroad, setCreateBroad] = useState(true);

  const handleHiddenModals = () => {
    dispatch(setShowModal("none"));
  };
  useEffect(() => {
    getBroad(idUser)
      .then((res) => {
        console.log("🚀 ~ file: Home.jsx ~ line 24 ~ .then ~ res", res);
        setWorkSpace(res.data.listWorkSpace);
      })
      .catch((e) => console.log(e.message));
  }, []);

  useEffect(() => {
    if (newBroad.title && newBroad.mode && newBroad.workSpace) {
      setCreateBroad(false);
    } else {
      setCreateBroad(true);
    }
  }, [newBroad]);
  const handleClick = () => {
    if (isCreateBroad === false) {
      createBroad(newBroad)
        .then((res) => {
          console.log(res);
          dispatch(setShowModal("none"));
          dispatch(setFlag(res));
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
          <div
            role="alert"
            className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
          >
            <div className="relative py-8 px-5 md:px-10 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
<<<<<<< HEAD
              <h1 className="text-gray-800   font-lg font-bold tracking-normal leading-tight mb-4">
=======
              <h1 className="text-gray-800 dark:text-black text-3xl ml-1 font-lg font-bold tracking-normal leading-tight mb-4">
>>>>>>> 3d072386ab0997e3906e1ea87d8ce95899073b75
                Thêm bảng mới
              </h1>
              <label
                htmlFor="name"
                className="text-gray-800 dark:text-black text-xl ml-1 font-bold leading-tight tracking-normal"
              >
                Tiêu đề
              </label>

              <input
                id="name"
                className="mb-5 mt-2 text-gray-600 text-xl dark:text-black dark:placeholder-gray-400 dark:border-gray-700 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 border-gray-300 rounded border"
                name="title"
                onChange={(e) => {
                  setNewBroad({ ...newBroad, [e.target.name]: e.target.value });
                }}
                placeholder="Tiêu đề của bạn"
                required
              />
              <label
                htmlFor="cvc"
                className="text-gray-800 text-xl dark:text-black font-bold leading-tight tracking-normal"
              >
                Không gian làm việc
              </label>

              <div className="relative mb-5 mt-2 text-lg ">
                <select
                  className="text-gray-600 w-48"
                  onChange={(e) => {
                    setNewBroad({ ...newBroad, workSpace: e.target.value });
                  }}
                >
                  {workspace.map((item) => (
                    <option value={item._id}>{item.name}</option>
                  ))}
                </select>
              </div>
              <label
                htmlFor="cvc"
                className="text-gray-800 text-xl dark:text-black font-bold leading-tight tracking-normal"
              >
                Trạng thái
              </label>

              <div className="relative mb-5 mt-2">
                <select
                  className="text-gray-600 text-lg w-32"
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
              <div className="flex items-center justify-start w-full ">
                <button
                  className=" cursor:pointer focus:ring-2 bg-gradient-to-r text-xl from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 "
                  disabled={isCreateBroad}
                  onClick={handleClick}
                >
                  Tạo
                </button>
                <button
                  className="focus:outline-none bg-gradient-to-br cursor:pointer text-xl from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150  ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-white"
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
          </div>
        </div>
      </div>
    </>
  );
}
export default Modals;
