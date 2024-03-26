import React from "react";
import first_image from "../assets/PhotoIconArt.png";
import second_image from "../assets/PhotoIcon.png";
import third_image from "../assets/CategoryIconMusic.png";
import fourth_image from "../assets/PhotoIcon2.png";
import fifth_image from "../assets/PhotoIcon3.png";
import sixth_image from "../assets/CategoryIcon.png";
import seventh_image from "../assets/CategoryIcon1.png";
import eighth_image from "../assets/PhotoIconPortal.png";

const BrowseCategories = () => {
  let content_arr = [
    {
      image: first_image,
      heading: "Art",
    },
    {
      image: second_image,
      heading: "Collectibles",
    },
    {
      image: third_image,
      heading: "Music",
    },
    {
      image: fourth_image,
      heading: "Photography",
    },
    {
      image: fifth_image,
      heading: "Video",
    },
    {
      image: sixth_image,
      heading: "Utility",
    },
    {
      image: seventh_image,
      heading: "Sport",
    },
    {
      image: eighth_image,
      heading: "Virtual Worlds",
    },
  ];
  return (
    <div className="ml-[190px] mt-[150px]">
      <div>
        <h1 className="text-black dark:text-white text-[38px] font-bold">
          Browse Categories
        </h1>
      </div>
      <div className=" flex flex-wrap w-[90%] h-[760px] mt-[50px]">
        {content_arr.map((content) => {
          return (
            <div className="w-[240px] h-[316px] bd-white dark:bg-[#3B3B3B] rounded-[20px]  mb-[50px] mr-[55px] border-2 border-black dark:border-[#3B3B3B]">
              <img src={content.image} className="w-[240px] h-[240px]" />
              <h1 className="text-black dark:text-white text-[22px] my-[15px] ml-[25px] font-bold">
                {content.heading}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseCategories;
