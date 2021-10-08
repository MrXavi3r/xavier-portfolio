import { useState, useEffect } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  gamePortfolio,
  websitePortfolio,
  comingSoonPortfolio,
} from "../../data/portfolioData";
import PortfolioList from "./PortfolioList";
import { list } from "../../data/listTabData";
import Image from "next/image";
import Phone from "/public/assets/phone-call.png";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "games":
        setData(gamePortfolio);
        break;
      case "websites":
        setData(websitePortfolio);
        break;
      case "coming-soon":
        setData(comingSoonPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <section
      className="sections container bg-yellow-50 flex flex-col items-center mt-6 h-auto"
      id="portfolio"
    >
      <h1 className="text-center text-4xl font-normal font-raleway mt-4">
        Portfolio
      </h1>
      <ul className="flex items-center justify-center px-2 mb-4 flex-wrap">
        {list.map((item) => {
          return (
            <PortfolioList
              key={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className="container flex items-center justify-center flex-wrap overflow-auto h-4/5 w-full">
        {data.map((d) => {
          return (
            <div
              className="m-3 px-1 w-full h-48 rounded-xl flex items-center justify-center text-white cursor-pointer relative hover:bg-indigo-900 transition-all duration-500 ease-in-out"
              key={d.id}
            >
              <Image
                src={Phone}
                width={100}
                height={100}
                alt={d.title}
                objectFit="contain"
                className="z-10 hover:opacity-20 hover:z-0"
              />
              <h3 className="absolute text-2xl font-semibold">{d.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
