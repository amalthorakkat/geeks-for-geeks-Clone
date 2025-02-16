import React from "react";
import Next from "./assets/next.png";
import NextHover from "./assets/next-hover.png";

const Explore = () => {
  return (
    <div>
      <div className="font-medium px-[20px] text-[22px] mx-[390px] mt-[50px] ">
        <h1> Explore</h1>
      </div>
      <div class="grid grid-cols-2 gap-4 p-4  mx-[390px] mt-[15px] ">
        <div class="bg-gradient-to-b from-[#4CAF97] to-[#51C6AB] p-4 text-white text-center flex justify-center items-center flex-col py-[70px] gap-7 rounded-2xl mr-[15px] mb-3 group cursor-pointer">
          <h1 className=" text-[25px] font-medium ">
            Data Structure and Algorithms
          </h1>
          <button className="border flex justify-center items-center gap-2 p-2 rounded-full text-[18px] transition-all duration-200 group-hover:bg-white group-hover:text-black  ">
            View more 
            <img className=" size-4 block group-hover:hidden " src={Next} alt="" />
            <img className=" size-4 hidden group-hover:block " src={NextHover} alt="" />
          </button>
        </div>

        <div class="bg-gradient-to-b from-[#5e5fb8] to-[#7075EA] p-4 text-white text-center flex justify-center items-center flex-col py-[70px] gap-7 rounded-2xl ml-[15px] mb-3 group cursor-pointer">
          <h1 className=" text-[25px] font-medium ">Practice DSA</h1>
          <button className="border flex justify-center items-center gap-2 p-2 rounded-full text-[18px] transition-all duration-200 group-hover:bg-white group-hover:text-black  ">
            View more <img className=" size-4 block group-hover:hidden " src={Next} alt="" />
            <img className=" size-4 hidden group-hover:block " src={NextHover} alt="" />
          </button>
        </div>

        <div class="bg-gradient-to-b from-[#AF6160] to-[#CA8988] p-4 text-white text-center flex justify-center items-center flex-col py-[70px] gap-7 rounded-2xl mr-[15px] mb-3 group cursor-pointer">
          <h1 className=" text-[25px] font-medium ">Web Development</h1>
          <button className="border flex justify-center items-center gap-2 p-2 rounded-full text-[18px] transition-all duration-200 group-hover:bg-white group-hover:text-black  ">
            View more <img className=" size-4 block group-hover:hidden " src={Next} alt="" />
            <img className=" size-4 hidden group-hover:block " src={NextHover} alt="" />
          </button>
        </div>

        <div class="bg-gradient-to-b from-[#684B99] to-[#A493C2] p-4 text-white text-center flex justify-center items-center flex-col py-[70px] gap-7 rounded-2xl ml-[15px] mb-3 group cursor-pointer">
          <h1 className=" text-[25px] font-medium ">AI ML & Data Science</h1>
          <button className="border flex justify-center items-center gap-2 p-2 rounded-full text-[18px] transition-all duration-200 group-hover:bg-white group-hover:text-black  ">
            View more <img className=" size-4 block group-hover:hidden " src={Next} alt="" />
            <img className=" size-4 hidden group-hover:block " src={NextHover} alt="" />
          </button>
        </div>

        <div class="bg-gradient-to-b from-[#26889E] to-[#54C3DB] text-white text-center flex justify-center items-center flex-col py-[70px] gap-7 rounded-2xl mr-[15px] mb-3 group cursor-pointer">
          <h1 className=" text-[25px] font-medium ">Python </h1>
          <button className="border flex justify-center items-center gap-2 p-2 rounded-full text-[18px] transition-all duration-200 group-hover:bg-white group-hover:text-black  ">
            View more <img className=" size-4 block group-hover:hidden " src={Next} alt="" />
            <img className=" size-4 hidden group-hover:block " src={NextHover} alt="" />
          </button>
        </div>

        <div class="bg-gradient-to-b from-[#4673B7] to-[#779DD9] p-4 text-white text-center flex justify-center items-center flex-col py-[70px] gap-7 rounded-2xl ml-[15px] mb-3 group cursor-pointer">
          <h1 className=" text-[25px] font-medium ">Machine Learning</h1>
          <button className="border flex justify-center items-center gap-2 p-2 rounded-full text-[18px] transition-all duration-200 group-hover:bg-white group-hover:text-black  ">
            View more <img className=" size-4 block group-hover:hidden " src={Next} alt="" />
            <img className=" size-4 hidden group-hover:block " src={NextHover} alt="" />
          </button>
        </div>

        <div class="bg-gradient-to-b from-[#CD743F] to-[#EAA378] p-4 text-white text-center flex justify-center items-center flex-col py-[70px] gap-7 rounded-2xl mr-[15px] mb-3 group cursor-pointer">
          <h1 className=" text-[25px] font-medium ">System Design</h1>
          <button className="border flex justify-center items-center gap-2 p-2 rounded-full text-[18px] transition-all duration-200 group-hover:bg-white group-hover:text-black  ">
            View more<img className=" size-4 block group-hover:hidden " src={Next} alt="" />
            <img className=" size-4 hidden group-hover:block " src={NextHover} alt="" />
          </button>
        </div>

        <div class="bg-gradient-to-b from-[#F0637C] to-[#E399A6] p-4 text-white text-center flex justify-center items-center flex-col py-[70px] gap-7 rounded-2xl ml-[15px] mb-3 group cursor-pointer">
          <h1 className=" text-[25px] font-medium ">DevOps </h1>
          <button className="border flex justify-center items-center gap-2 p-2 rounded-full text-[18px] transition-all duration-200 group-hover:bg-white group-hover:text-black  ">
            View more <img className=" size-4 block group-hover:hidden " src={Next} alt="" />
            <img className=" size-4 hidden group-hover:block " src={NextHover} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
