import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const companyApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  tagTypes: ['Company', 'Office'],
  endpoints: (builder) => ({
    getCompanies: builder.query({
      query: () => ({ url: 'companies' }),
      providesTags: ['Company'],
    }),
    getOffices: builder.query({
      query: (companyId) => ({ url: `offices/${companyId}` }),
      providesTags: ['Office'],
    }),
    addCompany: builder.mutation({
      query: (body) => ({ url: 'companies', method: 'POST', body }),
      invalidatesTags: ['Company'],
    }),
    addOffice: builder.mutation({
      query: (body) => ({ url: 'offices', method: 'POST', body }),
      invalidatesTags: ['Office'],
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
