import React, { useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import { storage } from "../UpLoadImg/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import UploadAvatar from "../../api/UpLoadAvatar";

export const Profile = () => {
  const [Upload, setUpload] = useState();
  const isLogin = localStorage.getItem("token");
  let decode;
  let str = "";
  if (isLogin) {
    decode = jwt_decode(isLogin);
    str = decode.name;
    str.split(" ");
  }
  const imageRef = useRef(null);

  function useDisplayImage() {
    const [result, setResult] = useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }
    const imageRef = ref(storage, `image/${Upload}`);
    uploadBytes(imageRef, Upload).then((snaphost) => {
      getDownloadURL(snaphost.ref).then((url) => {
        console.log(url);
        UploadAvatar({
          id: decode.id,
          image: url,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
      });
    });
    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();
  return (
    <div className="h-full">
      <div className="border-b-2 block md:flex">
        <div className="w-full md:w-2/5 p-4 sm:p-6  lg:p-8 bg-white shadow-md">
          <div className="w-full p-8 mx-2 flex justify-center">
            {result ? <img ref={imageRef} src={result} alt="" /> : null}
          </div>
          <div className=" ml-2 rounded-md border-gray-700 dark:text-gray-900">
            <input
              type="file"
              name="image"
              id="file-upload"
              className="hidden"
              accept="image/*"
              onChange={(event) => {
                setUpload(event.target.files[0]);
                uploader(event);
              }}
            />
            <label
              htmlFor="file-upload"
              className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
            >
              <p className="z-10 text-lg font-light text-center text-gray-700">
                Upload Avatar
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
          <div className="rounded  shadow p-6">
            <div className="pb-6">
              <label
                htmlFor="name"
                className="font-semibold text-gray-700 block pb-1"
              >
                Name
              </label>
              <div className="flex">
                <input
                  disabled
                  id="username"
                  value={decode.name}
                  className="border-1  rounded-r px-4 py-2 w-full"
                  type="text"
                  defaultValue="Jane Name"
                />
              </div>
            </div>
            <div className="pb-4">
              <label
                htmlFor="about"
                className="font-semibold text-gray-700 block pb-1"
              >
                Email
              </label>
              <input
                disabled
                value={decode.email}
                id="email"
                className="border-1  rounded-r px-4 py-2 w-full"
                type="email"
                defaultValue="example@example.com"
              />
              <span className="text-gray-600 pt-4 block opacity-70">
                Personal login information of your account
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
