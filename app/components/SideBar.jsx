import { NavItemsTop, NavItemsBottom } from "@/index";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Logo from "@/assets/Logo.svg";
import ThemeSwitch from "../ThemeSwitch";
import Active from "./Active";

export default function SideBar() {
  return (
    <aside className="fixed top-0 border-r dark:bg-[#111827] dark:border-white/20 border-black/15 left-0 w-14 md:w-20 h-full bg-[#F7F8FA] shadow-2xl flex flex-col py-5">
      <div className="flex flex-col gap-y-1 items-center flex-1 ">
        <Image src={Logo} width={40} height={40} alt="Logo" />

        {NavItemsTop.map((item, idx) => (
          <div
            key={idx}
            className="h-10 w-full flex items-center justify-center "
          >
            <div className=" relative w-full flex items-center justify-center">
              <Active item={item} idx={idx} />
            </div>
          </div>
        ))}
        <div className=" rounded-full bg-white dark:bg-white/10  shadow-xl px-1 py-2 flex flex-col items-center justify-center gap-2">
          <ThemeSwitch />
        </div>
      </div>
      <div className="">
        {NavItemsBottom.map((item, idx) => (
          <div
            key={idx}
            className=" p-2 h-10 my-1 w-full flex items-center justify-center"
          >
            <Image
              src={item.title}
              width={25}
              height={25}
              alt="bottomNavItems"
              className=" my-1 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </aside>
  );
}
