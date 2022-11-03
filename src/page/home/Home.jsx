import React, { useEffect, useState } from "react";
import { getData } from "../../services/dataset";

export const Home = () => {
  const [databaclk, setDatabaclk] = useState();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData()
      .then((res) => {
        // console.log(res);
        setloading(false);
        setDatabaclk(res.data.status);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div>Home</div>
      {loading ? (
        <div class="grid min-h-screen place-content-center">
          <div class="flex items-center gap-2 text-gray-500">
            <span class="h-6 w-6 block rounded-full border-4 border-t-blue-300 animate-spin"></span>
            loading...
          </div>
        </div>
      ) : null}
      <div>{databaclk}</div>
    </>
  );
};
