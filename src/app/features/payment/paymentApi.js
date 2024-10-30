import getUrl from "@/utils/getUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getUrl()}/api/product/` }),
  tagTypes: ["Payment"],
  endpoints: (builder) => ({
    fetchSingleUserPayment: builder.query({
      query: (id) => ({
        url: `payment/${id}`,
        method: "GET",
      }),
      providesTags: ["Payment"],
    }),
    fetchAllPayment: builder.query({
      query: () => `payments`,
      providesTags: ["Payment"],
    }),
  }),
});

export const { useFetchSingleUserPaymentQuery , useFetchAllPaymentQuery} = paymentApi;
