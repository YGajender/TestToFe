import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicDetails : null,
  neetDetails : null,
};

export const studentDeatilsSlice = createSlice({
  name: "studentDetails",
  initialState,
  reducers: {
    handleSignupModal: (state, action) => {
      state.signupModel = action.payload;
    }
  },
});

export const {
  handleSignupModal,
} = studentDeatilsSlice.actions;

export default studentDeatilsSlice.reducer;
