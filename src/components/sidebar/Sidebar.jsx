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
          <span className="font-bold">Dự án...</span>
          
          <div className=" ml-40  flex flex-row gap-3 mb-6">
            
            <div className="flex hover:bg-slate-300 bg-slate-200 p-1 px-2 rounded cursor-pointer">
              <a>
                <span> <i class="fa-brands fa-trello"></i> </span>
                <span> Bảng </span>
              </a>
            </div>
            
            <div className="flex hover:bg-slate-300 bg-slate-200 p-1 px-2 rounded cursor-pointer ">
              <a>
                <span> <i class="fa-sharp fa-solid fa-grip"></i> </span>
                <span> Dạng xem </span>
              </a>
            </div>

            <div className="flex hover:bg-slate-300 bg-slate-200 p-1 px-2 rounded cursor-pointer">
               <a>
                <span> <i class="fa-regular fa-user"></i> </span>
                <span> Thành viên (10) </span>
              </a>
            </div>

          </div>
          
        </div>
        <div className=" ">
          <div className="  grid grid-cols-4 gap-4">
            {columnsOrder ? (
              columnsOrder.map((broad) => {
                return <MediaCard broad={broad} />;
              })
            ) : (
              <h2>Hiện chưa có dữ liệu</h2>
            )}
          </div>
        </div>

        {/* <Content/> */}
      </div>
    </div>
  );
}
