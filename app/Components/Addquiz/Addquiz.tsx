"use client";
import { useAddQuizMutation } from "@/redux/Services/quizService";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Spinner from "../Common/Spinner";

const Addquiz = () => {
  const [questions, setQuestions] = useState<any>([]);
  const [addQuiz, { isLoading, reset }] = useAddQuizMutation();
  const [submit, setSubmit] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();
  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
        correctAnswer: "",
      },
    ]);
    setSubmit(true);
  };

  const handleQuestionOptionChange = (index: any, field: any, event: any) => {
    setQuestions((prevQuestions: any) => {
      const updatedQuestions = [...prevQuestions];
      const questionToUpdate = { ...updatedQuestions[index] };

      if (field === "question" || field === "correctAnswer") {
        questionToUpdate[field] = event.target.value;
      } else if (field.startsWith("options[")) {
        const optionIndex = parseInt(field.match(/\d+/)[0], 10);
        questionToUpdate.options[optionIndex] = event.target.value;
      }

      updatedQuestions[index] = questionToUpdate;
      return updatedQuestions;
    });
  };
  const handleQuestionChange = (index: any, event: any) => {
    setQuestions(
      questions.map((question: any, i: any) =>
        i === index
          ? { ...question, [event.target.name]: event.target.value }
          : question
      )
    );
  };
  const handleQuestion = async (formData: any) => {
    const { category, imageUrl } = formData;
    const submitData = {
      category,
      imageUrl,
      questions,
    };
    try {
      const result = await addQuiz(submitData);

      if ("data" in result) {
        toast.success("Data added successfully");
        reset();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit(handleQuestion)}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        <div className="col-span-full">
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold mb-2"
          >
            Category:
          </label>
          <input
            type="text"
            id="category"
            placeholder="Eg: Frontend"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("category", { required: true })}
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            placeholder="Upload anywhere and paste URL"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("imageUrl", { required: true })}
          />
        </div>
        {questions.map((question: any, index: any) => (
          <div key={index} className="col-span-full">
            <label
              htmlFor={`question-${index}`}
              className="block text-gray-700 font-bold mb-2"
            >
              Question:
            </label>
            <input
              type="text"
              id={`question-${index}`}
              name="question"
              value={question.question}
              onChange={(e) => handleQuestionChange(index, e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {Array.from({ length: 4 }, (_, optionIndex) => (
              <div
                key={`option-${index}-${optionIndex}`}
                className="col-span-full"
              >
                <label
                  htmlFor={`option-${index}-${optionIndex}`}
                  className="block text-gray-700 font-bold mb-2"
                >
                  Option {optionIndex + 1}:
                </label>
                <input
                  type="text"
                  id={`option-${index}-${optionIndex}`}
                  name={`options[${optionIndex}]`}
                  value={question.options[optionIndex]}
                  placeholder="Your options"
                  onChange={(e) =>
                    handleQuestionOptionChange(
                      index,
                      `options[${optionIndex}]`,
                      e
                    )
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            ))}
            <label
              htmlFor={`answer-${index}`}
              className="block text-gray-700 font-bold mb-2"
            >
              Correct Answer:
            </label>
            <input
              type="text"
              id={`answer-${index}`}
              name="correctAnswer"
              value={question.correctAnswer}
              onChange={(e) => handleQuestionChange(index, e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}
        <div className="col-span-full">
          <button
            type="button"
            className="btn btn-primary mr-2"
            onClick={handleAddQuestion}
          >
            Add Question
          </button>
          {submit && (
            <button type="submit" className="btn bg-rose-500 text-base-100">
              Submit Questions
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Addquiz;
