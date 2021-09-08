import { isEmpty } from "lodash";
import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalChosen: "",
    // store what could be used on the opened modal, i.e. battleId for submitting ob entry
    modalData: {
      battleData: {},
    },
    popup: {
      open: false,
      header: "",
      content: "",
    },
    preloader: false,
  },
  reducers: {
    chooseModal: (state, action) => {
      state.modalChosen = action.payload.modalChosen;
      if (!isEmpty(action.payload.battleData)) {
        state.modalData.battleData = action.payload.battleData;
      }
    },
    setPopup: (state, action) => {
      state.popup = action.payload;
    },
    setPreloader: (state, action) => {
      state.preloader = action.payload;
    },
  },
});

export const { chooseModal, setPopup, setPreloader } = modalSlice.actions;

export default modalSlice.reducer;
