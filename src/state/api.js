import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8086/api/v1/",
    prepareHeaders: (headers) => {
      if(localStorage.getItem('admin')){
        headers.set(
          "Authorization",
          `Bearer ${JSON.parse(localStorage.getItem('admin'))?.token}`
        );
      }
      return headers;
    },
    //     prepareHeaders: (headers, { getState }) => {
    //       const token = getState().auth.token;
    //       if (token) {
    //         headers.set("Authorization", `Bearer ${token}`);
    //       }
    //       return headers;
    //     },
    //   }),
  }),
  reducerPath: "adminApi",
  tagTypes: [
    "StudentsByPagination",
    "Stuedents",
    "Professors",
    "Posts",
    "Articles",
    "UserDetail",
    "Announcements",
    "Blogs"
  ],
  endpoints: (build) => ({
    //Students
    getStudentsByPagination: build.query({
      query: ({ page, role }) => ({
        url: `users`,
        method: "GET",
        params: { page, role },
      }),
      providesTags: ["StudentsByPagination"],
    }),

    getStudents: build.query({
      query: () => `users`,
      providesTags: ["Students"],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),

    getUserProfile: build.mutation({
      query: (id) => ({
        url: `auth/profiles/${id}`,
        method: "GET",
      }),
    }),

    getUsertById: build.query({
      query: (id) => `auth/profiles/${id}`,
      providesTags: (result, error, id) => [{ type: "UserDetail", id }],
    }),

    //Professor
    getProfessors: build.query({
      query: () => `users`,
      providesTags: ["Professors"],
    }),

    addNewPofessor: build.mutation({
      query: (payload) => ({
        url: "auth/registerProfessor",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),

    authenticateAdmin: build.mutation({
      query: (payload) => ({
        url: "auth/authenticateAdmin",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),

    //blog
    //get delete
    getBlogs: build.query({
      query: () => `professorArticles`,
      providesTags: ["Blogs"],
    }),

    
    deleteBlogs: build.mutation({
      query: (id) => ({
        url: `professorArticlesWithAuth/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),

    //annoncements
    //crud
    getAnnouncements: build.query({
      query: () => `announcements`,
      providesTags: ["Announcements"],
    }),

    deleteAnnouncements: build.mutation({
      query: (id) => ({
        url: `announcements/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),

    //posts
    //get delete
    getPosts: build.query({
      query: () => `studentPublications`,
      providesTags: ["Posts"],
    }),

    deletePosts: build.mutation({
      query: (id) => ({
        url: `studentPublications/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

export const {
  useGetStudentsByPaginationQuery,
  useGetStudentsQuery,
  useGetProfessorsQuery,
  useAddNewPofessorMutation,
  useAuthenticateAdminMutation,
  useDeleteUserMutation,
  useGetUserProfileMutation,
  useGetUsertByIdQuery,
  useGetPostsQuery,
  useDeletePostsMutation,
  useDeleteAnnouncementsMutation,
  useGetAnnouncementsQuery,
  useGetBlogsQuery,
  useDeleteBlogsMutation
} = api;
