import Image from "next/image";
import React from "../../public/assets/react-2.svg";
import Node from "../../public/assets/nodejs.svg";
import Sass from "../../public/assets/sass.svg";
import MongoDb from "../../public/assets/mongodb.svg";

const Skills = () => {
  return (
    <section className="container px-6 mb-6" id="skills">
      <div className="">
        <h2 className="font-normal text-3xl md:text-4xl lg:text-5xl text-center pb-4 font-raleway">
          Software Development Skills
        </h2>
        {/* <p className="pb-4 md:px-20">
          Javascript is the core of my engineering skill-set. Every branch of
          programming I explore serves to strengthen that.
        </p> */}
      </div>
      <div className="container lg:w-4/5 lg:mx-auto md:mx-auto md:w-4/5 mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 lg:auto-cols-2fr justify-center items-center">
        <div className="p-3 rounded-xl lg:col-span-2 flex flex-col bg-indigo-100 h-full">
          <Image
            src={React}
            alt="react-logo"
            width={80}
            height={80}
            className=""
          />
          <h4 className="font-normal text-xl md:text-2xl text-center py-2 font-raleway">
            Frontend Technology
          </h4>
          <p className="font-sans font-normal md:text-lg text-center">
            ReactJs is my strongest Javascript library. Modular,
            easily-reuseable component architecture and virtual DOM are what
            truly set React apart. Im familiar with class and function
            components, hooks, context, router & Next.js.
          </p>
        </div>
        <div className="p-3 rounded-xl lg:col-span-2 flex flex-col bg-gray-400 h-full">
          <Image src={Node} alt="node.js logo" width={80} height={80} />
          <h4 className="font-normal text-xl md:text-2xl text-center py-2 font-raleway">
            Backend Integrations
          </h4>
          <p className="font-sans font-normal md:text-lg text-center">
            Node/ExpressJs is the perfect server side solution for Javascript
            front-ends. Im familiar with creating REST APIs and local servers
            from scratch and interfacing with 3rd party APIs.
          </p>
        </div>
        <div className="p-3 rounded-xl lg:col-span-2 flex flex-col bg-pink-100 h-full">
          <Image src={Sass} alt="sass logo" width={80} height={80} />
          <h4 className="font-normal text-xl md:text-2xl font-raleway text-center py-2">
            Styling
          </h4>
          <p className="font-sans font-normal md:text-lg text-center">
            Creating friendly and attractive user interfaces and experiences is
            a cornerstone of web development. For styling, im competent in CSS,
            SCSS, Bootstrap and TailwindCSS framework.
          </p>
        </div>
        <div className="p-3 rounded-xl lg:col-span-2 flex flex-col bg-green-100 h-full">
          <Image src={MongoDb} alt="mongoDB logo" width={90} height={90} />
          <h4 className="font-normal text-xl md:text-2xl text-center py-2 font-raleway">
            Databases
          </h4>
          <p className="font-sans font-normal md:text-lg text-center">
            MongoDB is my database of choice for its schema flexibility, cloud
            accessibility, and JSON-like document structure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
