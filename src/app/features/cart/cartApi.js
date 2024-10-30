import getUrl from "@/utils/getUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getUrl()}/api/product/` }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    cartDataPost: builder.mutation({
      query: (newCart) => ({
        url: "cartPost",
        method: "POST",
        body: newCart,
      }),
      invalidatesTags: ["Cart"],
    }),
    fetchAllCart: builder.query({
      query: (userId) => `carts/${userId}`,
      providesTags: ["Cart"],
    }),
    cartDelete: builder.mutation({
      query: (id) => ({
        url: `cartDelete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
    cartCheckOut: builder.mutation({
      query: (id) => ({
        url: `checkout-session/${id}`,
        method: "POST",
        body: id,
      }),
    }),
    paymentData: builder.mutation({
      query: (id) => ({
        url: `/checkout-session/${id}`,
        method: "POST",
      }),
    }),
    fetchAllPayment: builder.query({
      query: (id) => ({
        url: `/payment/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  usePaymentDataMutation,
  useCartDataPostMutation,
  useFetchAllCartQuery,
  useCartDeleteMutation,
  useCartCheckOutMutation,
  useFetchAllPaymentQuery
} = cartApi;
