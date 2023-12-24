
import { apiService } from "../api/api";

export const authService = apiService.injectEndpoints({
    endpoints: build => ({
        loginUser: build.mutation<any, any>({
            query: (credentials) => ({
                url: "user/login",
                method: "POST",
                data: credentials,
            }),
        }),
        registerUser: build.mutation<any, any>({
            query: (data) => ({
                url: "user/register",
                method: "POST",
                data: data,
            })
        }),
        postScores: build.mutation<any, any>({
            query: (data) => ({
                url: "user/scores",
                method: "POST",
                data: data,
            })
        }),
        getUserScore: build.query<any, any>({
            query: (email) => ({ method: "GET", url: `user/userScore/${email}` })
        }),
        getAllUserSCore: build.query<any, any>({
            query: () => ({ method: "GET", url: "user/allUserScore" })
        })
    })
})

export const { useLoginUserMutation, useRegisterUserMutation, usePostScoresMutation, useGetUserScoreQuery, useGetAllUserSCoreQuery } = authService;