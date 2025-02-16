import React from "react";
import Graph from "./assets/signal.png";
import Increase from "./assets/increase.png";

const Cources = () => {
  return (
    <div>
      <div className="mx-[390px] flex justify-between text-[22px] font-medium px-[45px] ">
        <h1>Cources </h1>
        <button className="border border-[#444444] text-[13px] font-normal px-3 rounded-2xl ">
          View All
        </button>
      </div>

      {/* section 1 */}
      <div className="mx-[390px] flex justify-center items-center gap-20 mt-[30px] ">
        {/* card 1 */}
        <div class="card bg-base-100 w-[290px] shadow-xl group cursor-pointer ">
          <figure>
            <img
              src="https://media.geeksforgeeks.org/img-practice/prod/courses/504/Web/Content/Course_DSA_to_Dev_1720846081_1736594558.webp"
              alt="Shoes"
            />
          </figure>
          <div class="px-3 pt-6 pb-3 ">
            <h2 class="card-title p-0">DSA to Development: A Complete Guide</h2>
            <div className="flex items-center gap-2 text-[13px] mt-5  ">
              <img src={Graph} alt="" className="size-[15px] " />
              <p className="  text-[#808080] "> Beginner to Advance</p>
            </div>
            <div className="flex items-center  text-[13px] justify-between mt-6  ">
              <div className="flex items-center  ">
                <img src={Increase} alt="" className="size-[15px] " />
                <p className="  text-[#808080] ">488k+ interested Geeks</p>
              </div>
              <div class="card-actions justify-end ">
                <button class="py-1 rounded-[4px] p-2 text-[#357960] transition-all duration-300 group-hover:bg-[#357960] group-hover:text-white ">Explore Now</button>
              </div>
            </div>
            <div className=" text-center text-[13px] bg-[#FED600] rounded-md p-2 mt-5 ">
              <p>
                <span className=" font-medium ">Refund of 90%</span> is
                available on this course
              </p>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div class="card bg-base-100 w-[290px] shadow-xl group cursor-pointer">
          <figure>
            <img
              src="https://media.geeksforgeeks.org/img-practice/prod/courses/227/Web/Content/backend_dev_1736591964.webp"
              alt="Shoes"
            />
          </figure>
          <div class="px-3 pt-6 pb-3">
            <h2 class="card-title p-0">JAVA Backend Development - Live</h2>
            <div className="flex items-center gap-2 text-[13px] mt-5  ">
              <img src={Graph} alt="" className="size-[15px] " />
              <p className="  text-[#808080] ">Intermediate and Advance</p>
            </div>
            <div className="flex items-center  text-[13px] justify-between mt-6  ">
              <div className="flex items-center  ">
                <img src={Increase} alt="" className="size-[15px] " />
                <p className="  text-[#808080] ">279k+ interested Geeks</p>
              </div>
              <div class="card-actions justify-end">
                <button class="py-1 rounded-[4px] p-2 text-[#357960] transition-all duration-300 group-hover:bg-[#357960] group-hover:text-white">Explore Now</button>
              </div>
            </div>
            <div className=" text-center text-[13px] bg-[#FED600] rounded-md p-2 mt-5 ">
              <p>
                <span className=" font-medium ">Refund of 90%</span> is
                available on this course
              </p>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div class="card bg-base-100 w-[290px] shadow-xl group cursor-pointer">
          <figure>
            <img
              src="https://media.geeksforgeeks.org/img-practice/prod/courses/458/Web/Content/Course_Tech_Int_1720846791_1736594646.webp"
              alt="Shoes"
            />
          </figure>
          <div class="px-3 pt-6 pb-3">
            <h2 class="card-title p-0">Tech Interview 101 - From DSA to System Design....</h2>
            <div className="flex items-center gap-2 text-[13px] mt-5  ">
              <img src={Graph} alt="" className="size-[15px] " />
              <p className="  text-[#808080] "> Beginner to Advance</p>
            </div>
            <div className="flex items-center  text-[13px] justify-between mt-6  ">
              <div className="flex items-center  ">
                <img src={Increase} alt="" className="size-[15px] " />
                <p className="  text-[#808080] ">321k+ interested Geeks</p>
              </div>
              <div class="card-actions justify-end">
                <button class="py-1 rounded-[4px] p-2 text-[#357960] transition-all duration-300 group-hover:bg-[#357960] group-hover:text-white">Explore Now</button>
              </div>
            </div>
            <div className=" text-center text-[13px] bg-[#FED600] rounded-md p-2 mt-5 ">
              <p>
                <span className=" font-medium ">Refund of 90%</span> is
                available on this course
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="mx-[390px] flex justify-center items-center gap-20 mt-[50px] ">
        {/* card 1 */}
        <div class="card bg-base-100 w-[290px] shadow-xl group cursor-pointer ">
          <figure>
            <img
              className="h-full w-full object-cover"
              src="https://media.geeksforgeeks.org/img-practice/prod/courses/241/Web/Content/FSRNL_1705410152_1736594810.webp"
              alt="Shoes"
            />
          </figure>
          <div class="px-3 pt-6 pb-3">
            <h2 class="card-title p-0">Full Stack Development with React & Node JS - Live</h2>
            <div className="flex items-center gap-2 text-[13px] mt-5  ">
              <img src={Graph} alt="" className="size-[15px] " />
              <p className="  text-[#808080] "> Beginner to Advance</p>
            </div>
            <div className="flex items-center  text-[13px] justify-between mt-6  ">
              <div className="flex items-center  ">
                <img src={Increase} alt="" className="size-[15px] " />
                <p className="  text-[#808080] ">326k+ interested Geeks</p>
              </div>
              <div class="card-actions justify-end">
                <button class="py-1 rounded-[4px] p-2 text-[#357960] transition-all duration-300 group-hover:bg-[#357960] group-hover:text-white">Explore Now</button>
              </div>
            </div>
            <div className=" text-center text-[13px] bg-[#FED600] rounded-md p-2 mt-5 ">
              <p>
                <span className=" font-medium ">Refund of 90%</span> is
                available on this course
              </p>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div class="card bg-base-100 w-[290px] shadow-xl group cursor-pointer">
          <figure>
            <img
              src="https://media.geeksforgeeks.org/img-practice/prod/courses/270/Web/Content/javaprogramming_1736593466.webp"
              alt="Shoes"
            />
          </figure>
          <div class="px-3 pt-6 pb-3">
            <h2 class="card-title p-0">Java Programming Online Course [Complete Beginner...</h2>
            <div className="flex items-center gap-2 text-[13px] mt-5  ">
              <img src={Graph} alt="" className="size-[15px] " />
              <p className="  text-[#808080] "> Beginner to Advance</p>
            </div>
            <div className="flex items-center  text-[13px] justify-between mt-6  ">
              <div className="flex items-center  ">
                <img src={Increase} alt="" className="size-[15px] " />
                <p className="  text-[#808080] ">268k+ interested Geeks</p>
              </div>
              <div class="card-actions justify-end">
                <button class="py-1 rounded-[4px] p-2 text-[#357960] transition-all duration-300 group-hover:bg-[#357960] group-hover:text-white">Explore Now</button>
              </div>
            </div>
            <div className=" text-center text-[13px] bg-[#FED600] rounded-md p-2 mt-5 ">
              <p>
                <span className=" font-medium ">Refund of 90%</span> is
                available on this course
              </p>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div class="card bg-base-100 w-[290px] shadow-xl group cursor-pointer">
          <figure>
            <img
              src="https://media.geeksforgeeks.org/img-practice/prod/courses/221/Web/Content/cpp_1736593581.webp"
              alt="Shoes"
            />
          </figure>
          <div class="px-3 pt-6 pb-3">
            <h2 class="card-title p-0">C++ Programming Course Online - Complete Beginner...</h2>
            <div className="flex items-center gap-2 text-[13px] mt-5  ">
              <img src={Graph} alt="" className="size-[15px] " />
              <p className="  text-[#808080] "> Beginner to Advance</p>
            </div>
            <div className="flex items-center  text-[13px] justify-between mt-6  ">
              <div className="flex items-center  ">
                <img src={Increase} alt="" className="size-[15px] " />
                <p className="  text-[#808080] ">221k+ interested Geeks</p>
              </div>
              <div class="card-actions justify-end">
                <button class="py-1 rounded-[4px] p-2 text-[#357960] transition-all duration-300 group-hover:bg-[#357960] group-hover:text-white">Explore Now</button>
              </div>
            </div>
            <div className=" text-center text-[13px] bg-[#FED600] rounded-md p-2 mt-5 ">
              <p>
                <span className=" font-medium ">Refund of 90%</span> is
                available on this course
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cources;
