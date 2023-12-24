"use client";
import React from "react";
import Container from "@/app/Components/Common/Container";
import MobileMenu from "@/app/Components/Navigation/MobileMenu";
import Link from "next/link";
import { UseAppDispatch, useAppSelector } from "@/app/Hooks/useRedux";
import { logoutUser } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";

const Navigtion: React.FC = () => {
  const auth = useAppSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = UseAppDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    router.push("/");
  };
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-2 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3">
            <div className="navbar bg-base-100 flex justify-between">
              <Link href="/" className="btn btn-ghost text-xl">
                Quizlet
              </Link>
              <div className="navbar-end  justify-end gap-3">
                <div className="hidden sm:block">
                 
                </div>
                <div className="hidden sm:block">{/* <Categories /> */}</div>
                <div className="hidden w-50 md:flex justify-between">
                <Link
                    href="/leaderboard"
                    className="text-base hover:text-rose-500 mr-3"
                  >
                    Leaderboard
                  </Link>
                  {auth?.user?.role === "admin" && (
                    <Link
                      className="hover:text-rose-500 cursor-pointer mr-3"
                      href="/dashboard"
                    >
                      Dashboard
                    </Link>
                  )}
                  {auth?.user?.id && auth?.user?.email ? (
                    <>
                      <Link
                        className="hover:text-rose-500 cursor-pointer mr-3"
                        href="/myscores"
                      >
                        MyScores
                      </Link>
                      <div
                        onClick={handleLogout}
                        className="hover:text-rose-500 cursor-pointer"
                      >
                        Logout
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        className="text-base hover:text-rose-500 mr-3"
                        href="/login"
                      >
                        Login
                      </Link>
                      <Link
                        className="text-base hover:text-rose-500"
                        href="/register"
                      >
                        Register
                      </Link>
                    </>
                  )}
                 
                </div>
              </div>
              <div className="md:hidden">
                {" "}
                <MobileMenu />{" "}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navigtion;
