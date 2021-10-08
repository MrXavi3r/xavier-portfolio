export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center fixed w-56 h-screen top-15 -right-56 bg-indigo-900 z-50 transition-all duration-1000 ease-in-out " +
        (menuOpen && "active right-0")
      }
    >
      <ul className="">
        <li
          onClick={() => setMenuOpen(false)}
          className="text-white text-xl mb-6 font-raleway cursor-pointer"
        >
          <a href="#intro">Home</a>
        </li>
        <li
          onClick={() => setMenuOpen(false)}
          className="text-white text-xl mb-6 font-raleway cursor-pointer"
        >
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          onClick={() => setMenuOpen(false)}
          className="text-white text-xl mb-6 font-raleway cursor-pointer"
        >
          <a href="#showcase">Showcase</a>
        </li>
        <li
          onClick={() => setMenuOpen(false)}
          className="text-white text-xl mb-6 font-raleway cursor-pointer"
        >
          <a href="#about">About</a>
        </li>
        <li
          onClick={() => setMenuOpen(false)}
          className="text-white text-xl mb-6 font-raleway cursor-pointer"
        >
          <a href="#skills">Skills</a>
        </li>
        <li
          onClick={() => setMenuOpen(false)}
          className="text-white text-xl mb-6 font-raleway cursor-pointer"
        >
          <a href="#testimonials">Testimonials</a>
        </li>
        <li
          onClick={() => setMenuOpen(false)}
          className="text-white text-xl mb-6 font-raleway cursor-pointer"
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
