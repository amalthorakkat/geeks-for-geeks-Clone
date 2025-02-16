import React, { useEffect, useState } from "react";
import Search from "./assets/search.png";

const Hero = () => {
  const placeholders = [
    "GeeksForGeeks Courses",
    "Data Structures And Algorithms",
    "Must Do SDE Sheet Practice",
    "Complete Interview Preparation",
    "Learn Python, Java, C++",
  ];

  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [charecterIndex, setCharecterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = placeholders[index];

    const typingEffect = setTimeout(
      () => {
        if (!isDeleting) {
          if (charecterIndex < currentText.length) {
            setCurrentPlaceholder((prev) => prev + currentText[charecterIndex]);
            setCharecterIndex(charecterIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 500);
          }
        } else {
          if (charecterIndex > 0) {
            setCurrentPlaceholder((prev) => prev.slice(0, -1));
            setCharecterIndex(charecterIndex - 1);
          } else {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
          }
        }
      },
      isDeleting ? 10 : 70
    );
    return () => clearTimeout(typingEffect);
  }, [charecterIndex, index, isDeleting]);

  return (
    <div className=" bg-gradient-to-b from-[#E7FFF8] to-white ">
      <div className="flex flex-col justify-center items-center h-[50vh] mx-[390px]">
        <h1 className=" text-[40px] font-semibold ">
          Hello, What Do You Want To Learn?
        </h1>

        <div className=" flex items-center w-[750px] h-[60px] mt-[50px] rounded-[10px] bg-[#F4FFFC] border border-[grey] px-5   ">
          <input
            className=" flex-1 h-full rounded-[10px] outline-none  bg-[#F4FFFC] text-[20px] text-[#808284]   "
            type="text"
            placeholder={currentPlaceholder}
          />
          <img className="  size-7 " src={Search} alt="" />
        </div>

        <div className="flex justify-center items-center pt-[25px] gap-5 ">
          <button className="border border-[grey] p-1 text-[13px] rounded-md">
            Master DS & ML
          </button>
          <button className="border border-[grey] p-1 text-[13px] rounded-md bg-[#3E63AD] text-white">
            Courses @90% Refund
          </button>
          <button className="border border-[grey] p-1 text-[13px] rounded-md">
            Full Stack Live Classes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
