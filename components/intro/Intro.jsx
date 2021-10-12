/* eslint-disable react/no-unescaped-entities */
import { init } from "ityped";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Xavier from "/public/assets/xavier.svg";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1800,
      backSpeed: 70,
      strings: ["Software Developer", "Tech Enthusiast", "Superhero"],
    });
  }, []);

  return (
    <section
      className="sections justify-start lg:justify-between flex flex-col xl:flex-row items-center w-full h-screen container"
      id="intro"
    >
      <div className="w-full h-3/5 lg:h-full flex items-center justify-center">
        <div className="relative w-full h-full md:h-4/5">
          <Image
            priority
            alt="xavier"
            layout="fill"
            objectFit="fill"
            quality="100"
            src={Xavier}
            className=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start lg:justify-center h-2/5 lg:h-full w-full">
        <div className="flex flex-col justify-start lg:justify-center items-center w-full h-3/5 space-y-1">
          <h2 className="text-red-400 text-3xl font-semibold">welcome, i'm</h2>
          <h1 className="sm:text-3xl text-5xl md:text-6xl font-semibold font-raleway text-center">
            Xavier Ricardo
          </h1>
          <h3
            ref={textRef}
            className="text-purple-300 text-2xl font-semibold h-3.5 mb-3"
          />
        </div>
        <Link href="#portfolio" className="" passHref>
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
