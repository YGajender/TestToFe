// "use client";
// import { useEffect, useState } from "react";
// import { Button, Modal } from "react-bootstrap";
// import OtpInput from "react-otp-input";
// import { useDispatch } from "react-redux";

// import { requestHandler } from "../services";
// import { errorMsg, successMsg } from "../toast";
// import {
//   handleEmailLoginOtpModal,
//   handleResetPasswordModal,
// } from "../store/services/global";


// const VerifyOtp = () => {
//   const dispatch = useDispatch();
//   const [otp, setOtp] = useState();
//   const [email, setEmail] = useState("");
//   const [timeLeft, setTimeLeft] = useState(59);

//   useEffect(() => {
//     // if (typeof window !== "undefined") {
//     const value = localStorage.getItem("email");
//     if (value) {
//       setEmail(value);
//     }
//     // }
//   }, []);

//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setInterval(() => {
//         setTimeLeft((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [timeLeft]);

//   const onSubmit = async () => {
//     if (!otp && !email) {
//       return;
//     }
//     const sendData = {
//       otp,
//       email,
//     };
//     try {
//       const response = await requestHandler(
//         "POST",
//         `/auth/student/email-verify-otp`,
//         sendData
//       );
//       if (response.status) {
//         successMsg(
//           response.message ? response.message : "Student loggedIn successfully"
//         );
//         dispatch(handleResetPasswordModal(true));
//         dispatch(handleEmailLoginOtpModal(false));
//       } else {
//         errorMsg(response.message);
//       }
//     } catch (err) {
//       console.log("Error adding data:", err);
//     }
//   };

//   const handleResendOtp = async () => {
//     setTimeLeft(59);
//     try {
//       const response = await requestHandler("POST", `/auth/student/send-otp`, {
//         email,
//       });
//       if (response.status === "Success") {
//         successMsg(
//           response.message ? response.message : "Student loggedIn successfully"
//         );
//       } else {
//         errorMsg(response.message);
//       }
//     } catch (err) {
//       console.log("Error adding data:", err);
//     }
//   };

//   return (
//     <>
//       <Modal show={true} className="modal fade show">
//         <div className="modal-header">
//           <button
//             type="button"
//             className="close"
//             onClick={() => dispatch(handleEmailLoginOtpModal(false))}
//             aria-label="Close"
//           >
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div className="modal-body">
//           <h3> Verify OTP</h3>

//           <form
//           // onSubmit={handleSubmit}
//           >
//             <div className="inner-item">
//               <label htmlFor="email">E-mail</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="form-control"
//                 placeholder="example@gmail.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="inner-item">
//               <label htmlFor="password">Code</label>
//               <input
//                 type="text"
//                 name="password"
//                 className="form-control"
//                 placeholder="...."
//                 value={formData.password}
//                 onChange={handleChange}
//                 inputMode="numeric"
//                 pattern="[0-9]*"
//                 maxLength={6}
//                 required
//               />
//             </div>

//             {/* <div className="checkbox-with-forget">
//                   <div className="form-check">
//                     <input
//                       type="checkbox"
//                       name="checked"
//                       className="form-check-input"
//                       id="exampleCheck1"
//                       checked={formData.checked}
//                       onChange={handleChange}
//                     />
//                     <label className="form-check-label" htmlFor="exampleCheck1">
//                       Check me out
//                     </label>
//                   </div>
//                   <a href="#">Forgot Password?</a>
//                 </div> */}

//             <button type="submit" className="button">
//               Send Code
//             </button>

//             <div className="divider">
//               <p>OR</p>
//             </div>

//             <div className="login-with">
//               {/* <Image
//                     src={google}
//                     alt="Google"
//                     className="img-fluid"
//                     width={18}
//                     height={18}
//                   /> */}
//               <p>Back To Login</p>
//             </div>

//             {/* <div className="login-with">
//                   <Image
//                     src={phone}
//                     alt="Phone"
//                     className="img-fluid"
//                     width={14}
//                     height={14}
//                   />
//                   <p>Continue with Mobile Number</p>
//                 </div> */}
//           </form>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default VerifyOtp;

"use client";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";

import { requestHandler } from "../services";
import { errorMsg, successMsg } from "../toast";
import {
  handleEmailLoginOtpModal,
  handleMobileOtpVerifyModal,
  handleResetPasswordModal,
} from "../store/services/global";


const VerifyOtp = () => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState();
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState(59);

  const { mobileLoginOtpModal } = useSelector((state) => state.global);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    const value = localStorage.getItem("email");
    if (value) {
      setEmail(value);
    }
    // }
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const onSubmit = async () => {
    if (!otp && !email) {
      return;
    }
    const sendData = {
      otp,
      email,
    };
    try {
      const response = await requestHandler(
        "POST",
        `/auth/student/email-verify-otp`,
        sendData
      );
      if (response.status === true) {
        successMsg(
          response.message ? response.message : "Student loggedIn successfully"
        );
        dispatch(handleResetPasswordModal(true));
        dispatch(handleEmailLoginOtpModal(false));
      } else {
        errorMsg(response.message);
      }
    } catch (err) {
      console.log("Error adding data:", err);
    }
  };

  const handleResendOtp = async () => {
    setTimeLeft(59);
    try {
      const response = await requestHandler("POST", `/auth/student/send-otp`, {
        email,
      });
      if (response.status === true) {
        successMsg(
          response.message ? response.message : "Student loggedIn successfully"
        );
      } else {
        errorMsg(response.message);
      }
    } catch (err) {
      console.log("Error adding data:", err);
    }
  };

  return (
    <>
      <Modal show={mobileLoginOtpModal} className="modal fade show">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            onClick={() => dispatch(handleEmailLoginOtpModal(false))}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <h3> Verify OTP </h3>

          <p
            style={{
              color: "#666666",
              marginTop: "20px",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            Code has been sent to{" "}
            <span style={{ color: "#20b486" }}>{email}</span>
          </p>
          {/* <p>
                Don’t have an account?{" "}
                <a href="#" onClick={opensignupModal}>
                  Create now
                </a>
              </p> */}

          {/* <p>
                Please Enter the Email address you'd like your password reset
                information sent to
              </p> */}

          <form >
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                Code
              </label>
              <OtpInput
                value={otp}
                onChange={setOtp}
                isInputNum={true}
                numInputs={6}
                id="otp"
                inputStyle="otp-input"
                renderInput={(props) => <input {...props} />}
                style={{ justifyContent: "space-between" }}
              />
            </div>
            <p style={{ color: "#666666", marginTop: "20px" }}>
              Didn’t get OTP Code ? {/* {timeLeft } */}
              {timeLeft !== 0 && (
                <span style={{ color: "#666666" }}>
                  {Math.floor(timeLeft / 60)}:
                  {(timeLeft % 60).toString().padStart(2, "0")}
                </span>
              )}
              {timeLeft === 0 && (
                <span
                  className="headlineSignIn"
                  onClick={handleResendOtp}
                >
                  {" "}
                  Resend Code
                </span>
              )}
            </p>
            <div className="sendOtp">
              <Button
                variant="outline-success"
                className="submit-button"
                type="button"
                onClick={() => onSubmit()}
                disabled={timeLeft == 0 ? true : false}
              >
                <p>Verify Code</p>
              </Button>
            </div>
          </form>
        </div>
      </Modal >
    </>
  );
}

export default VerifyOtp;

