"use client";

import { useTheme } from "next-themes";
import moon from "@/assets/moon.svg";
import brightness from "@/assets/brightness.svg";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useStateContext } from "@/context/ContextProvider";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { activeMenu, setActiveMenu } = useStateContext();

  // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }

  return (
    <>
      <Image
        onClick={() => {
          setTheme("light");
          setActiveMenu(true);
        }}
        src={brightness}
        width={25}
        height={25}
        alt="moon"
        className={`${
          activeMenu ? "dark:bg-transparent" : "bg-[#34CAA5]  "
        } cursor-pointer rounded-full p-1 bg-[#34CAA5]`}
      />

      <Image
        onClick={() => {
          setTheme("dark");
          setActiveMenu(true);
        }}
        src={moon}
        width={25}
        height={25}
        alt="moon"
        className={`${
          activeMenu ? "dark:bg-pink-500" : " bg-transparent"
        } cursor-pointer rounded-full p-1 bg-transparent`}
      />
      {/* <div className={`${isActive ? activeLink : normalLink}`}>ok</div> */}
    </>
  );
};

export default ThemeSwitch;
