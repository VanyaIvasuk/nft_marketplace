import React from "react";
import first_image from "../assets/Image.png";
import second_image from "../assets/ImagePlaceholder2.png";
import third_image from "../assets/ImagePlaceholder1.png";
import fourth_image from "../assets/NFTHighlight.png";

const DiscoverNFT = () => {
  let content_arr = [
    {
      image: first_image,
      heading: "Distant Galaxy",
      discription: "MoonDancer",
    },
    {
      image: second_image,
      heading: "NebulaKid ",
      discription: "Life On Edena",
    },
    {
      image: third_image,
      heading: "AstroFiction",
      discription: "Spaceone",
    },
  ];

  return (
    <div className="mt-[100px]">
      <div className="flex justify-between mx-[190px]">
        <div>
          <h1 className="text-[38px] font-bold text-black dark:text-white">
            Discover More NFTs
          </h1>
          <p className="text-[22px] text-black dark:text-white">
            Explore new trending NFTs
          </p>
        </div>
        <div>
          <button className="text-[16px]  w-[187px] h-[60px] border-2 border-[#A259FF] rounded-[20px] text-black dark:text-white font-bold mt-[15px]">
            See All
          </button>
        </div>
      </div>
      <div className="flex justify-between mx-[190px] mt-[50px]">
        {content_arr.map((content) => {
          return (
            <div className="w-[330px] h-[469px] bg-white dark:bg-[#3B3B3B] rounded-[20px] border-2 border-black  dark:border-[#3B3B3B]">
              <img src={content.image} />
              <div className="mt-[15px] ml-[20px]">
                <h1 className="text-[22px] text-black dark:text-white font-bold">
                  {content.heading}
                </h1>
                <p className="text-[16px] text-black dark:text-white">
                  {content.discription}
                </p>
              </div>
              <div className="flex justify-between mx-[20px] mt-[15px]">
                <div className="flex  flex-col">
                  <span className="text-[12px] text-[black] dark:text-[#858584]">
                    Price
                  </span>
                  <span className="text-[16px] text-[black] font-bold dark:text-[white]">
                    1.63 ETH
                  </span>
                </div>
                <div className="flex  flex-col">
                  <span className="text-[12px] text-[black] dark:text-[#858584]">
                    Highest Bid
                  </span>
                  <span className="text-[16px] text-[black] font-bold dark:text-[white]">
                    0.33 wETH
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <img
          src={fourth_image}
          className="w-[100%] h-[660px] mt-[90px] dark:shadow-[0px_-5px_30px_white] shadow-[0px_-5px_30px_black]"
        />
      </div>
    </div>
  );
};

export default DiscoverNFT;
