// import { createSlice } from "@reduxjs/toolkit";
// import { destroyCookie, setCookie } from "nookies";


// const siteSlice = createSlice({
//   name: "auth",
//   initialState: {
//     loggedIn: null,
//     token: null,
//     userData: {},
//     loading: false,
//     // uuid_string: null,
//     // formatSetting: {},
//   },

//   reducers: {
//     logout: (state, action) => {
//       localStorage.removeItem("token");
//       destroyCookie(null, "token");
//       destroyCookie(null, "userData");
//       state.loggedIn = false;
//       state.token = null;
//       state.userData = {};
//     },
//     login: (state, action) => {
//       let { token, userData } = action.payload;
//       // localStorage.setItem("token", JSON.stringify(token));
//       token &&
//         setCookie(null, "token", token, {
//           maxAge: 30 * 24 * 60 * 60 * 100,
//         });
//       setCookie(null, "userData",
//         JSON.stringify(userData), {
//         maxAge: 30 * 24 * 60 * 60 * 100,
//       });
//       state.token = token;
//       state.loggedIn = token ? true : false;
//       state.userData = userData;
//       // state.uuid_string = uuid_string;
//     },
//     update: (state, action) => {
//       let { userData } = action.payload;
//       setCookie(null, "userData", JSON.stringify(userData), {
//         maxAge: 30 * 24 * 60 * 60 * 100,
//       });
//       state.userData = userData;
//     },
//     updateLogin: (state, action) => {
//       state.loggedIn = action.payload.loggedIn;
//       state.token = action.payload.token;
//     },
//     updateUserData: (state, action) => {
//       state.userData = action.payload;
//     },

//     updateLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//     // updateUuidString: (state, action) => {
//     //   state.uuid_string = action.payload;
//     // },
//     // updateFormatSetting: (state, action) => {
//     //   state.formatSetting = action.payload;
//     // },
//   },
// });

// export const {
//   logout,
//   login,
//   update,
//   updateLogin,
//   updateUserData,
//   updateLoading,
//   // updateUuidString,
//   // updateFormatSetting,
// } = siteSlice.actions;
// export default siteSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";
import { destroyCookie, setCookie } from "nookies";

const siteSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: null,
    token: null,
    userData: {},
    loading: false,
  },

  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      destroyCookie(null, "token");
      destroyCookie(null, "userData");

      // Reset state
      state.loggedIn = false;
      state.token = null;
      state.userData = {};

    },

    login: (state, action) => {
      const { token, userData } = action.payload;

      // Set token and userData in cookies
      if (token) {
        setCookie(null, "token", token, {
          maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
          path: "/",
        });
      }

      if (userData) {
        setCookie(null, "userData", JSON.stringify(userData), {
          maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
          path: "/",
        });
      }

      // Update state
      state.token = token;
      state.loggedIn = !!token; // Set loggedIn to true if token exists
      state.userData = userData || {};
    },

    update: (state, action) => {
      const { userData } = action.payload;

      // Update userData in cookies
      setCookie(null, "userData", JSON.stringify(userData), {
        maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
        path: "/",
      });

      // Update state
      state.userData = userData;
    },

    updateLogin: (state, action) => {
      // Update login state
      const { loggedIn, token } = action.payload;
      state.loggedIn = loggedIn;
      state.token = token;
    },

    updateUserData: (state, action) => {
      // Update user data
      state.userData = action.payload;
    },

    updateLoading: (state, action) => {
      // Update loading state
      state.loading = action.payload;
    },
  },
});

export const {
  logout,
  login,
  update,
  updateLogin,
  updateUserData,
  updateLoading,
} = siteSlice.actions;

export default siteSlice.reducer;

