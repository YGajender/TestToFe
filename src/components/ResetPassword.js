"use client"
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { requestHandler } from "../services";
import { handleResetPasswordModal } from "../store/services/global";
import { errorMsg, successMsg } from "../toast";
import {
    passwordValidation,
    passwordValidationRequired,
} from "../utils/helper";

let initialValue = {
    password: "",
    confirm_password: "",
};

const ResetPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        reset,
    } = useForm();

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");

    const { resetPasswordModal } = useSelector((state) => state.global);

    useEffect(() => {
        // if (typeof window !== "undefined") {
        const value = localStorage.getItem("email");
        if (value) {
            setEmail(value);
        }
        // }
    }, []);

    const confirmPasswordValidation = {
        ...passwordValidation,
        validate: (value) => {
            if (register("newPassword")) {
                const password = getValues("newPassword");
                if (password !== value) {
                    return "Passwords do not match";
                }
            }
            return undefined;
        },
    };

    const onSubmit = async (data) => {
        console.log("data>>>>>>>>>>>>>>", data);
        let sendData = {
            email,
            newPassword: data.newPassword,
        };
        try {
            const response = await requestHandler(
                "POST",
                `/auth/student/reset-password`,
                sendData
            );
            if (response.status === true) {
                successMsg(response.message);
                reset(initialValue);
                localStorage.setItem("email", "");
                localStorage.setItem("password", "");
                localStorage.setItem("isRememberMe", "");
                dispatch(handleResetPasswordModal(false));
            } else {
                errorMsg(response.message);
            }
        } catch (err) {
            // const error = err.response ? err.response.message : err.message;
            // errorMsg(error);
            console.log("Error adding data:", err);
        }
    };

    return (
        <>
            <Modal show={resetPasswordModal} className="modal fade show" >
                <div className="modal-header">
                    <button
                        type="button"
                        className="close"
                        onClick={() => dispatch(handleResetPasswordModal(false))}
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body">
                    <h3>Forgot Password</h3>

                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div className="mb-3">
                            <label htmlFor="passwordInput" className="form-label">
                                New Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="New Password"
                                {...register("newPassword", passwordValidation)}
                            />
                            {errors.newPassword?.type === "required" && (
                                <div>{errors.newPassword.message}</div>
                            )}
                            {errors.newPassword?.type === "pattern" && (
                                <div>{errors.newPassword.message}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="passwordInput" className="form-label">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                {...register(
                                    "confirmPassword",
                                    confirmPasswordValidation
                                )}
                            />
                            {errors?.confirmPassword && (
                                <div>{errors.confirmPassword.message}</div>
                            )}
                        </div>

                        <div className="ResetPasswordButton">
                            <Button
                                type="submit"
                                // variant="outline-success"
                                className="submit-button w-100"
                                onClick={handleSubmit(onSubmit)}
                            >
                                <p>Submit</p>
                            </Button>
                        </div>


                    </form>
                </div>
            </Modal>
        </>
    );
}

export default ResetPassword;
