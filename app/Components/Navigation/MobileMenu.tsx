import Link from "next/link";
import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { UseAppDispatch, useAppSelector } from "@/app/Hooks/useRedux";
import { logoutUser } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
const MobileMenu: React.FC = () => {
  const auth = useAppSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = UseAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push("/");
  };
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Hamburger Menu Button */}
        <label htmlFor="my-drawer">
          <GiHamburgerMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200  z-10">
          <div className="w-50 flex justify-center flex-col">
            <Link href="/" className="btn btn-ghost text-xl">
              Quizlet
            </Link>
            <Link
              href="/leaderboard"
              className="text-base hover:text-rose-500 mr-3 mb-3"
            >
              Leaderboard
            </Link>
            {auth?.user?.role === "admin" && (
              <Link
                className="hover:text-rose-500 cursor-pointer mr-3 mb-3"
                href="/dashboard"
              >
                Dashboard
              </Link>
            )}
            {auth?.user?.id && auth?.user?.email  ? (
              <>
                <Link
                  className="hover:text-rose-500 cursor-pointer mr-3 mb-3"
                  href="/myscores"
                >
                  MyScores
                </Link>
                <div
                  onClick={handleLogout}
                  className="hover:text-rose-500 cursor-pointer mb-3"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  className="text-base hover:text-rose-500 mb-3"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className="text-base hover:text-rose-500 mb-3"
                  href="/register"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input
              title="accodrian"
              type="radio"
              name="my-accordion-2"
              placeholder=""
            />
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-3">
            <input
              title="accodrian"
              type="radio"
              name="my-accordion-2"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
