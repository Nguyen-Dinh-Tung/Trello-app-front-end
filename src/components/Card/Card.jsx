import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function MediaCard(props) {
  const broad = props.broad;
  const navigate = useNavigate();
  const handleCLick = () => {
    // navigate("/broad", { state: { broad: broad } });
  };
  return (
    <div onClick={handleCLick} className="">
      <div
      id="hover"
        className="block text-gray-900 font-bold text-2xl
         p-2 cursor-pointer text-left max-w-sm rounded-lg border border-gray-200 shadow-md hover:ring-2 hover:text-black "
        style={{
          height: 130 + "px",
          width: 250 + "px",
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2013/05/11/20/44/spring-flowers-110671_960_720.jpg)",
        }}
      >
        <div>{broad ? broad.title : "helo"}</div>
       
      </div>
    </div>
  );
}
