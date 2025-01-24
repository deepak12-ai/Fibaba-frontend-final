import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice.js'
import authApi from './features/auth/authApi.js'
import authReducer from './features/auth/authSlice.js'
import productsApi from './features/products/productsApi.js'
import reviewsApi from './features/reviews/reviewsApi.js'
import statsApi from './features/stats/statsApi.js'
import orderApi from './features/orders/orderApi.js'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    devTools: true,
    [authApi.reducerPath] : authApi.reducer,
    auth : authReducer,
    [productsApi.reducerPath] : productsApi.reducer,
    [reviewsApi.reducerPath] : reviewsApi.reducer,
    [statsApi.reducerPath] : statsApi.reducer,
    [orderApi.reducerPath] : orderApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware, reviewsApi.middleware, statsApi.middleware, orderApi.middleware)
})