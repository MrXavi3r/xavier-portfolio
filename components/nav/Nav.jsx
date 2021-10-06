import Image from "next/image";
import githubLogo from "../../assets/github.png";
import phoneLogo from "../../assets/phone-call.png";

const Nav = () => {
  return (
    <nav className="w-full bg-white flex px-6 pt-3">
      <ul className="flex items-center w-4/5">
        <li className="">
          <h3 className="text-3xl font-bold text-indigo-900 mr-8">Xavier</h3>
        </li>
        <a
          href="http://github.com/mrXavi3r"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6"
        >
          <li>
            <Image
              src={githubLogo}
              className="pt-4"
              alt="github logo"
              width={15}
              height={15}
            />{" "}
            <span className="font-semibold">github.com/MrXavi3r</span>
          </li>
        </a>
        <li className="">
          <Image src={phoneLogo} alt="github logo" width={13} height={13} />{" "}
          <span className="font-semibold opacity-0 hover:opacity-100">
            954-296-6361
          </span>
        </li>
      </ul>
      <div className="flex flex-col justify-between w-8 h-8 ml-auto">
        <span className="w-full h-1 bg-indigo-900"></span>
        <span className="w-full h-1 bg-indigo-900"></span>
        <span className="w-full h-1 bg-indigo-900"></span>
      </div>
    </nav>
  );
};

export default Nav;
