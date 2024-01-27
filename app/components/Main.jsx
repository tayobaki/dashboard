import Image from "next/image";
import arrowDown from "@/assets/arrowdown.svg";
import GridOne from "./GridOne";
import GridTwo from "./GridTwo";
import TableGrid from "./Table";
import Platform from "./Platform";

export default function Main() {
  return (
    <main className=" mx-4 pt-14 text-sm h-full">
      <div className="main grid grid-flow-row-dense grid-cols-12 gap-4">
        <div className=" rounded-md flex-1 p-4 col-span-full lg:col-span-7 bg-white border dark:border-[#000] border-[#EDF2F7] dark:bg-[#1b1919] dark:text-white shadow-md ">
          <div className="flex items-center justify-between">
            <h1>Sales Trends</h1>
            <div className="flex items-center gap-1">
              <h1 className="hidden sm:block"> Short by:</h1>
              <div className=" border cursor-pointer flex items-center gap-1 border-black/25 dark:border-white/40 sm:px-4 px-2 py-1 rounded-full">
                <span>Weekly</span>
                <>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    className=" stroke-black dark:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Arrow - Down 2">
                      <g id="Iconly/Light-Outline/Arrow---Down-2">
                        <g id="Arrow---Down-2">
                          <path
                            id="Stroke-1"
                            d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z"
                            fill="#0D062D"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </>
              </div>
            </div>
          </div>
          <div className=" mt-5 ">
            <GridOne />
          </div>
        </div>
        <div className=" col-span-full lg:col-span-5">
          <GridTwo />
        </div>
        <div className="rounded border dark:border-[#000] p-4 col-span-full lg:col-span-7 bg-white dark:bg-[#1b1919] dark:text-white shadow-md ">
          <TableGrid />
        </div>
        <div className="rounded p-4 border dark:border-[#000] bg-white col-span-full lg:col-span-5 dark:bg-[#1b1919] dark:text-white shadow-md ">
          <Platform />
        </div>
      </div>
    </main>
  );
}
// grid grid-cols-1 lg:grid-cols-2
