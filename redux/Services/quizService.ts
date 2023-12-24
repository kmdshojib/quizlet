import { apiService } from "../api/api";

export const quizService = apiService.injectEndpoints({
    endpoints: build => ({
        getQuizCategory: build.query<null, null>({
            query: () => ({ method: "GET", url: "quiz/getQuizes" }),
        }),
        getQuizById: build.query<null, any>({
            query: (id: any) => ({ method: "GET", url: `quiz/getQuizes/${id}` })
        }),
        addQuiz: build.mutation<null, any>({
            query: (data: any) => ({ method: "POST", url: "quiz/addQuiz", data: data, })
        }),
        deleteQuiz: build.mutation<null, any>({
            query: (id: any) => ({ method: "DELETE", url: `quiz/deleteQuiz/${id}` })
        })
    })
})
export const { useGetQuizCategoryQuery, useGetQuizByIdQuery, useAddQuizMutation, useDeleteQuizMutation } = quizService