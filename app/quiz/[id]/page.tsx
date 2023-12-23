import React from "react";
import QuizPage from "./QuizPageClient";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Quiz Page",
};
const page = () => {
  return (
    <div>
      <QuizPage />
    </div>
  );
};

export default page;
