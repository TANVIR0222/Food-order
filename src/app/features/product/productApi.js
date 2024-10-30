// http://localhost:3000/api/product/gatProduct

import getUrl from "@/utils/getUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getUrl()}/api/product/` }),
  tagTypes: ["Product"],

  endpoints: (builder) => ({
    fetchGetProducts: builder.query({
      query: (pageNumber) => ({
        url: `getProduct?page=${pageNumber}`,
      }),
      providesTags: ["Product"],
    }),
    searchProduct: builder.query({
      query: (name) => `search?query=${name}`,
      providesTags: ["Product"],
    }),
    getAllProduct: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    filterProduct: builder.query({
      query: (category) => `filter?query=${category}`,
      providesTags: ["Product"],
    }),
    fetchRealtedProduct: builder.query({
      query: (_id) => `realtedProduct/${_id}`,
      providesTags: ["Product"],
    }),
    fetchAllProduct: builder.query({
      query: () => `allProduct`,
      providesTags: ["Product"],
    }),
    postProduct: builder.mutation({
      query: (product) => ({
        url: "productPost",
        method: "POST",
        body: product,
        fromData:true,
      }),
      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({id,...rest}) => ({
        url: `update-product/${id}`,
        method: "PATCH",
        body: rest,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchGetProductsQuery,
  useSearchProductQuery,
  useGetAllProductQuery,
  useFilterProductQuery,
  useFetchRealtedProductQuery,
  useFetchAllProductQuery,
  usePostProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi; // export the hooks
