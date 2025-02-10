import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://websolex-admin.vercel.app/api',
    }),
    endpoints: (builder) => ({
        getProject: builder.query({
            query: () => '/project'
        }),
        getSetStatic: builder.query({
            query: () => '/setstatic'
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
            query: () => '/lastworkadd'
        }),
        getLastWorkAddById: builder.query({
            query: (portfolioid) => `/lastworkadd/${portfolioid}`
        }),
        getClientRate: builder.query({
            query: () => '/clientrate'
        }),
        submitContactForm: builder.mutation({
            query: (formData) => ({
                url: '/contactform',
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
    useGetSetStaticQuery,
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
