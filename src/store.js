import { configureStore } from '@reduxjs/toolkit'
import  counterSlice from './slices/counterSlice'
import  addtocartSlice from './slices/addtocartSlice'

export default configureStore({
  reducer: {
    count:counterSlice,
    cart:addtocartSlice
  },
})