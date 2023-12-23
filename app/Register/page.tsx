import React from "react";
import RegisterClient from "./RegisterClient";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Quizlet | Register",
};
const Register = () => {
  return (
    <div className="flex justify-center">
      <RegisterClient />
    </div>
  );
};

export default Register;
