import React from "react";
import Container from "@/app/Components/Common/Container";
import MobileMenu from "@/app/Components/Navigation/MobileMenu";
const Navigtion = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-2 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3">
            <div className="navbar bg-base-100 flex items-center">
              <a className="btn btn-ghost text-xl">Quizlet</a>
              <div className="hidden sm:block items-center justify-center ml-5">
                {/* Center the Search component on small screens */}
                {/* <Search /> */}
              </div>
              <div className="navbar-end flex items-center gap-3">
                <div className="hidden sm:block">
                  {/* Hide Cart and Categories on small screens */}
                  {/* <Profile /> */}
                </div>
                <div className="hidden sm:block">{/* <Categories /> */}</div>
                {/* <Cart /> */}
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
