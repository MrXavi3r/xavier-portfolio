/* eslint-disable react/no-unescaped-entities */
import { data } from "../../data/testimonialData";
import Arrow from "../../public/assets/arrow.svg";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section
      className="container flex flex-col items-center px-6 pb-4 mt-10"
      id="testimonials"
    >
      <h1 className="text-3xl py-6 font-normal font-raleway">
        People who've said nice things...
      </h1>
      <div className="container flex flex-col items-center justify-center">
        {data.map((d) => {
          return (
            <div
              className={
                "review-card w-78 h-64 p-5 my-4 rounded-lg flex flex-col justify-around transition-all duration-1000 ease-in-out"
              }
              key={d.id}
            >
              <div className="top h-1/4 flex items-center justify-around">
                <Image
                  src={Arrow}
                  className=""
                  alt="right-arrow"
                  width="50"
                  height="50"
                />
                <Image
                  src={d.img}
                  alt="person"
                  width="60"
                  height="60"
                  objectFit="cover"
                  className="rounded-full"
                />
                <Image
                  src={d.icon}
                  alt="icon"
                  width="50"
                  height="50"
                  objectFit="cover"
                  className=""
                />
              </div>
              <div className="center rounded">{d.desc}</div>
              <div className="bottom items-center justify-center flex flex-col">
                <h3 className="font-semibold">{d.name}</h3>
                <h4 className="text-gray-900">{d.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
