"use client";

import { useSelector } from "react-redux";
import AuthRedirect from "../components/AuthRedirect";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import MobileLogin from "../components/MobileLogin";
import VerifyOtp from "../components/VerifyOtp";
import ForgotPassword from "../components/Forgot";
import ResetPassword from "../components/ResetPassword";
import MobileOtpVerify from "../components/OtpMobile";
import { Providers } from "../app/provider";
import { ToastContainer } from "react-toastify";
import BootstrapClient from "../components/BootstrapClient";

export default function ClientRoot({ children, token }) {
    const {
        signupModel,
        loginModal,
        mobileLoginModal,
        mobileLoginOtpModal,
        forgotPasswordModal,
        resetPasswordModal,
        otpVerifyModal,
    } = useSelector((state) => state.global);

    return (
        <>
            <AuthRedirect token={token} />
            {children}
            {signupModel && <SignUp />}
            {loginModal && <SignIn />}
            {mobileLoginModal && <MobileLogin />}
            {mobileLoginOtpModal && <VerifyOtp />}
            {forgotPasswordModal && <ForgotPassword />}
            {resetPasswordModal && <ResetPassword />}
            {otpVerifyModal && <MobileOtpVerify />}
            <BootstrapClient />
            <ToastContainer autoClose={3000} />
        </>
    );
}
