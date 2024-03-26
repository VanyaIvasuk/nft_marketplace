import React from "react";
import mainImage from "../assets/ImagePlaceholder.png";

const Header = () => {
  return (
    <div className=" flex justify-between mx-[190px] mt-[80px] mb-[120px] text-black bg-white dark:bg-[#2B2B2B] dark:text-white">
      <div className="w-[400px] h-[544px]">
        <h1 className="text-[67px] font-bold leading-[80px]">
          Discover digital art & Collect NFTs
        </h1>
        <p className="my-[15px] font-medium leading-[30px]">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <button
          className="mb-[15px] mt-[20px] text-[22px] bg-[#A259FF] rounded-[10px] px-[40px] 
                          py-[10px]  font-medium "
        >
          Get Started
        </button>
        <div className="flex justify-between mt-[20px]">
          <div>
            <h1 className="font-bold text-[25px]">240k+</h1>
            <p>Total Sale</p>
          </div>
          <div>
            <h1 className="font-bold text-[25px]">100k+</h1>
            <p>Auctions</p>
          </div>
          <div>
            <h1 className="font-bold text-[25px]">240k+</h1>
            <p>Artists</p>
          </div>
        </div>
      </div>
      <div className="w-[510px] h-[480px] mt-[10px]  rounded-[20px]">
        <img
          src={mainImage}
          className="h-[401px] rounded-t-[20px]"
          alt="photo"
        />
        <div className="bg-white dark:bg-[#3B3B3B] h-[80px] pt-[10px] pl-[20px] border-b-2 border-l-2 border-r-2  border-black dark:border-white rounded-b-[20px]">
          <h1 className="text-[22px] font-bold">Space Walking</h1>
          <p className="text-[16px]">Animakid</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
