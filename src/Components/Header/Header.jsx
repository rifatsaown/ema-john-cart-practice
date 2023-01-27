import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-[#1C2B35] rounded-full">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-white text-xl">Ema-John</a>
        </div>
        <div className="flex-none">
          <ul className="text-white	menu menu-horizontal px-1">
            <li>
              <a href="/">Item 1</a>
            </li>
            <li tabIndex={0}>
              <a href="/">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-[#1C2B35]">
                <li>
                  <a href="/">Submenu 1</a>
                </li>
                <li>
                  <a href="/">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
