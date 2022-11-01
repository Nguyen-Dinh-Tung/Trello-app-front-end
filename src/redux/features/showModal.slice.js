import {createSlice} from "@reduxjs/toolkit";

const showModalSlice = createSlice({
  name: "isShowModal",
  initialState: {
    isShowModal: "none",
  },
  reducers: {
    setShowModal: (state, actions) => {
      state.isShowModal = actions.payload;
    },
  },
});
export const {setShowModal} = showModalSlice.actions;
export default showModalSlice.reducer;
