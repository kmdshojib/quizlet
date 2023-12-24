"use client";
import React, { useEffect } from "react";
import Container from "./../Components/Common/Container";
import { useAppSelector } from "../Hooks/useRedux";
import { useGetUserScoreQuery } from "@/redux/Services/authService";
import Spinner from "../Components/Common/Spinner";

const MyScoresClient = () => {
  const auth = useAppSelector((state) => state.auth);
  const {
    data: userScoreData,
    isLoading,
    refetch,
  } = useGetUserScoreQuery(auth?.user?.id);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <Container>
        <div className="overflow-x-auto">
          {userScoreData?.scores?.length ? (
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Quiz Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              {userScoreData?.scores?.map((score: any, index: number) => (
                <tbody key={index + 1}>
                  {Object.entries(score).map(
                    ([key, value]: [string, any], innerIndex: number) => (
                      <tr className="hover" key={innerIndex + 1}>
                        <th>{innerIndex + 1}</th>
                        <td>{key}</td>
                        <td>{String(value)}</td>
                      </tr>
                    )
                  )}
                </tbody>
              ))}
            </table>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default MyScoresClient;
