import { tableData } from "@/index";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function TableGrid() {
  return (
    <div>
      <div className="flex items-center justify-between flex-1">
        <h1>Last Orders</h1>
        <span className="text-[#34CAA5]/50 cursor-not-allowed border-b font-medium border-[#34CAA5]">
          See All
        </span>
      </div>

      <>
        <Table className=" mt-5">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className="">
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead className=" hidden md:flex lg:hidden xl:flex  items-center justify-left">
                Date
              </TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right md:text-left">Status</TableHead>
              <TableHead className="text-right hidden md:flex lg:flex items-center justify-end ">
                Invoice
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className=" dark:text-slate-600 font-semibold">
            {tableData.map((item, idx) => (
              <TableRow key={idx} className=" h-[20px]">
                <TableCell>{item.user}</TableCell>
                <TableCell className=" hidden md:flex lg:hidden xl:flex  items-center justify-left">
                  {item.date}
                </TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell
                  className={`${
                    item.status === "Paid" ? " text-green-400" : " text-red-400"
                  }  font-light text-right md:text-left`}
                >
                  {item.status}
                </TableCell>
                <TableCell className="hidden md:flex text-right lg:flex cursor-pointer justify-end  dark:hover:text-white/45 dark:text-slate-600 hover:text-black/60 text-black duration-300">
                  {item.invoice}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    </div>
  );
}
