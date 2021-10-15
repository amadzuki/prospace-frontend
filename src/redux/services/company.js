import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const companyApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getCompanies: builder.query({
      query: () => ({ url: 'companies' }),
    }),
    getOffices: builder.query({
      query: (companyId) => ({ url: `offices/${companyId}` }),
    }),
    addCompany: builder.mutation({
      query: (body) => ({ url: 'companies', method: 'POST', body }),
    }),
    addOffice: builder.mutation({
      query: (body) => ({ url: 'offices', method: 'POST', body }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCompaniesQuery,
  useGetOfficesQuery,
  useAddCompanyMutation,
  useAddOfficeMutation,
} = companyApi
