import { configureStore } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: ""
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    removeToken: (state) => {
      state.token = ""
    }
  }
})

export const { setToken, removeToken } = tokenSlice.actions

export default configureStore({
  reducer: tokenSlice.reducer
})