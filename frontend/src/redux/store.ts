import { configureStore } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: "",
    email: ""
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    removeToken: (state) => {
      state.token = ""
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    removeEmail: (state) => {
      state.email = ""
    }
  }
})

export const { setToken, removeToken, setEmail, removeEmail } = tokenSlice.actions

export default configureStore({
  reducer: tokenSlice.reducer
})