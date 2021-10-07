import Image from "next/image";
import React from "../../public/assets/react-2.svg";
import Node from "../../public/assets/nodejs.svg";
import Sass from "../../public/assets/sass.svg";
import MongoDb from "../../public/assets/mongodb.svg";

const Skills = () => {
  return (
    <section className="px-6 mb-6" id="skills">
      <div className="heading-block">
        <h2 className="font-normal  text-3xl text-center pb-4 font-raleway">
          Software Development With Purpose
        </h2>
        <p className="text-center pb-4">
          Javascript is the core of my engineering skill-set. Every branch of
          programming I explore serves to strengthen that.
        </p>
      </div>
      <div className="skill-container grid grid-cols-1 gap-4 justify-center items-center">
        <div className="p-3 flex flex-col bg-indigo-100 h-full">
          <Image
            src={React}
            alt="react-logo"
            width={80}
            height={80}
            className=""
          />
          <h4 className="font-normal text-xl text-center py-2 font-raleway">
            Powerful Frontend Technology
          </h4>
          <p className="font-sans font-normal">
            ReactJs is my strongest Javascript library. Modular,
            easily-reuseable component architecture and virtual DOM are what
            truly set React apart. Im familiar with class and function
            components, hooks, context, & router.
          </p>
        </div>
        <div className="p-3 flex flex-col bg-gray-400 h-full">
          <Image src={Node} alt="node.js logo" width={80} height={80} />
          <h4 className="font-normal text-xl text-center py-2 font-raleway">
            Seamless Backend Integration
          </h4>
          <p className="font-sans font-normal">
            Node/ExpressJs is the perfect server side solution for Javascript
            front-ends. Im familiar with creating REST APIs and local servers
            from scratch and interfacing with 3rd party APIs.
          </p>
        </div>
        <div className="p-3 flex flex-col bg-pink-100 h-full">
          <Image src={Sass} alt="sass logo" width={80} height={80} />
          <h4 className="font-normal text-xl font-raleway text-center py-2">
            Attractive Design
          </h4>
          <p className="font-sans font-normal">
            Creating friendly and attractive user interfaces and experiences is
            a cornerstone of web development. For styling, im competent in CSS,
            SCSS and the Bootstrap framework.
          </p>
        </div>
        <div className="p-3 flex flex-col bg-green-100 h-full">
          <Image src={MongoDb} alt="mongoDB logo" width={90} height={90} />
          <h4 className="font-normal text-xl text-center py-2 font-raleway">
            Convenient Database Solutions
          </h4>
          <p className="font-sans font-normal">
            MongoDB is my database of choice for its schema flexibility, cloud
            accessibility, and JSON-like document structure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
