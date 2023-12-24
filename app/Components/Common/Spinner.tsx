"use client";
import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-rose-500"></div>
    </div>
  );
};

export default Spinner;