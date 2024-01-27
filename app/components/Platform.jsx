export default function Platform() {
  return (
    <div>
      <div className="flex items-center justify-between flex-1">
        <h1>Top Platform</h1>
        <span className="text-[#34CAA5]/50 border-b cursor-not-allowed font-medium border-[#34CAA5]">
          See All
        </span>
      </div>
      <div className="mt-5  space-y-3">
        <div className="flex flex-col gap-2 ">
          <h1 className=" leading-[48px] flex items-center text-black dark:text-stone-600 font-black">
            Book Bazaar
          </h1>
          <div className=" bg-[#F5F5F5] relative after:absolute after:z-30 after:shadow-2xl  after:bg-[#6160DC] after:h-full shadow-inner after:rounded-full after:left-0 after:w-1/2 rounded-full z-50 w-full h-3 " />
          <div className="flex items-center justify-between flex-1 mt-1 text-gray-400">
            <h1>$2,500,000</h1>
            <span>+15%</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className=" leading-[48px] flex items-center text-black dark:text-stone-600 font-black">
            Artisan Aisle
          </h1>
          <div className=" bg-[#F5F5F5] relative after:absolute after:z-30 after:shadow-2xl  after:bg-[#54C5EB] after:h-full shadow-inner after:rounded-full after:left-0 after:w-1/3 rounded-full z-50 w-full h-3 " />
          <div className="flex items-center justify-between flex-1 mt-1 text-gray-400">
            <h1>$1,800,000</h1>
            <span>+1%</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className=" leading-[48px] flex items-center text-black dark:text-stone-600 font-black ">
            Toy Troop
          </h1>
          <div className=" bg-[#F5F5F5] relative after:absolute after:z-30 after:shadow-2xl  after:bg-[#FFB74A] after:h-full shadow-inner after:rounded-full after:left-0 after:w-2/3 rounded-full z-50 w-full h-3 " />
          <div className="flex items-center justify-between flex-1 mt-1 text-gray-400 ">
            <h1>$1,200,000</h1>
            <span>+8%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
