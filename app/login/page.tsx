import { Metadata } from "next";
import React from "react";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "Quizlet | Login",
};

const LogIn = () => {
  return (
    <div className="flex justify-center">
      <LoginClient />
    </div>
  );
};

export default LogIn;
