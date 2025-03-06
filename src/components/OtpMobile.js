"use client";
import { useRouter } from "next/navigation";
import { requestHandler } from "../services";
import { handleMobileOtpVerifyModal } from "../store/services/global";
import { errorMsg, successMsg } from "../toast";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/services/authSlice";

const MobileOtpVerify = () => {
  const dispatch = useDispatch();


  const { otpVerifyModal } = useSelector((state) => state.global)

  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [timeLeft, setTimeLeft] = useState(59);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    const value = localStorage.getItem("mobileNumber");
    if (value) {
      setMobileNumber(value);
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
    if (!otp || otp.length !== 6) {
      errorMsg("Please Enter OTP");
      return;
    }
    const sendData = {
      otp,
      mobileNumber,
    };
    try {
      const response = await requestHandler(
        "POST",
        `/auth/student/mobile-verify-otp`,
        sendData
      );
      if (response.status === true) {
        successMsg(
          response.message ? response.message : "Student loggedIn successfully"
        );
        dispatch(
          login({
            userData: response?.student,
            token: response?.token,
          })
        );
        setOtp("");
        setMobileNumber("");
        dispatch(handleMobileOtpVerifyModal(false));
        router.push("/dashboard/basic-details");
      } else {
        errorMsg(response.message);
      }
    } catch (err) {
      console.log("Error adding data:", err);
    }
  };

  const handleResendOtp = async () => {
    setTimeLeft(59);
    setOtp("")
    try {
      const response = await requestHandler("POST", `/auth/student/resend-otp`, {
        mobileNumber,
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


  // handleMobileOtpVerifyModal
  // otpVerifyModal

  return (
    <>
      <Modal show={otpVerifyModal} className="modal fade show">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            onClick={() => dispatch(handleMobileOtpVerifyModal(false))}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">

          <h3 >
            Verify OTP
          </h3>
          <p
            style={{
              color: "#666666",
              marginTop: "20px",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            Code has been sent to{" "}
            <span style={{ color: "#20b486" }}>{mobileNumber}</span>
          </p>
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
};

export default MobileOtpVerify;
