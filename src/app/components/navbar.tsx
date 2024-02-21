import Link from "next/link";
import handleScroll from "./handleScroll";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center md:hidden hover:text-black transition-colors duration-300 mr-8"
        onClick={toggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
          />
        </svg>
      </button>
      <div className="hidden justify-end md:flex text-xl">
        <Link
          href={"#about"}
          onClick={handleScroll}
          className="hover:bg-red-700 h-16 inline-block p-4 transition-colors duration-300 ease-in-out"
        >
          About me
        </Link>
        <Link
          href={"#projects"}
          onClick={handleScroll}
          className="mx-8 hover:bg-red-700 h-16 inline-block p-4 transition-colors duration-300 ease-in-out"
        >
          Projects
        </Link>
        <Link
          href={"#contact"}
          onClick={handleScroll}
          className="mr-8 hover:bg-red-700 inline-block h-16 p-4 transition-colors duration-300 ease-in-out"
        >
          Contact
        </Link>
      </div>
    </>
  );
};
export default Navbar;
