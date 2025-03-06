import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import globalSlice from './services/global'
import authReducer from "./services/authSlice"
import studentdeatilsReducer from "./services/studentDeatils"

export const store = configureStore({
  reducer: {
    global: globalSlice,
    auth: authReducer,
    studentdeatils: studentdeatilsReducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(demoDataApi.middleware),
})

setupListeners(store.dispatch)