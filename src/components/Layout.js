"use client"
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import MobileLogin from "./MobileLogin";
import VerifyOtp from "./VerifyOtp";
import ForgotPassword from "./Forgot";
import ResetPassword from "./ResetPassword";
import MobileOtpVerify from "./OtpMobile";

const Layout = ({ children }) => {
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
            <Header />
            {children}
            <Footer />
            {signupModel ? <SignUp /> : null}
            {loginModal ? <SignIn /> : null}
            {mobileLoginModal ? <MobileLogin /> : null}
            {mobileLoginOtpModal ? <VerifyOtp /> : null}
            {forgotPasswordModal ? <ForgotPassword /> : null}
            {resetPasswordModal ? <ResetPassword /> : null}
            {otpVerifyModal ? <MobileOtpVerify /> : null}
        </>
    );
};

export default Layout;
