import { createSlice } from "@reduxjs/toolkit";

const showModalSlice = createSlice({
  name: "isShowModal",
  initialState: {
    isShowModal: "none",
    isShowMenudivider: "none",
    isShowEditTitleColumn: false,
    isShowModalItem: false,
    isShowWorkSpace: [],
    flag: "",
    isIdWorkSpace: "",
    modeBoard: "",
  },
  reducers: {
    setModeBoard: (state, actions) => {
      state.modeBoard = actions.payload;
    },
    setIdWorkSpace: (state, actions) => {
      state.isIdWorkSpace = actions.payload;
    },
    setFlag: (state, actions) => {
      state.flag = actions.payload;
    },

    setShowWorkSpace: (state, actions) => {
      state.isShowWorkSpace = actions.payload;
    },
    setShowModal: (state, actions) => {
      state.isShowModal = actions.payload;
    },
    setShowMenuDivider: (state, actions) => {
      state.isShowMenudivider = actions.payload;
    },
    setShowModalEditTitleColumn: (state, actions) => {
      state.isShowEditTitleColumn = actions.payload;
    },
    setShowModalItem: (state, action) => {
      state.isShowModalItem = action.payload;
    },
  },
});
export const {
  setShowModal,
  setShowMenuDivider,
  setShowModalEditTitleColumn,
  setShowModalItem,
  setShowWorkSpace,
  setFlag,
  setIdWorkSpace,
  setModeBoard,
} = showModalSlice.actions;
export default showModalSlice.reducer;
