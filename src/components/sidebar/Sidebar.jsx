import { useState } from "react";
import MediaCard from "../Card/Card";
import { useSelector } from "react-redux";
import Project from "./Project";
export default function Sidebar(props) {
  console.log("🚀 ~ file: Sidebar.jsx ~ line 6 ~ Sidebar ~ props", props);
  const dataWorkSpace = props.WorkSpace;
  const columnsOrder = props.columnsOrder;
  const [onCreate, setOnCreate] = useState(true);
  const data = useSelector((state) => state.broad);
  return (
    <div className="flex flex-cols gap-12 justify-center mt-8 ">
      <Project />

      {/* oulet */}

      <div className="pl-5  ">
        <div className="text-slate-400 text-xl pb-5 ">
          Các không gian làm việc của bạn
        </div>
        <div className="flex flex-col gap-5">
          {dataWorkSpace.map((item, index) => (
            <div>
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
                <span className="font-bold text-xl">{item.name}</span>
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

                    <a>Thành viên()</a>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="flex  flex-row gap-4">
                  {columnsOrder ? (
                    columnsOrder.map((broad) => {
                      if (item.id_listIdBroad.includes(broad._id)) {
                        return (
                          <MediaCard broad={broad} idWorkSpace={item._id} />
                        );
                      }
                    })
                  ) : (
                    <h2>Hiện chưa có dữ liệu</h2>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <Content/> */}
      </div>
    </div>
  );
}