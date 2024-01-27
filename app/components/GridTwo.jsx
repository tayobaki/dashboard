import Image from "next/image";
import { Fragment } from "react";
import { averageSales, order, refund, totalIncome } from "@/index";

export default function GridTwo() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 items-start justify-between w-full">
      <div className="rounded p-4  border dark:border-[#000] bg-white dark:bg-[#1b1919] dark:text-white shadow-md">
        <div className="flex items-center justify-between flex-1">
          {order.map((item, idx) => (
            <Fragment key={idx}>
              {item.image.map((item, idx) => (
                <div key={idx} className="">
                  {item.img}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
        <div className="mt-5 flex flex-col justify-between dark:text-white text-gray-500">
          {order.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2 justify-between">
              <h1 className="">{item.title}</h1>
              <strong className="text-black dark:text-white text-lg">
                {item.price}
              </strong>
              <div className="">
                {item.month.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs"
                  >
                    <button className=" bg-[#34caa5]/20 rounded-full  px-3 py-0.5 flex items-center justify-center text-[#34caa5]">
                      {item.percent}
                    </button>
                    <span>{item.prev}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded p-4 border dark:border-[#000] bg-white dark:bg-[#1b1919] dark:text-white shadow-md">
        <div className="flex items-center justify-between flex-1">
          {refund.map((item, idx) => (
            <Fragment key={idx}>
              {item.image.map((item, idx) => (
                <div key={idx} className="">
                  {item.img}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
        <div className="mt-5 flex flex-col justify-between dark:text-white text-gray-500">
          {refund.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2 justify-between">
              <h1 className="">{item.title}</h1>
              <strong className="text-black dark:text-white text-lg">
                {item.price}
              </strong>
              <div className="">
                {item.month.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs"
                  >
                    <button className=" bg-[#34caa5]/20 rounded-full px-3 py-0.5 flex items-center justify-center text-[#34caa5]">
                      {item.percent}
                    </button>
                    <span>{item.prev}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded p-4 border dark:border-[#000] bg-white dark:bg-[#1b1919] dark:text-white shadow-md">
        <div className="flex items-center justify-between flex-1">
          {averageSales.map((item, idx) => (
            <Fragment key={idx}>
              {item.image.map((item, idx) => (
                <div key={idx} className="">
                  {item.img}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
        <div className="mt-5 flex flex-col justify-between dark:text-white text-gray-500">
          {averageSales.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2 justify-between ">
              <h1 className="">{item.title}</h1>
              <strong className="text-black dark:text-white text-lg">
                {item.price}
              </strong>
              <div className="">
                {item.month.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs"
                  >
                    <button className=" bg-[#34caa5]/20 rounded-full px-3 py-0.5 flex items-center justify-center text-[#34caa5]">
                      {item.percent}
                    </button>
                    <span>{item.prev}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded p-4 border dark:border-[#000] bg-white dark:bg-[#1b1919] dark:text-white shadow-md">
        <div className="flex items-center justify-between flex-1">
          {totalIncome.map((item, idx) => (
            <Fragment key={idx}>
              {item.image.map((item, idx) => (
                <div key={idx} className="">
                  {item.img}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
        <div className="mt-5 flex flex-col justify-between dark:text-white text-gray-500">
          {totalIncome.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2 justify-between">
              <h1 className="">{item.title}</h1>
              <strong className="text-black dark:text-white text-lg">
                {item.price}
              </strong>
              <div className="">
                {item.month.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs"
                  >
                    <button className=" bg-[#34caa5]/20 rounded-full px-3 py-0.5 flex items-center justify-center text-[#34caa5]">
                      {item.percent}
                    </button>
                    <span>{item.prev}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
