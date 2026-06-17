import { configureStore } from '@reduxjs/toolkit'
import  counterSlice from './slices/counterSlice'

export default configureStore({
  reducer: {
    count:counterSlice
  },
})