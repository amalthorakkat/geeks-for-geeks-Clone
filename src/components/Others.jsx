import React from "react";
import Next from "./assets/next.png";

const Others = () => {
  return (
    <div>
      <div className="mx-[390px]  mt-[50px]  ">
        {/* web dev */}
        <div className="font-medium px-[20px] text-[22px] flex justify-between ">
          <h1>Web Development</h1>
          <button className="border border-[#444444] text-[13px] font-normal px-3 rounded-2xl ">
          View All
        </button>
        </div>

        <div className="flex px-5 gap-5 justify-between items-center  mt-[30px] ">
          <div className=" bg-[#AE84D1] h-[100px] w-[240px] p-4 rounded-xl">
            <div>
              <h1 className=" text-[21px] text-[white] font-medium ">
                Machine Learning
              </h1>
            </div>
            <div className="flex justify-end mt-3 ">
              <button>
                <img className=" size-[23px] " src={Next} alt="" />
              </button>
            </div>
          </div>

          <div className=" bg-[#AE84D1] h-[100px] w-[240px] p-4 rounded-xl">
            <div>
              <h1 className=" text-[21px] text-[white] font-medium ">
                Data Science
              </h1>
            </div>
            <div className="flex justify-end mt-3  ">
              <button>
                <img className=" size-[23px] " src={Next} alt="" />
              </button>
            </div>
          </div>

          <div className=" bg-[#AE84D1] h-[100px] w-[240px] p-4 rounded-xl">
            <div>
              <h1 className=" text-[21px] text-[white] font-medium ">
                Data Analysis
              </h1>
            </div>
            <div className="flex justify-end mt-3  ">
              <button>
                <img className=" size-[23px] " src={Next} alt="" />
              </button>
            </div>
          </div>

          <div className=" bg-[#AE84D1] h-[100px] w-[240px] p-4 rounded-xl">
            <div>
              <h1 className=" text-[21px] text-[white] font-medium ">
                Data Visualization
              </h1>
            </div>
            <div className="flex justify-end mt-3  ">
              <button>
                <img className=" size-[23px] " src={Next} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex px-5 gap-5 justify-between items-center  mt-[30px] ">
          <div className=" bg-[#AE84D1] h-[100px] w-[240px] p-4 rounded-xl">
            <div>
              <h1 className=" text-[21px] text-[white] font-medium ">
                Deep Learning
              </h1>
            </div>
            <div className="flex justify-end mt-3 ">
              <button>
                <img className=" size-[23px] " src={Next} alt="" />
              </button>
            </div>
          </div>

          <div className=" bg-[#AE84D1] h-[100px] w-[240px] p-4 rounded-xl">
            <div>
              <h1 className=" text-[21px] text-[white] font-medium ">
                Natural Language P...
              </h1>
            </div>
            <div className="flex justify-end mt-3  ">
              <button>
                <img className=" size-[23px] " src={Next} alt="" />
              </button>
            </div>
          </div>

          <div className=" bg-[#AE84D1] h-[100px] w-[240px] p-4 rounded-xl">
            <div>
              <h1 className=" text-[21px] text-[white] font-medium ">
                Computer Vision
              </h1>
            </div>
            <div className="flex justify-end mt-3  ">
              <button>
                <img className=" size-[23px] " src={Next} alt="" />
              </button>
            </div>
          </div>

          <div className=" bg-[#AE84D1] h-[100px] w-[240px] p-4 rounded-xl">
            <div>
              <h1 className=" text-[21px] text-[white] font-medium ">
                Artificial Intelligence
              </h1>
            </div>
            <div className="flex justify-end mt-3  ">
              <button>
                <img className=" size-[23px] " src={Next} alt="" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Others;
