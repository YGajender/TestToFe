import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupModel:  false,
  loginModal: false,
  mobileLoginModal: false,
  mobileLoginOtpModal:false,
  forgotPasswordModal: false,
  resetPasswordModal: false,
  otpVerifyModal: false,
};

export const globalSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleSignupModal: (state, action) => {
      state.signupModel = action.payload;
    },
    handleLoginModal: (state, action) => {
      state.loginModal = action.payload;
    },
    handleMobileLoginModal: (state, action) => {
      state.mobileLoginModal = action.payload;
    },
    handleEmailLoginOtpModal: (state, action) => {
      state.mobileLoginOtpModal = action.payload;
    },
    handleForgotModal: (state, action) => {
      state.forgotPasswordModal = action.payload;
    },
     handleResetPasswordModal: (state, action) => {
      state.resetPasswordModal = action.payload;
    },
    handleMobileOtpVerifyModal: (state, action) => {
      state.otpVerifyModal = action.payload;
    },
  },
});

export const {
  handleSignupModal,
  handleLoginModal,
  handleMobileLoginModal,
  handleEmailLoginOtpModal,
  handleForgotModal,
  handleResetPasswordModal,
  handleMobileOtpVerifyModal,
} = globalSlice.actions;

export default globalSlice.reducer;
