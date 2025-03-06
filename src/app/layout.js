// "use Client"
// import { Geist, Geist_Mono } from "next/font/google"
// import "bootstrap/dist/css/bootstrap.min.css" // Bootstrap CSS
// import "../styles/css/globals.css"
// import BootstrapClient from "@/components/BootstrapClient"
// import { Providers } from "./provider";
// import { ToastContainer } from "react-toastify";
// import { cookies } from "next/headers";
// import AuthRedirect from "../components/AuthRedirect"

// import SignUp from "../components/SignUp";
// import SignIn from "../components/SignIn";
// import MobileLogin from "../components/MobileLogin";
// import VerifyOtp from "../components/VerifyOtp";
// import ForgotPassword from "../components/Forgot";
// import ResetPassword from "../components/ResetPassword";
// import MobileOtpVerify from "../components/OtpMobile";
// import { useSelector } from "react-redux";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"]
// })

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"]
// })



// export default function RootLayout({ children }) {

//   const token = cookies().get("token")?.value;

//   console.log("token>>>>>>>>>>>>>>>>>", token);
//   const {
//     signupModel,
//     loginModal,
//     mobileLoginModal,
//     mobileLoginOtpModal,
//     forgotPasswordModal,
//     resetPasswordModal,
//     otpVerifyModal,
//   } = useSelector((state) => state.global);

//   return (
//     <html lang="en">
//       <head>
//         <title>
//           Visuti Career
//         </title>
//       </head>
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         <Providers>
//           <AuthRedirect token={token} />
//           {children}
//         </Providers>
//         {signupModel ? <SignUp /> : null}
//         {loginModal ? <SignIn /> : null}
//         {mobileLoginModal ? <MobileLogin /> : null}
//         {mobileLoginOtpModal ? <VerifyOtp /> : null}
//         {forgotPasswordModal ? <ForgotPassword /> : null}
//         {resetPasswordModal ? <ResetPassword /> : null}
//         {otpVerifyModal ? <MobileOtpVerify /> : null}

//         <BootstrapClient />
//         <ToastContainer autoClose={3000} />
//       </body>
//     </html>
//   )
// }


import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "../styles/css/globals.css";
import BootstrapClient from "@/components/BootstrapClient";
import { Providers } from "./provider";
import { ToastContainer } from "react-toastify";
import AuthRedirect from "../components/AuthRedirect";
import ClientRoot from "../components/ClientRoot"; // New client wrapper
import { getToken } from "@/utils/getToken"; // Import token function

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const token = getToken(); // Fetch token in server component

  return (
    <html lang="en">
      <head>
        <title>Visuti Career</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <ClientRoot token={token}>{children}</ClientRoot>
        </Providers>
        {/* <ClientRoot token={token}>{children}</ClientRoot> */}
      </body>
    </html>
  );
}

