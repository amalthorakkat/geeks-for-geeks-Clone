import React from "react";
import lArrow from "../components/assets/left-arrow.png";
import rArrow from "../components/assets/right-arrow.png";
import Bell from "../components/assets/bell.png";
import Dark from "../components/assets/dark-mode.png";
import Language from "../components/assets/language.png";
import Search from "../components/assets/search-interface-symbol.png";

function Header() {
  return (
    <div>
      <div class="navbar flex px-5 p-1 border border-b-2 border-[#EBEBEB] justify-center ">
        <div class=" order-2 lg:hidden">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex gap-[100px] w-[100%]">
          <div class="order-1 hidden lg:flex font-semibold flex-1 ">
            <ul class="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Cources</summary>
                  <ul class="p-2">
                    <li>
                      <a>DSA to Development</a>
                    </li>
                    <li>
                      <a>GATE Cources</a>
                    </li>
                    <li>
                      <a>Get IBM Certification</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <ul class="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Tutorial</summary>
                  <ul class="p-2">
                    <li>
                      <a>DSA</a>
                    </li>
                    <li>
                      <a>Data Science</a>
                    </li>
                    <li>
                      <a>Languages</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <ul class="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Jobs</summary>
                  <ul class="p-2">
                    <li>
                      <a>Employer Branding</a>
                    </li>
                    <li>
                      <a>All job Updates</a>
                    </li>
                    <li>
                      <a>Hiring solution</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <ul class="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Practice</summary>
                  <ul class="p-2">
                    <li>
                      <a>Problem of the day</a>
                    </li>
                    <li>
                      <a>Practice coding</a>
                    </li>
                    <li>
                      <a>SDE sheet</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <ul class="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Contest</summary>
                  <ul class="p-2">
                    <li>
                      <a>GFG weekly</a>
                    </li>
                    <li>
                      <a>Hiring challenge</a>
                    </li>
                    <li>
                      <a>Contestes and events </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          <div class=" order-2 marginLogo flex-1 justify-center flex ">
            <a class="btn btn-ghost text-xl">
              <img
                src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
                alt=""
              />
            </a>
          </div>

          <div class=" order-3 flex justify-end items-center gap-5 flex-1 ">
            <img className=" size-[22px] " src={Search} alt="" />
            <img className=" size-[22px] " src={Dark} alt="" />
            <img className=" size-[22px] " src={Bell} alt="" />
            <img className=" size-[22px] " src={Language} alt="" />

            <button className=" bg-[rgb(39,50,57)] py text-white py-2 px-7 rounded-[5px] text-[14px] ">
              Sign In
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-6  justify-evenly items-center py-3 border text-[14px] ">
        <img className=" size-[15px] " src={lArrow} alt="" />
        <p>Trending Now</p>
        <p>DSA</p>
        <p>Web Tech</p>
        <p>Foundational Courses</p>
        <p>Data Science</p>
        <p>Practice Problem</p>
        <p>Python</p>
        <p>Machine Learning</p>
        <p>JavaScript</p>
        <p>System Design</p>
        <p>Django</p>
        <p>DevOps Tutorial</p>
        <p>Java</p>
        <p>C</p>
        <p>C++</p>
        <p>ReactJS</p>
        <p>CP Live</p>
        <p>Aptitude</p>
        <p>NodeJS</p>
        <p>Puzzles</p>
        <p>Projects</p>
        <img className=" size-[15px] " src={rArrow} alt="" />
      </div>
    </div>
  );
}

export default Header;
