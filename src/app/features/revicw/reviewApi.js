import getUrl from "@/utils/getUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${getUrl()}/api/review/` }),
  tagTypes: ["Review"],

  endpoints: (builder) => ({
    postReviews: builder.mutation({
      query: (newReview) => ({
        url: "review",
        method: "POST",
        body: newReview,
      }),
      providesTags: ["Review"],
    }),
    allReviews: builder.query({
      query: () => "all",
      invalidatesTags: ["Review"],
    }),
  }),
});

export const { usePostReviewsMutation, useAllReviewsQuery } = reviewApi; // Pull in one or more endpoints we want to use
