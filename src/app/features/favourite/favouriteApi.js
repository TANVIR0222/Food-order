import getUrl from "@/utils/getUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const favouriteApi = createApi({
  reducerPath: "favouriteApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getUrl()}/api/product/` }),
  tagTypes: ["Favourite"],

  endpoints: (builder) => ({
    favouriteDataPost: builder.mutation({
      query: (newdata) => ({
        url: "favouriteCart",
        method: "POST",
        body: newdata,
      }),
      invalidatesTags: ["Favourite"],
    }),
    deleteFavouritePost: builder.mutation({
      query: (id) => ({
        url: `deletefavouriteCart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Favourite"],
    }),
    fetchAllFavourite : builder.query({
      query: (userId) => `favouriteCartGet/${userId}`,
      providesTags: ['Favourite']
    }),
  }),
});

export const {  useFavouriteDataPostMutation , useFetchAllFavouriteQuery  , useDeleteFavouritePostMutation} = favouriteApi;
