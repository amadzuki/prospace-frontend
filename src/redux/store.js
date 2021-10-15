import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { companyApi } from './services/company'

export const store = configureStore({
  reducer: { [companyApi.reducerPath]: companyApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(companyApi.middleware),
})

setupListeners(store.dispatch)
