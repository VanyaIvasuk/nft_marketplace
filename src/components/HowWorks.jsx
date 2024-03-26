import React from "react";
import first_image from "../assets/Icon.png";
import second_image from "../assets/IconMusic.png";
import third_image from "../assets/Icon1.png";

const HowWorks = () => {
  let content_arr = [
    {
      image: first_image,
      heading: "Setup Your wallet",
      description:
        "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      image: second_image,
      heading: "Create Collection",
      description:
        "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      image: third_image,
      heading: "Start Earning",
      description:
        "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];

  return (
    <div className="mt-[80px] mx-[190px]">
      <div>
        <h1 className="text-[38px] font-bold text-black dark:text-white">
          How it works
        </h1>
        <p className="text-[22px] text-black dark:text-white">
          Find out how to get started
        </p>
      </div>
      <div className="flex justify-between mt-[50px]">
        {content_arr.map((content) => {
          return (
            <div className="w-[330px] h-[439px] bg-white dark:bg-[#3B3B3B] rounded-[20px] border-2 border-black dark:border-[#3B3B3B]">
              <img className="mx-[auto] mt-[10px]" src={content.image} />
              <h1 className="text-[22px] text-black dark:text-white font-bold text-center mt-[15px]">
                {content.heading}
              </h1>
              <p
                className="text-[16px] text-black dark:text-white 
                            text-center mx-[25px] mt-[10px] font-medium"
              >
                {content.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowWorks;
