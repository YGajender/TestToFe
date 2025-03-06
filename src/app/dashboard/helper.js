import cookie from "nookies";

export const fieldValidation = {
  required: {
    value: true,
    message: "This field is required.",
  },
};

export const phoneValidation = {
  required: {
    value: true,
    message: "Contact Number is required.",
  },
  pattern: {
    value: /^\d{10}$/,
    message: "Contact must be exactly 10 digits",
  },
};

export const emailValidation = {
  required: {
    value: true,
    message: "Email is required.",
  },
  pattern: {
    value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Invalid email",
  }

};

export const passwordValidationRequired = {
  required: {
    value: true,
    message: "This field is required.",
  },
  pattern: {
    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
    message: "Password must be of 8 characters long with atleast one uppercase, one lowercase and one number.",
  }
};

export const passwordValidation = {
  minLength: {
    value: 4,
    message: "Confirm new password must be of 8 characters long with atleast one uppercase, one lowercase and one number.",
  },
};

export const getToken = () => cookie.get().token;


export const registerHandler = async (
  data,
  dispatch,
  registerJudoData,
  reset
) => {
  let initialField = {
    name: "",
    surname: "",
    email: "",
    password: "",
    confirm_password: "",
    date_of_birth: "",
    // plan: "",
  };
  try {
    const response = await registerJudoData(data).unwrap();
    if (response.status === "SUCCESS") {
      const { uuid_string, ...rest } = response?.data?.user;
      successMsg(
        response.message ? response.message : "User registration successfully"
      );
      dispatch(
        login({
          userData: rest,
          uuid_string: uuid_string,
        })
      );
      reset(initialField);
      dispatch(handleRegisterVerifyModal(true));
    } else {
      errorMsg(response.message);
    }
  } catch (err) {
    const error = err.response ? err.response.message : err.message;
    errorMsg(error);
    console.error("Error adding data:", err);
  }
};