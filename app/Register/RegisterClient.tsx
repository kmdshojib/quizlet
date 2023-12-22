"use client";
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const RegisterClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const handleRegister: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col w-[360px] md:w-[450px] p-6 rounded-md sm:p-10 bg-gray-50 shadow-xl">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Register</h1>
        <p className="text-sm font-light text-neutral-500">
          Please create an account and register!
        </p>
      </div>
      <form
        onSubmit={handleSubmit(handleRegister)}
        action=""
        className="space-y-12"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Full Name
            </label>
            <input
              {...register("fullName", { required: true })}
              type="text"
              id="name"
              placeholder="Your full name"
              className={`w-full px-3 py-2 border rounded-md dark:text-gray-900 ${
                errors.fullName ? "border-rose-500" : "dark:border-gray-700"
              }`}
            />
            {errors.email && (
              <span className="text-rose-500">Email is required!</span>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="example@mail.com"
              className={`w-full px-3 py-2 border rounded-md dark:text-gray-900 ${
                errors.email ? "border-rose-500" : "dark:border-gray-700"
              }`}
            />
            {errors.email && (
              <span className="text-rose-500">Email is required!</span>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              placeholder="*****"
              className={`w-full px-3 py-2 border rounded-md dark:text-gray-900 ${
                errors.email ? "border-rose-500" : "dark:border-gray-700"
              }`}
            />
            {errors.password && (
              <span className="text-rose-500">Password is required!</span>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              className="w-full px-8 py-3 font-semibold rounded-md bg-rose-500 text-base-200"
              type="submit"
            >
            Register
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-600">
            Don&apos;t have an account yet?
            <Link
              rel="noopener noreferrer"
              href="/login"
              className="hover:underline font-light text-neutral-500"
              data-abc="true"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterClient;
