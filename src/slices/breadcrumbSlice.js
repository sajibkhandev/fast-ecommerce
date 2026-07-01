import { createSlice } from '@reduxjs/toolkit'

export const breadcrumbSlice = createSlice({
  name: 'bread',
  initialState: {
    daybeforeyesterday: "",
    previousvalue: "",
    currentvalue:""
  },
  reducers: {
    activeuser: (state,action) => {
      state.daybeforeyesterday=state.previousvalue
      state.previousvalue=state.currentvalue
      state.currentvalue=action.payload
      
    },
    
   
  },
})

export const { activeuser } = breadcrumbSlice.actions

export default breadcrumbSlice.reducer