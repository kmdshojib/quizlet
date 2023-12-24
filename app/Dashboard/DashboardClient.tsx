"use client";
import React from "react";
import Addquiz from "../Components/Addquiz/Addquiz";
import { useAppSelector } from "../Hooks/useRedux";

const DashboardClient = () => {
  const { user }: any = useAppSelector((state) => state.auth);
  console.log(user?.role);
  if (user?.role !== "admin") {
    return;
  }
  return (
    <div>
      <Addquiz />
    </div>
  );
};

export default DashboardClient;
