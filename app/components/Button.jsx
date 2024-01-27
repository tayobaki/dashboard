"use client";

import { useState, useRef, useEffect } from "react";
import user from "@/assets/user.png";
import arrow from "@/assets/arrowdown.svg";
import Image from "next/image";

export default function Button() {
  const [active, setActive] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleRemove = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleRemove);

    return () => {
      document.removeEventListener("click", handleRemove);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        onClick={() => setActive((prev) => !prev)}
        className="border hover:border-black/50 cursor-pointer duration-300 rounded-full border-black/15 dark:hover:border-white/60 dark:border-white/30 p-2 flex justify-between items-center gap-3"
      >
        <Image
          src={user}
          width={25}
          height={25}
          alt="user"
          className=" rounded-full"
        />
        <div className="sm:flex items-center gap-2 sm:text-xs text-[9px] hidden">
          <div className="flex flex-col gap-0.5">
            <h1>Justin Bergson</h1>
            <small>Justin@gmail.com</small>
          </div>
          <Image src={arrow} width={15} height={15} alt="arrowDown" />
        </div>
      </div>

      <>
        {active ? (
          <div className="absolute top-[120%] w-56 dark:backdrop-blur-3xl right-0 sm:left-0 sm:w-full rounded-lg dark:bg-black/30 z-50 bg-white border border-gray-300 dark:border-white/35 shadow-inner">
            <ul className=" py-4">
              <li className="px-4 py-2 cursor-pointer hover:bg-stone-500/35 duration-300">
                Profile
              </li>
              <li className="px-4 py-2 cursor-pointer hover:bg-stone-500/35 duration-300">
                Settings
              </li>
              <li className="px-4 py-2 cursor-pointer hover:bg-stone-500/35 duration-300">
                Logout
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </>
    </>
  );
}
