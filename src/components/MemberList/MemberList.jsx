import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import getDatAWorkSpace from "../../api/GetDataAWorkSpace";
import { useState } from "react";
import Member from "../../api/DataMember";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FolderIcon from "@mui/icons-material/Folder";
import CircularProgress from "@mui/material/CircularProgress";

export default function MemberList() {
  const id = useParams().id;
  const [data, setData] = useState();

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }

  useEffect(() => {
    getDatAWorkSpace(id)
      .then((res) => setData(res.data.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="h-screen bg-white ">
      <div className="mx-20 flex flex-col">
        <div className=" h-36 flex flex-row bg-white ">
          <div className="w-1/2 p-2 my-auto flex flex-row ">
            <div className="w-1/3"></div>
            <div className="w-2/3 flex gap-4">
              <div>
                {data ? (
                  <Avatar
                  style={{ height: 65 + "px", width: 65 + "px",fontSize:35+'px'}}
                    variant="rounded"

                    {...stringAvatar(data.name)}
                  />
                ) : (
                  <CircularProgress color="inherit" />
                )}
              </div>
              <div className="my-auto">
                <div className="text-2xl font-bold">{data && data.name}</div>
                <div className="text-xs">Chế độ</div>
              </div>
            </div>
          </div>

          <div className="w-1/2 my-auto">
            <button className="bg-sky-500 hover:bg-sky-400 ml-64 p-2 flex gap-2 rounded text-white">
              <PersonAddAlt1Icon />
              Mời các thành viên vào không gian làm việc
            </button>
          </div>
        </div>
        <hr className="font-black "></hr>
        <div className="w-full flex flex-col mt-4 ">
          <div className="w-1/6 text-center mb-2 font-bold text-3xl">
            Thành viên
          </div>
          <div className="w-full flex">
            <div className=" w-1/6 text-left text-xs ml-2 text-gray-400 font-bold">
              Thành viên của các bảng không gian làm việc
            </div>
            <div className="ml-10 w-full">
              <div className=" text-2xl mb-2">
                Các thành viên Không gian làm việc (14)
              </div>
              <div className="text-xs">
                Các thành viên trong Không gian làm việc có thể xem và tham gia
                tất cả các bảng Không gian làm việc hiển thị và tạo ra các bảng
                mới trong Không gian làm việc.
              </div>
              <hr className="my-6"></hr>
              <div>
                <TextField size="small" label={"Lọc theo  tên"} />
              </div>
              <div>
                <div className="text-xs w-full">
                  <hr className="my-6"></hr>
                  <div className="flex w-full">
                    <div className="w-7/12 my-auto">disablePadding</div>
                    <div className="w-2/12 my-auto">disablePadding</div>
                    <div className="w-3/12 my-auto flex gap-4 text-center w-full">
                      <Button variant="outlined" disabled>
                        Quản trị viên
                      </Button>
                      <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Xóa
                      </Button>
                    </div>
                  </div>
                  <hr className="my-4"></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
