import { apiService } from "../api/api";

export const quizService = apiService.injectEndpoints({
    endpoints: build => ({
        getQuizCategory: build.query<null, null>({
            query: () => ({ method: "GET", url: "quiz/getQuizes" }),
        }),
    })
})
export const { useGetQuizCategoryQuery } = quizService