import Link from "next/link";
import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";


const MobileMenu: React.FC = () => {

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
          {/* Sidebar content here */}
          <div className="collapse collapse-arrow bg-base-200">
            <input
              title="accodrian"
              type="radio"
              name="my-accordion-2"
              placeholder=""
            />
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input
              title="accodrian"
              type="radio"
              name="my-accordion-2"
              placeholder=""
            />
            <div className="collapse-title text-xl font-medium">Categories</div>
            <div className="collapse-content">
              <div className="flex flex-col justify-between">
                <Link
                  href="/categories/gaming"
                  className="hover:text-rose-500 transition mb-3"
                >
                  Gaming
                </Link>
                <Link
                  href="/categories/ultrabook"
                  className="hover:text-rose-500 transition mb-3"
                >
                  Ultra Book
                </Link>
                <Link
                  href="/categories/apple"
                  className="hover:text-rose-500 transition mb-3"
                >
                  Apple
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;