"use client";
import Link from "next/link";
import React from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

const LoginClient: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const handleLogin: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col w-[360px] md:w-[450px] p-6 rounded-md sm:p-10 bg-gray-50 shadow-xl">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm font-light text-neutral-500">
          Sign in to access your account
        </p>
      </div>
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="leroy@jenkins.com"
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
              Login
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-600">
            Don&apos;t have an account yet?
            <Link
              rel="noopener noreferrer"
              href="/register"
              className="hover:underline font-light text-neutral-500"
              data-abc="true"
            >
              Register
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginClient;
