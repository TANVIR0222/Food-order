
import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './features/auth/authAp'

export const store = configureStore({
  reducer: {
    // productReducer: productSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

