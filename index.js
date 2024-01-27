import Category from "@/assets/category.svg";
import profile from "@/assets/profile.svg";
import trendup from "@/assets/trend-up.svg";
import brokenBox from "@/assets/broken-box.svg";
import discount from "@/assets/discount.svg";
import infoCircle from "@/assets/info-circle.svg";
import arrowRight from "@/assets/arrow-right.svg";
import settings from "@/assets/settings.svg";
import logout from "@/assets/logout.svg";
import bulkbox from "@/assets/bulk-box.png";
import rotate from "@/assets/3d-rotate.png";
import cart from "@/assets/shopping-cart.png";
import coin from "@/assets/coin.png";
import chart from "@/assets/chart.svg";
import greenchart from "@/assets/greenchart.svg";
import download from "@/assets/download.svg";
import Image from "next/image";

import { faker } from "@faker-js/faker";

export const NavItemsTop = [
  {
    svg: Category,
    id: "Category",
  },
  {
    svg: profile,
    id: "Profile",
  },
  { svg: brokenBox, id: "box" },
  { svg: trendup, id: "trend" },
  { svg: discount, id: "discount" },
  { svg: infoCircle, id: "info" },
];

export const NavItemsBottom = [
  {
    title: arrowRight,
  },
  {
    title: settings,
  },
  {
    title: logout,
  },
];

export const order = [
  {
    title: "Total Order",
    price: 350,
    month: [
      {
        percent: "23.5%",
        prev: "vs. previous month",
      },
    ],
    image: [
      {
        img: (
          <div className="border p-1 rounded-full border-white/20">
            <Image
              src={bulkbox}
              width={25}
              height={25}
              alt="bulkBox"
              className=""
            />
          </div>
        ),
      },
      {
        img: (
          <div className="">
            <Image src={greenchart} width={104} height={30} alt="Chart" />
          </div>
        ),
      },
    ],
  },
];

export const refund = [
  {
    title: "Total Refund",
    price: 270,
    month: [
      {
        percent: "23.5%",
        prev: "vs. previous month",
      },
    ],
    image: [
      {
        img: (
          <div className="border p-1 rounded-full border-white/20">
            <Image
              src={rotate}
              width={25}
              height={25}
              alt="bulkBox"
              className=""
            />
          </div>
        ),
      },
      {
        img: (
          <div className="">
            <Image src={chart} width={104} height={30} alt="Chart" />
          </div>
        ),
      },
    ],
  },
];

export const averageSales = [
  {
    title: "Average Sales",
    price: 1567,
    month: [
      {
        percent: "23.5%",
        prev: "vs. previous month",
      },
    ],
    image: [
      {
        img: (
          <div className="border p-1 rounded-full border-white/20">
            <Image
              src={cart}
              width={25}
              height={25}
              alt="bulkBox"
              className=""
            />
          </div>
        ),
      },
      {
        img: (
          <div className="">
            <Image src={chart} width={104} height={30} alt="Chart" />
          </div>
        ),
      },
    ],
  },
];

export const totalIncome = [
  {
    title: "Total Income",
    price: "$350.00",
    month: [
      {
        percent: "23.5%",
        prev: "vs. previous month",
      },
    ],
    image: [
      {
        img: (
          <div className="border p-1 rounded-full border-white/20">
            <Image
              src={coin}
              width={25}
              height={25}
              alt="bulkBox"
              className=""
            />
          </div>
        ),
      },
      {
        img: (
          <div className="">
            <Image src={greenchart} width={104} height={30} alt="Chart" />
          </div>
        ),
      },
    ],
  },
];
export const tableData = [
  {
    user: (
      <div className="flex items-center gap-3">
        <Image
          src={faker.image.avatarLegacy()}
          width={20}
          height={20}
          className=" rounded-full"
        />
        <h1>{faker.person.fullName()}</h1>
      </div>
    ),
    date: "Nov 15, 2023",
    price: faker.finance.amount({ min: 5, max: 6, dec: 2, symbol: "$" }),
    status: "Paid",
    invoice: (
      <div className="flex items-center gap-2">
        <Image src={download} width={20} height={20} alt="download" />
        <h2>View</h2>
      </div>
    ),
  },
  {
    user: (
      <div className="flex items-center gap-3">
        <Image
          src={faker.image.avatarLegacy()}
          width={20}
          height={20}
          className=" rounded-full"
        />
        <h1>{faker.person.fullName()}</h1>
      </div>
    ),
    date: "Nov 15, 2023",
    price: faker.finance.amount({ min: 5, max: 10, dec: 2, symbol: "$" }),
    status: "Refund",
    invoice: (
      <div className="flex items-center gap-2">
        <Image src={download} width={20} height={20} alt="download" />
        <h2>View</h2>
      </div>
    ),
  },
  {
    user: (
      <div className="flex items-center gap-3">
        <Image
          src={faker.image.avatarLegacy()}
          width={20}
          height={20}
          className=" rounded-full"
        />
        <h1>{faker.person.fullName()}</h1>
      </div>
    ),
    date: "Nov 15, 2023",
    price: faker.finance.amount({ min: 5, max: 10, dec: 2, symbol: "$" }),
    status: "Paid",
    invoice: (
      <div className="flex items-center gap-2">
        <Image src={download} width={20} height={20} alt="download" />
        <h2>View</h2>
      </div>
    ),
  },
  {
    user: (
      <div className="flex items-center gap-3">
        <Image
          src={faker.image.avatarLegacy()}
          width={20}
          height={20}
          className=" rounded-full"
        />
        <h1>{faker.person.fullName()}</h1>
      </div>
    ),
    date: "Nov 15, 2023",
    price: faker.finance.amount({ min: 5, max: 10, dec: 2, symbol: "$" }),
    status: "Paid",
    invoice: (
      <div className="flex items-center gap-2">
        <Image src={download} width={20} height={20} alt="download" />
        <h2>View</h2>
      </div>
    ),
  },
  {
    user: (
      <div className="flex items-center gap-3">
        <Image
          src={faker.image.avatarLegacy()}
          width={20}
          height={20}
          className=" rounded-full"
        />
        <h1>{faker.person.fullName()}</h1>
      </div>
    ),
    date: "Nov 15, 2023",
    price: faker.finance.amount({ min: 5, max: 10, dec: 2, symbol: "$" }),
    status: "Refund",
    invoice: (
      <div className="flex items-center gap-2">
        <Image src={download} width={20} height={20} alt="download" />
        <h2>View</h2>
      </div>
    ),
  },
];
