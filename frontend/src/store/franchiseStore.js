import { createSlice } from '@reduxjs/toolkit'

export const franchiseStore = createSlice({
  name: 'franchise',
  initialState: {
    franchiseData : null
  },
  reducers: {
    setFranchiseData: (state, action) => {
      state.franchiseData = action.payload;
      console.log(state.franchiseData);
    }

  },
})

// Action creators are generated for each case reducer function
export const { setFranchiseData } = franchiseStore.actions

export default franchiseStore.reducer