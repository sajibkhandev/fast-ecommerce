import { configureStore } from '@reduxjs/toolkit'
import  counterSlice from './slices/counterSlice'
import  addtocartSlice from './slices/addtocartSlice'
import  breadcrumbSlice from './slices/breadcrumbSlice'

export default configureStore({
  reducer: {
    count:counterSlice,
    cart:addtocartSlice,
    breadcrumb:breadcrumbSlice
  },
})