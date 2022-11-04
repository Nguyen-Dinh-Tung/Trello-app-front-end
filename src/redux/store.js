import {configureStore} from "@reduxjs/toolkit";
import isShowModalReducer from "../redux/features/showModal.slice";
import broadReducer from "../redux/features/broad.slice";
export const store = configureStore({
  reducer: {
    isShowModal: isShowModalReducer,
    broad: broadReducer,
  },
});
export default store;
