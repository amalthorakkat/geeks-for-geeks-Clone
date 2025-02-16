import React from "react";
import Next from "./assets/next.png";
import NextHover from "./assets/next-hover.png";

const MustExplore = () => {
  return (
    <div>
      <div className="mx-[390px]  mt-[50px]  ">
        <div className="font-medium px-[20px] text-[22px]">
          <h1>Must Explore</h1>
        </div>
        <div className="flex px-5 gap-5 justify-between items-center  mt-[30px] ">
          <div className=" bg-[#AE84D1] h-[100px] w-[240px] p-4 rounded-xl group cursor-pointer ">
            <div>
              <h1 className=" text-[21px] text-[white] font-medium ">
                Jobs for you
              </h1>
            </div>
            <div className="flex justify-end mt-3 ">
              <button className="p-1 transition-all duration-300 group-hover:bg-white group-hover:rounded-full ">
                <img className=" size-[23px]  block group-hover:hidden  " src={Next} alt="" />
                
              </button>
            </div>
          </div>

          <div className=" bg-[#AE84D1] h-[100px] w-[240px] p-4 rounded-xl group cursor-pointer">
            <div>
              <h1 className=" text-[21px] text-[white] font-medium ">
                Hire with us
              </h1>
            </div>
            <div className="flex justify-end mt-3  ">
            <button className="p-1 transition-all duration-300 group-hover:bg-white group-hover:rounded-full ">
                <img className=" size-[23px]  block group-hover:hidden  " src={Next} alt="" />
                <img className=" size-[23px] hidden group-hover:block " src={NextHover} alt="" />
              </button>
            </div>
          </div>

          <div className=" bg-[#AE84D1] h-[100px] w-[240px] p-4 rounded-xl group cursor-pointer">
            <div>
              <h1 className=" text-[21px] text-[white] font-medium ">
                Advertise with Us
              </h1>
            </div>
            <div className="flex justify-end mt-3  ">
            <button className="p-1 transition-all duration-300 group-hover:bg-white group-hover:rounded-full ">
                <img className=" size-[23px]  block group-hover:hidden  " src={Next} alt="" />
                <img className=" size-[23px] hidden group-hover:block " src={NextHover} alt="" />
              </button>
            </div>
          </div>

          <div className=" bg-[#AE84D1] h-[100px] w-[240px] p-4 rounded-xl group cursor-pointer">
            <div>
              <h1 className=" text-[21px] text-[white] font-medium ">
                Placement Training...
              </h1>
            </div>
            <div className="flex justify-end mt-3  ">
            <button className="p-1 transition-all duration-300 group-hover:bg-white group-hover:rounded-full ">
                <img className=" size-[23px]  block group-hover:hidden  " src={Next} alt="" />
                <img className=" size-[23px] hidden group-hover:block " src={NextHover} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MustExplore;
