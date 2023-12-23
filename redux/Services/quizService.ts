import { apiService } from "../api/api";

export const quizService = apiService.injectEndpoints({
    endpoints: build => ({
        getQuizCategory: build.query<null, null>({
            query: () => ({ method: "GET", url: "quiz/getQuizes" }),
        }),
        getQuizById: build.query<null, any>({
            query: (id:any) => ({ method: "GET", url: `quiz/getQuizes/${id}` })
        })
    })
})
export const { useGetQuizCategoryQuery,useGetQuizByIdQuery } = quizService