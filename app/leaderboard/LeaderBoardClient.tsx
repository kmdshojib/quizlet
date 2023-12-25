"use client";
import React, { useEffect } from "react";
import Container from "../Components/Common/Container";
import { useGetAllUserSCoreQuery } from "@/redux/Services/authService";
import Spinner from "../Components/Common/Spinner";
import { useAppSelector } from "../Hooks/useRedux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LeaderBoardClient: React.FC = () => {
  const { data, isLoading, refetch } = useGetAllUserSCoreQuery(null);
  const { user }: any = useAppSelector((state) => state.auth);
  const router = useRouter();

  const calculateAverage = (scores: any) => {
    const totalScore = scores.reduce((sum: any, score: any) => {
      Object.keys(score).forEach((key) => {
        const value = parseFloat(score[key]);
        if (!isNaN(value)) {
          sum += value;
        }
      });
      return sum;
    }, 0);
    const average = totalScore / scores.length;
    return isNaN(average) ? 0 : average.toFixed(2);
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (!user?.email && !user?.id) {
    toast.error("You must log in!");
    router.push("/login");
  }
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
                {data.map((item: any, index: any) => (
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
