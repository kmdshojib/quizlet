"use client";
import React, { useEffect } from "react";
import Container from "../Components/Common/Container";
import { useGetAllUserSCoreQuery } from "@/redux/Services/authService";
import Spinner from "../Components/Common/Spinner";

const LeaderBoardClient: React.FC = () => {
  const { data, isLoading, refetch } = useGetAllUserSCoreQuery(null);

  const calculateAverage = (scores: any) => {
    const totalScore = scores.reduce(
      (sum: any, score: any) => sum + parseFloat(score.js),
      0
    );
    return (totalScore / scores.length).toFixed(2);
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Container>
        <div className="overflow-x-auto">
          {data && data.length ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Name</th>
                  <th>Average Score</th>
                  <th>Quiz Count</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index:any) => (
                  <tr className="hover" key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.fullName}</td>
                    <td>{calculateAverage(item.scores)}</td>
                    <td>{item.scores.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default LeaderBoardClient;