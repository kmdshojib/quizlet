"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "next/navigation";
import { useGetQuizByIdQuery } from "@/redux/Services/quizService";
import Container from "@/app/Components/Common/Container";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const QuizPage = () => {
  const { id } = useParams();
  const { data, isLoading }: any = useGetQuizByIdQuery(id);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [answeredQuestions, setAnsweredQuestions] = useState<FieldValues>({});
  const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);
  const [limit, setLimit] = useState(10);
  const paginatedQuestions = data?.questions.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  
  const calculateScore = useCallback(() => {
    let correctAnswers = 0;
  
    data.questions.forEach((question: any) => {
      const userAnswer = answeredQuestions[question.id];
      console.log({ userAnswer });
      console.log("quest", question.correctAnswer);
      if (userAnswer === question.correctAnswer) {
        correctAnswers++;
      }
    });
  
    const score = (correctAnswers / data.questions.length) * 100;
    console.log("Your score:", score.toFixed(2));
  }, [answeredQuestions, data?.questions]);
  const handleAnswer: SubmitHandler<FieldValues> = useCallback(
    async (answereData) => {
      setAnsweredQuestions(answereData);
      paginatedQuestions.forEach((question: any) => {
        const selectedAnswer = answeredQuestions[question.id];
        const isCorrect = selectedAnswer === question.correctAnswer;
        question.options.forEach((option: any) => {
          const isOptionSelected = option === selectedAnswer;
          if (isOptionSelected) {
            setCorrectAnswer(isCorrect);
          }
        });
      });
    },
    [answeredQuestions, paginatedQuestions]
  );
  useEffect(() => {
    if (Object.keys(answeredQuestions).length > 0) {
      calculateScore();
    }
  }, [answeredQuestions, calculateScore]);
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <div>
            <p className="text-center font-semibold text-lg">
              Quiz For: {data.category}
            </p>
            <form onSubmit={handleSubmit(handleAnswer)}>
              {paginatedQuestions.map((quiz: any, index: number) => {
                return (
                  <div
                    key={quiz.id}
                    className="rounded-lg shadow-md bg-white p-4 flex flex-col my-3"
                  >
                    <p className="text-lg font-semibold mb-4">
                      <span>{index + (currentPage - 1) * limit + 1}</span>.{" "}
                      {quiz.text}
                    </p>
                    {quiz.options.map((option: string, index: number) => {
                      const isOptionSelected =
                        answeredQuestions?.[quiz.id] === option;
                      const isCorrect =
                        isOptionSelected && option === quiz.correctAnswer;
                      const isIncorrect =
                        isOptionSelected && option !== quiz.correctAnswer;
                      return (
                        <div key={index + 1} className="">
                          <input
                            {...register(String(quiz.id))}
                            type="radio"
                            id={option}
                            value={option}
                            title="option"
                            className={`radio radio-info radio-xs}`}
                          />
                          <label
                            htmlFor={option}
                            className={`ml-3 ${
                              isCorrect && "text-green-700 font-bold"
                            } ${isIncorrect && "text-red-700 font-bold"}`}
                          >
                            {option}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              {currentPage * limit >= data?.questions.length && (
                <button
                  className="btn bg-rose-500 text-base-200 mt-4"
                  type="submit"
                >
                  Submit Quiz
                </button>
              )}
            </form>
            <div className="flex justify-center">
              <button
                className="btn mr-3"
                type="button"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="btn"
                type="button"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage * limit >= data?.questions.length}
              >
                Next
              </button>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default QuizPage;
