"use client";
import { useAppSelector } from "@/app/Hooks/useRedux";
import {
  useDeleteQuizMutation,
  useGetQuizCategoryQuery,
} from "@/redux/Services/quizService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
interface CardProps {
  name: string;
  imageUrl: HTMLImageElement;
  id: number;
}
const Card: React.FC<CardProps> = ({ name, imageUrl, id }) => {
  const { user }: any = useAppSelector((state) => state.auth);
  const { refetch } = useGetQuizCategoryQuery(null);
  const [deleteQuiz, { isLoading }] = useDeleteQuizMutation();
  const router = useRouter();
  const handleDelete = useCallback(async () => {
    try {
      const result = await deleteQuiz(id);
      if ("data" in result) {
        toast.success("Quiz deleted successfully");
        refetch();
      }
    } catch (err) {
      toast.error("Failed to delete quiz");
    }
  }, [deleteQuiz, id, refetch]);
  const handleTakeQuiz = useCallback(() => {
    if (!user?.id && !user?.email) {
      toast.error("You must login to take a quiz! Please login");
      router.push("/login");
    }
    if (user?.id && user?.email) {
      router.push(`/quiz/${id}`);
    }
  }, [id, user?.id, user?.email, router]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="card w-75 md:w-80 bg-base-100 shadow-xl h-[400px]">
      <figure>
        <Image
          width={400}
          height={500}
          src={imageUrl}
          alt="Shoes"
          className="object-cover"
        />
      </figure>
      <div className="card-body ">
        <div className="flex flex-row justify-between">
          <h2 className="card-title mr-5">{name}</h2>
          {user?.role === "admin" && (
            <p
              onClick={handleDelete}
              className="underline text-rose-500 cursor-pointer ml-5"
            >
              Delete
            </p>
          )}
        </div>
        <p>{`Test your knowledge of ${name}`}</p>
        <div className="card-actions justify-start">
          <button
            type="button"
            onClick={handleTakeQuiz}
            className="btn bg-rose-500 text-base-200"
          >
            Take Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
