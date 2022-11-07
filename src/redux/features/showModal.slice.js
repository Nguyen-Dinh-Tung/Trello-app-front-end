import {createSlice} from "@reduxjs/toolkit";

const showModalSlice = createSlice({
  name: "isShowModal",
  initialState: {
    isShowModal: "none",
    isShowMenudivider: "none",
  },
  reducers: {
    setShowModal: (state, actions) => {
      state.isShowModal = actions.payload;
    },
    setShowMenuDivider: (state, actions) => {
      state.isShowMenudivider = actions.payload;
    },
  },
});
export const {setShowModal, setShowMenuDivider} = showModalSlice.actions;
export default showModalSlice.reducer;
