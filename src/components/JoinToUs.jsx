import React from "react";
import first_image from "../assets/Photo.png";

const JoinToUs = () => {
  return (
    <div
      className="w-[1135px] h-[430px] bd-white dark:bg-[#3B3B3B] rounded-[20px]
        border-2 border-black dark:border-[#3B3B3B] flex justifu-between p-[60px] mx-[190px] mt-[140px]"
    >
      <div>
        <img src={first_image} className="ml-[10px]" />
      </div>
      <div className="w-[425px] h-[272px] ml-[130px] mt-[20px]">
        <h1 className="text-[38px] font-bold text-black dark:text-white leading-[45px]">
          Join our weekly <br /> Digest
        </h1>
        <p className="text-[22px] text-black dark:text-white mt-[10px]">
          Get exclusive promotions & updates straight to your inbox.
        </p>
        <div className="flex w-[425px] h-[60px] mt-[30px]">
          <input
            placeholder="Enter your email here"
            className="dark:placeholder:text-black pl-[30px]  h-[60px] w-[251px] rounded-[20px]  text-16px font-medium focus:z-10 dark:bg-white bg-gray-500 text-white dark:text-black placeholder:text-white"
          />
          <button className="h-[60px] w-[211px] bg-[#A259FF] ml-[-35px] text-white rounded-[20px] font-bold z-3">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinToUs;
