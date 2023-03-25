import { createSlice } from '@reduxjs/toolkit'

export const clientStore = createSlice({
  name: 'client',
  initialState: {
    cilentData : null
  },
  reducers: {
    setClientData: (state, action) => {
      state.cilentData = action.payload;
      console.log(state.cilentData);
    }

  },
})

// Action creators are generated for each case reducer function
export const { setClientData } = clientStore.actions

export default clientStore.reducer