import React, { useState } from "react";
import sun_image from "../assets/sun.svg"
import moon_image from "../assets/moon.svg"

const MenuList = () => {

  const [themeIcon, setThemeIcon] = useState(localStorage.theme)
 
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const clickHendler = () => {
    if (!localStorage.theme) {
      localStorage.theme = "dark";
    }
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.add("dark");
      console.log(1);
      setThemeIcon("light")
    } else if (localStorage.theme === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.remove("dark");
      console.log(2);
      setThemeIcon("dark")
    }
  };
  let Icon = themeIcon === "dark" ?  sun_image : moon_image;
  return (
    <div className=" w-[100%] h-[40px] border-b-5 border-black">
      <div className="flex justify-between  font-medium h-[60px] w-[100%] fixed top-0 left-0 shadow-[0_5px_30px_gray]  dark:shadow-[0_5px_30px_black] text-black bg-white  dark:bg-[#2B2B2B] dark:text-white">
        <div className="my-[8px] ">
          <h1 className="text-[30px] tracking-[2px] ml-[70px] ">
            NFT Marketplace
          </h1>
        </div>
        <div className="flex justify-between my-[15px] mr-[70px]">
          <p className="text-[20px] pr-[25px]">Marketplace</p>
          <p className="text-[20px] pr-[25px]">Rankings</p>
          <p className="text-[20px] pr-[25px]">Connect a wallet</p>
          <button
            className="text-[20px] bg-[#A259FF] px-[25px] py-[5px] rounded-[10px] h-[40px] w-[60px] mt-[-5px] mr-[25px]"
            onClick={clickHendler}
          >
            <img src={Icon} alt="ThemeIcon" width={20}  />
          </button>
          <button className="text-[20px] bg-[#A259FF] px-[20px] py-[5px] rounded-[10px] h-[40px] mt-[-5px]">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
