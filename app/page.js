import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

export default function Home() {
  return (
    <main className=" dark:bg-[#000000] ">
      <div className="">
        <SideBar />
        <div
          className=" flex-grow ml-14 md:ml-20 pb-10
         "
        >
          <NavBar />
          <Main />
        </div>
      </div>
    </main>
  );
}
