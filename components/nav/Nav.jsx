import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav
      className={
        `transition duration-2000 ease w-full flex items-center bg-white px-6 py-3 ` +
        (menuOpen && `bg-indigo-900 text-white`)
      }
    >
      <ul className="flex items-center w-4/5">
        <li className="">
          <h3
            className={
              menuOpen
                ? `text-3xl font-bold mr-8 text-white`
                : `text-3xl font-bold mr-8 text-indigo-900`
            }
          >
            Xavier
          </h3>
        </li>
        <a
          href="http://github.com/mrXavi3r"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6"
        >
          <li>
            <FontAwesomeIcon icon={faCodeBranch} className="mr-1" />{" "}
            <span className="font-semibold">github.com/MrXavi3r</span>
          </li>
        </a>
        <li className="">
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
            menuOpen
              ? "transition duration-2000 ease w-full h-1 bg-white transform rotate-45 origin-bottom-left"
              : "transition duration-2000 ease w-full h-1 bg-indigo-900"
          }
        ></span>
        <span
          className={
            menuOpen
              ? "transition-all duration-2000 ease opacity-0"
              : "transition-all duration-2000 w-full h-1 bg-indigo-900"
          }
        ></span>
        <span
          className={
            menuOpen
              ? "transition duration-2000 ease w-full h-1 bg-white transform -rotate-45 origin-top-left"
              : "transition duration-2000 ease w-full h-1 bg-indigo-900"
          }
        ></span>
      </div>
    </nav>
  );
};

export default Nav;
