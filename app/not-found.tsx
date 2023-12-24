"use client";
import React from "react";
import Container from "./Components/Common/Container";
import { AiTwotoneHome } from "react-icons/ai";
import { useRouter } from "next/navigation";
const NotFoundPage = () => {
  const router = useRouter()
  return (
    <Container>
      <section className="flex items-center h-full p-16 bg-base-900 text-gray-100 rounded-md">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl text-gray-800">
              Sorry, we couldn&apos;t find this page.
            </p>
            <p className="mt-4 mb-8 text-gray-800">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <div className="px-8 py-3">
                <button onClick={()=>router.push("/")} type="button" className="btn bg-rose-500 text-base-200">Back To Home
                <AiTwotoneHome />
                </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default NotFoundPage;