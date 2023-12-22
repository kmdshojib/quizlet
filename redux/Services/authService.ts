import { apiService } from "../api/api";

export const authService = apiService.injectEndpoints({
    endpoints: build => ({
        loginUser: build.mutation<any, any>({
            query: (credentials) => ({
                url: "user/login",
                method: "POST",
                data: credentials,
            }),
        })
    })
})

export const { useLoginUserMutation } = authService;