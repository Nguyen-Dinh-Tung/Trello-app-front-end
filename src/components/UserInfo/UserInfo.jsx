import React from "react";

export default function UserInfo() {
  return (





    // <div className="w-2/3 max-[600px] mx-auto grid grid-cols-2 bg-blue-600 h-screen max">
    //   <div className=" bg-blue-300 h-screen">

    //     <div className="text-center m-10">
    //       <span className="text-3xl font-semibold">User Info</span>
    //     </div>
    //     <div className="w-full p-8 mx-2 flex justify-center">
    //       <img
    //         id="showImage"
    //         className="max-w-xs w-32 items-center border"
    //         src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
    //         alt=""
    //       />
    //     </div>

    //   </div>

    //   <div className=" bg-blue-500 h-screen">

    //   <div className="h-full p-8 bg-white lg:ml-4 ">
    //         <div className="rounded  shadow p-6">
              
    //           <div className="pb-6">
    //             <label
    //               htmlFor="username"
    //               className="font-semibold text-gray-700 block pb-1"
    //             >
    //               User Name
    //             </label>
    //             <div className="flex">
    //               <input
    //                 disabled
    //                 id="username"
    //                 className="border  rounded-r px-4 py-2 w-full"
    //                 type="text"
    //                 defaultValue="Iron Man"
    //               />
    //             </div>
    //           </div>

    //           <div className="pb-6">
    //             <label
    //               htmlFor="email"
    //               className="font-semibold text-gray-700 block pb-1"
    //             >
    //               Email Register
    //             </label>
    //             <div className="flex">
    //               <input
    //                 disabled
    //                 id="email"
    //                 className="border  rounded-r px-4 py-2 w-full"
    //                 type="email"
    //                 defaultValue="IronMan@gmail.com"
    //               />
    //             </div>
    //           </div>

    //           <div className="pb-6">
    //             <label
    //               htmlFor="tel"
    //               className="font-semibold text-gray-700 block pb-1"
    //             >
    //               Tel
    //             </label>
    //             <div className="flex">
    //               <input
    //                 disabled
    //                 id="tel"
    //                 className="border  rounded-r px-4 py-2 w-full"
    //                 type="text"
    //                 defaultValue="0909888666"
    //               />
    //             </div>
    //           </div>

    //           <div className="pb-6 text-center">

    //             <button className="border-2 rounded px-8 bg-gray-500 text-[white]"> Change Password  </button>
                
                
    //           </div>






              
    //           </div>
    //         </div>
    //       </div>

    //   </div>

  
    <div className="h-full md:w-2/3 md:mx-auto md:my-10 ">

        <div className=" block md:flex ">
        <div className="w-full md:w-2/5 p-8 bg-white border rounded shadow ">
            
            <div className="flex">
              <span className="text-xl font-semibold block mx-auto">User Info</span>
            </div>
    
            <div className="w-full p-8 flex justify-center object-cover">
              <img
                id="showImage"
                className="w-full h-full rounded-lg object-cover block mx-auto "
                src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                alt=""
              />
            </div>

            <div className="flex justify-between">
              <button className="block mx-auto px-2 border rounded border-slate-700">Update Avatar</button>
            </div>

          </div>

          <div className="w-full md:w-3/5 p-8 lg:ml-4 border rounded  ">
            <div className="border rounded p-6">

              <div className="pb-6">
                <label
                  htmlFor="name"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  User Name
                </label>
                <div className="flex">
                  <input
                    disabled
                    id="username"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    defaultValue="Jane Name"
                  />
                </div>
              </div>

              <div className="pb-6">
                <label
                  htmlFor="name"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Email
                </label>
                <div className="flex">
                  <input
                    disabled
                    id="username"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    defaultValue="Jane Name"
                  />
                </div>
              </div>

              <div className="flex justify-between">
              <button className="block mx-auto px-2 border rounded border-slate-700">Update PassWord</button>
            </div>

              </div>
            </div>
          </div>
        </div>




/* <div className="h-full">
  <div className="border-b-2 block md:flex">
    <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
      <div className="flex justify-between">
        <span className="text-xl font-semibold block">Admin Profile</span>
        <a href="#" className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
      </div>
      <span className="text-gray-600">This information is secret so be careful</span>
      <div className="w-full p-8 mx-2 flex justify-center">
        <img id="showImage" className="max-w-xs w-32 items-center border" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" alt="" />                          
      </div>
    </div>
    <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
      <div className="rounded  shadow p-6">
        <div className="pb-6">
          <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Name</label>
          <div className="flex">
            <input disabled id="username" className="border-1  rounded-r px-4 py-2 w-full" type="text" defaultValue="Jane Name" />
          </div>
        </div>
        <div className="pb-4">
          <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Email</label>
          <input disabled id="email" className="border-1  rounded-r px-4 py-2 w-full" type="email" defaultValue="example@example.com" />
          <span className="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
        </div>
      </div>
    </div>
  </div>
</div> */

  );
}
