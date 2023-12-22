"use client";
import React from "react";
import { useGetQuizCategoryQuery } from "@/redux/Services/quizService";
import Card from "../Common/Card";
interface QuizDataProps {
  id: number;
  category: string;
  imageUrl: string;
}
const HomeCilent: React.FC = () => {
  const { data, isLoading } = useGetQuizCategoryQuery(null);
  const quizData: QuizDataProps[] | null | undefined | any = data;
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid gap-4 grid-rows-1 md:grid-cols-3 lg:grid-cols-3">
          {quizData?.map((item: any) => {
            return (
              <div key={item.id}>
                <Card id={item.id} name={item.category} imageUrl={item.imageUrl}/>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomeCilent;
