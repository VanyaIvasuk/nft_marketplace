import React from "react";

import first_image from "../assets/YoutubeLogo.png";
import second_image from "../assets/TwitterLogo.png";
import third_image from "../assets/InstagramLogo.png";
import fourth_image from "../assets/DiscordLogo.png";
import fifth_image from "../assets/Storefront.png";

const Footer = () => {
  return (
    <div className="dark:bg-[#3B3B3B] h-[320px] dark:shadow-[0px_5px_30px_#CCCCCC] shadow-[0px_-5px_30px_black]">
      <div className="flex justify-between  mt-[100px] px-[190px] py-[30px] border-t-2 border-black dark:border-[#3B3B3B]">
        <div>
          <div className="flex">
            <img src={fifth_image} />
            <h1 className="font-bold text-black dark:text-white text-[22px] ml-[10px]">
              NFT Marketplace
            </h1>
          </div>
          <div>
            <p className="text-black dark:text-[#CCCCCC] text-[16px] mt-[20px]">
              NFT marketplace UI created <br /> with Anima for Figma.
            </p>
          </div>
          <div>
            <p className="text-black dark:text-[#CCCCCC] text-[16px] mt-[20px]">
              Join our community
            </p>
          </div>
          <div className="flex mt-[20px]">
            <img src={first_image} alt="photo" />
            <img src={second_image} alt="photo" />
            <img src={third_image} alt="photo" />
            <img src={fourth_image} alt="photo" />
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-black dark:text-white text-[22px]">
              Explore
            </h1>
          </div>
          <div>
            <p className="text-black dark:text-[#CCCCCC] text-[16px] mt-[20px]">
              Marketplace
            </p>
          </div>
          <div>
            <p className="text-black dark:text-[#CCCCCC] text-[16px] mt-[20px]">
              Rankings
            </p>
          </div>
          <div>
            <p className="text-black dark:text-[#CCCCCC] text-[16px] mt-[20px]">
              Connect a wallet
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-black dark:text-white text-[22px]">
              {" "}
              Join our weekly digest
            </h1>
          </div>
          <div>
            <p className="text-black dark:text-[#CCCCCC] text-[16px] mt-[20px]">
              Get exclusive promotions & updates <br /> straight to your inbox.
            </p>
          </div>
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
      <div className="">
        <hr
          width="80%"
          className="mx-[auto] bg-black dark:bg-[#CCCCCC] h-[1.5px] "
        />
        <p className="text-black dark:text-[#CCCCCC] ml-[152px] my-[20px]">
          NFT Market. Use this template freely.
        </p>
      </div>
    </div>
  );
};

export default Footer;
