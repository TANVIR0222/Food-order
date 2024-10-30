import { setupListeners } from '@reduxjs/toolkit/query'

import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './features/auth/authAp'
import  authReducer  from './features/auth/authSlice'
import { productApi } from './features/product/productApi'
import  productReducer  from './features/product/productSlice'
import  cartReducer  from './features/cart/cartSlice'
import { cartApi } from './features/cart/cartApi'
import { favouriteApi } from './features/favourite/favouriteApi'
import { reviewApi } from './features/revicw/reviewApi'
import { paymentApi } from './features/payment/paymentApi'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product:productReducer,
    cart:cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [favouriteApi.reducerPath]: favouriteApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,productApi.middleware, cartApi.middleware,favouriteApi.middleware ,reviewApi.middleware ,paymentApi.middleware),
})

setupListeners(store.dispatch)


