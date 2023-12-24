"use client";
import React from "react";
import Addquiz from "../Components/Addquiz/Addquiz";
import { useAppSelector } from "../Hooks/useRedux";
import { useRouter } from "next/navigation";

const DashboardClient = () => {
  const { user }: any = useAppSelector((state) => state.auth);
  const router = useRouter();
  console.log(user?.role);
  if (user?.role !== "admin") {
    router.push("/");
    return;
  }
  return (
    <div>
      <Addquiz />
    </div>
  );
};

export default DashboardClient;
