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
      className="sections container bg-yellow-50 flex flex-col items-center h-auto"
      id="portfolio"
    >
      <h1 className="text-center text-4xl md:text-5xl font-normal font-raleway my-6">
        Portfolio
      </h1>
      <ul className="flex items-center justify-center mb-4 flex-wrap">
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
      <div className="container flex flex-col items-center justify-center flex-wrap overflow-auto h-full w-full">
        {data.map((d) => {
          return (
            <div
              className="w-4/5 h-60 md:h-72 lg:w-2/5 md:my-6 rounded-xl flex items-center justify-around text-white cursor-pointer relative group hover:bg-indigo-900 transition-all duration-500 ease-in-out"
              key={d.id}
            >
              <Image
                src={d.img}
                alt={d.title}
                objectFit="contain"
                layout="fill"
                quality="100"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMUrAcAAKcAkqLcIOsAAAAASUVORK5CYII="
                className="z-10 group-hover:opacity-20 group-hover:z-0"
              />
              <h3 className="absolute text-2xl font-semibold md:text-3xl">
                {d.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
