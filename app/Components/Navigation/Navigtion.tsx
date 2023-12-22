import React from "react";
import Container from "@/app/Components/Common/Container";
import MobileMenu from "@/app/Components/Navigation/MobileMenu";
import Link from "next/link";

const Navigtion = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-2 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3">
            <div className="navbar bg-base-100 flex justify-between">
              <Link href="/" className="btn btn-ghost text-xl">Quizlet</Link>
              <div className="navbar-end  justify-end gap-3">
                <div className="hidden sm:block">
                  {/* Hide Cart and Categories on small screens */}
                </div>
                <div className="hidden sm:block">{/* <Categories /> */}</div>
                <div className="w-28 flex justify-between">
                  <Link className="text-base hover:text-rose-500" href="/login">
                    Login
                  </Link>
                  <Link className="text-base hover:text-rose-500" href="/register">
                    Register
                  </Link>
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
