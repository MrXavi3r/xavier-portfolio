import { init } from "ityped";
import { useRef, useEffect } from "react";
import Link from "next/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Xavier from "../../assets/xavier.svg";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1800,
      backSpeed: 70,
      strings: ["Software Developer", "Tech Enthusiast", "Superhero"],
    });
  }, []);

  return (
    <section className="mb-10 container" id="intro">
      <div className="left">
        <div className="imgContainer">
          <Image
            src={Xavier}
            alt="Picture of Xavier"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex flex-col items-center h-60 w-full">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <h2 className="text-red-400 text-3xl font-semibold">welcome, im</h2>
          <h1 className="text-5xl font-semibold">Xavier Ricardo</h1>
          <h3>
            <span
              ref={textRef}
              className="text-purple-300 text-2xl font-semibold"
            ></span>
          </h3>
        </div>
        <Link href="#portfolio" className="">
          <FontAwesomeIcon
            icon={faAngleDown}
            size="2x"
            className="cursor-pointer animate-bounce"
          />
        </Link>
      </div>
    </section>
  );
};

export default Intro;
