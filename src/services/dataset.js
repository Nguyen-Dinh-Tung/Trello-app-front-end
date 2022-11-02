import Http from "../http/http";

export const getData = () => {
  const url = "/user/test";
  return Http.post(url, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
