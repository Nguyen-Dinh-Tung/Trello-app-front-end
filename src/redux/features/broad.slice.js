import {createSlice} from "@reduxjs/toolkit";

const initial = {
  columns: {
    "column-0": {
      id: "column-0",
      title: "First column",
      items: [
        {
          id: "1",
          text: "Tung",
        },
        {
          id: "2",
          text: "Tung",
        },
      ],
    },
  },
  columnOrder: ["column-0"],
};

const broadSlice = createSlice({
  name: "broad",
  initialState: {
    data: initial,
  },
  reducers: {
    setDataBroad: (state, actions) => {
      state.data = actions.payload;
    },
    setItemBroad: (state, action) => {
      // console.log(action.payload);
      state.data = action.payload;
      // console.log();
    },
  },
});
export const {setDataBroad, setItemBroad} = broadSlice.actions;
export default broadSlice.reducer;
