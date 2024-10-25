import getUrl from "@/utils/getUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getUrl()}/api/auth/`,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({
        url:'register',
        method:'POST',
        body:newUser
      }),
    }),
    loginUser:builder.mutation({
      query:(credentials) =>({
        url:'login',
        method:'POST',
        body:credentials
      })
    }),
    logoutUser:builder.mutation({
      query:() =>({
        url:'logout',
        method:'POST',
      })
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation , useLoginUserMutation , useLogoutUserMutation} = authApi;
