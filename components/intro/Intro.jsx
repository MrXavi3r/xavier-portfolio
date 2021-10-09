import { init } from "ityped";
import { useRef, useEffect } from "react";
import Link from "next/Link";
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
      className="sections md:justify-center md:flex md:items-center md:w-full container"
      id="intro"
    >
      <div className="md:w-full flex items-center justify-center">
        <div style={{ position: "relative", width: "100%", height: "80vh" }}>
          <Image
            priority
            alt="xavier"
            layout="fill"
            objectFit="fill"
            quality="100"
            src={Xavier}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-around md:h-96 w-full">
        <div className="flex flex-col justify-center items-center w-full h-full space-y-2">
          <h2 className="text-red-400 text-3xl font-semibold">welcome, im</h2>
          <h1 className="text-5xl font-semibold font-raleway">
            Xavier Ricardo
          </h1>
          <h3
            ref={textRef}
            className="text-purple-300 text-2xl font-semibold h-3.5 mb-3"
          />
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
