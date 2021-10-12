import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Nav = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav
      className={
        "sticky top-0 z-50 transition duration-2000 ease w-full flex items-center bg-white px-4 py-3 " +
        (menuOpen && "bg-indigo-900 text-white")
      }
    >
      <ul className="flex items-center w-4/5 gap-x-8">
        <li className="">
          <Link href="/" passHref>
            <h3
              className={
                "transition duration-2000 text-3xl font-bold mr-4 cursor-pointer " +
                (menuOpen ? "text-white" : "text-indigo-900")
              }
            >
              Xavier
            </h3>
          </Link>
        </li>
        <a
          href="http://github.com/mrXavi3r"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6"
        >
          <li className="hidden md:block">
            <FontAwesomeIcon icon={faGithub} className="mr-1" />{" "}
            <span className="font-semibold">github.com/MrXavi3r</span>
          </li>
        </a>
        <li className="hidden md:block">
          <FontAwesomeIcon icon={faPhone} className="mr-1" />{" "}
          <span className="font-semibold opacity-0 hover:opacity-100">
            954-296-6361
          </span>
        </li>
      </ul>
      <div
        className="flex flex-col justify-between w-8 h-7 ml-auto menu cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={
            "transition duration-2000 ease w-full h-1 " +
            (menuOpen
              ? "bg-white transform rotate-45 origin-bottom-left"
              : "bg-indigo-900")
          }
        ></span>
        <span
          className={
            "w-full h-1 bg-indigo-900 transition-all duration-2000 ease " +
            (menuOpen && "opacity-0")
          }
        ></span>
        <span
          className={
            "w-full h-1 transition duration-2000 ease " +
            (menuOpen
              ? "bg-white transform -rotate-45 origin-top-left"
              : "bg-indigo-900")
          }
        ></span>
      </div>
    </nav>
  );
};

export default Nav;
