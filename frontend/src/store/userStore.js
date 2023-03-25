import { createSlice } from '@reduxjs/toolkit'

export const userStore = createSlice({
  name: 'user',
  initialState: {
    userData : null
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      console.log(state.userData);
    }

  },
})

// Action creators are generated for each case reducer function
export const { setUserData } = userStore.actions

export default userStore.reducer