import React from "react";
import LeaderBoardClient from "./LeaderBoardClient";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Leaderboard",
};
const page = () => {
  return (
    <div>
      <LeaderBoardClient />
    </div>
  );
};

export default page;
