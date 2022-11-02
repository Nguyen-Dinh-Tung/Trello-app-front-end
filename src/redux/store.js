import {configureStore} from "@reduxjs/toolkit";
import isShowModalReducer from "../redux/features/showModal.slice";
export const store = configureStore({
  reducer: {
    isShowModal: isShowModalReducer,
  },
});
export default store;
