import React, { useRef, useState } from "react";
import first_image from "../assets/ArtistAvatar1.png";
import second_image from "../assets/ArtistAvatar.png";
import third_image from "../assets/Asset1221.png";
import fourth_image from "../assets/Asset1222.png";
import fifth_image from "../assets/Avatar3.png";
import sixth_image from "../assets/Asset122.png";
import seventh_image from "../assets/Asset1222.png";
import eighth_image from "../assets/Asset1223.png";
import nineth_image from "../assets/Asset1224.png";
import tenth_image from "../assets/Avatar.png";
import eleventh_image from "../assets/Avatar1.png";
import twelveth_image from "../assets/Avatar2.png";

const TopArtists = () => {
  let content_arr = [
    {
      heading: "Keepitreal",
      image: first_image,
    },
    {
      heading: "DigiLab",
      image: second_image,
    },
    {
      heading: "GravityOne",
      image: third_image,
    },
    {
      heading: "Juanie",
      image: fourth_image,
    },
    {
      heading: "BlueWhale",
      image: fifth_image,
    },
    {
      heading: "mr fox",
      image: sixth_image,
    },
    {
      heading: "Shroomie",
      image: seventh_image,
    },
    {
      heading: "robotica",
      image: eighth_image,
    },
    {
      heading: "RustyRobot",
      image: nineth_image,
    },
    {
      heading: "animakid",
      image: tenth_image,
    },
    {
      heading: "Dotgu",
      image: eleventh_image,
    },
    {
      heading: "Ghiblier",
      image: twelveth_image,
    },
  ];

  return (
    <>
      <div className="ml-[190px] text-black dark:text-white mt-[150px] flex justify-between">
        <div className="">
          <h1 className="text-[38px]">Top creators</h1>
          <p className="text-[22px]">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <div className="mr-[190px] mt-[17px]">
          <button className="w-[247px] h-[60px] text-[16px] border-[3px] rounded-[20px] border-[#A259FF]">
            View Rankings
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap w-[80%] h-[850px] ml-[140px] mt-[50px]">
        {content_arr.map((content) => {
          return (
            <div className=" text-black dark:text-white mb-[50px] ml-[55px]  w-[240px] h-[240px] dark:bg-[#3B3B3B] border-2 border-black dark:border-[#3B3B3B] rounded-[20px] pt-[17px]">
              <div className="flex justify-between">
                <img
                  className="w-[120px] h-[120px] rounded-[100px] mr-[60px] ml-[60px]"
                  src={content.image}
                ></img>
              </div>
              <div className=" mt-[20px]">
                <h1 className="text-[22px] font-bold text-center">
                  {content.heading}
                </h1>
                <p className="text-black font-medium dark:text-[#858584] text-center">
                  Total Sales:
                  <span className="text-black dark:text-white ml-[10px] ">
                    34.53 ETH
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopArtists;
