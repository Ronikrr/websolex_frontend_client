import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://web-backend-pink.vercel.app/api/v1',
    }),
    endpoints: (builder) => ({
        getProject: builder.query({
            query: () => '/project'
        }),
        getBlogs: builder.query({
            query: () => '/blogpage'
        }),
        getBlogPost: builder.query({
            query: (blogid) => `/blogpage/${blogid}`,
        }),
        getOurWork: builder.query({
            query: () => '/valuedclients'
        }),
        getContactDetails: builder.query({
            query: () => '/contactdetails'
        }),
        getSocialDetails: builder.query({
            query: () => '/socialdetails'
        }),
        getTeam: builder.query({
            query: () => '/teampage'
        }),
        getLastWorkAdd: builder.query({
            query: () => '/lastwork'
        }),
        getLastWorkAddById: builder.query({
            query: (portfolioid) => `/lastwork/${portfolioid}`
        }),
        getClientRate: builder.query({
            query: () => '/clientrate'
        }),
        submitContactForm: builder.mutation({
            query: (formData) => ({
                url: '/contactfrom',
                method: 'POST',
                body: formData,
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }),
        submitSubscribeForm: builder.mutation({
            query: (email) => ({
                url: '/subscribe',
                method: 'POST',
                body: { email },
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }),
    })
})

export const {
    useGetProjectQuery,
    useGetBlogsQuery,
    useGetBlogPostQuery,
    useGetOurWorkQuery,
    useGetContactDetailsQuery,
    useGetSocialDetailsQuery,
    useGetTeamQuery,
    useGetLastWorkAddQuery,
    useGetLastWorkAddByIdQuery,
    useGetClientRateQuery,
    useSubmitContactFormMutation,
    useSubmitSubscribeFormMutation,
} = apiSlice;


