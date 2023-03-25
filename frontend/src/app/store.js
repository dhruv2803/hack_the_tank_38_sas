import { configureStore } from '@reduxjs/toolkit'
import clientStoreReducer from "../store/clientStore"
import franchiseStoreReducer from "../store/franchiseStore"
import userStoreReducer from "../store/userStore"

export default configureStore({
  reducer: {
    clientStore: clientStoreReducer,
    franchiseStore: franchiseStoreReducer,
    userStore: userStoreReducer
  },
})
