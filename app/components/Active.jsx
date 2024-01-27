"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Active({ item, idx }) {
  const [active, setActive] = useState(false);
  const containerRef = useRef(null);

  const handleClick = (id) => {
    setActive(id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} onClick={() => handleClick(idx)} className="">
      <Image
        src={item?.svg}
        width={item.width || 25}
        height={item.height || 25}
        alt="SideLogos"
        className={`${
          active === idx && " fill-red-400 stroke-red-400 "
        } object-contain cursor-pointer`}
      />
      <div
        // className={`absolute right-0 h-full w-1 rounded-l-full bg-red-300 top-0`}
        className={`${
          active === idx
            ? "bg-black dark:bg-blue-300 absolute right-0 h-full w-1 rounded-l-full top-0"
            : "hidden"
        }`}
      />
    </div>
  );
}
