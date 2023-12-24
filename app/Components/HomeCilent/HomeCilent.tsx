"use client";
import React, { useEffect } from "react";
import { useGetQuizCategoryQuery } from "@/redux/Services/quizService";
import Card from "../Common/Card";
import Spinner from "../Common/Spinner";
interface QuizDataProps {
  id: number;
  category: string;
  imageUrl: string;
}
const HomeCilent: React.FC = () => {
  const { data, isLoading, refetch } = useGetQuizCategoryQuery(null);
  const quizData: QuizDataProps[] | null | undefined | any = data;

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div>
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : quizData && quizData.length ? (
        <div className="grid gap-4 grid-rows-1 md:grid-cols-3 lg:grid-cols-3">
          {quizData.map((item: any) => (
            <div key={item.id}>
              <Card
                id={item.id}
                name={item.category}
                imageUrl={item.imageUrl}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No quiz data available</p>
      )}
    </div>
  );
};

export default HomeCilent;
