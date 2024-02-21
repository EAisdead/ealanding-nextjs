import Link from "next/link";
import Image from "next/image";
import EAlogo from "@/app/assets/EAthink.png";
import handleScroll from "./handleScroll";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <>
      <div
        className="flex flex-col bg-red-600 top-0 z-20 fixed h-full w-[80%] sm:w-[60%]
        transition-all .3s ease-in-out "
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          right: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button
          className="absolute right-0 p-3 hover:text-black transition-colors duration-300"
          onClick={toggle}
        >
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 text-xl mt-16 text-center">
          <Link
            href={"#about"}
            onClick={toggle}
            className="hover:bg-red-700 h-16 inline-block p-4 transition-all duration-300 ease-in-out hover:text-2xl"
          >
            About me
          </Link>
          <Link
            href={"#projects"}
            onClick={toggle}
            className=" hover:bg-red-700 h-16 inline-block p-4 transition-all duration-300 ease-in-out hover:text-2xl"
          >
            Projects
          </Link>
          <Link
            href={"#contact"}
            onClick={toggle}
            className=" hover:bg-red-700 inline-block h-16 p-4 transition-all duration-300 ease-in-out hover:text-2xl"
          >
            Contact
          </Link>
        </div>
        <div className="w-32 h-32 absolute right-0 bottom-0">
          <Image src={EAlogo} alt="EA" className="w-32 h-32"></Image>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
