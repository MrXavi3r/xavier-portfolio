import Slider from "react-slick";
import { data } from "../../data/works-data";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  fade: false,
};

const SliderComponent = () => {
  return (
    <Slider {...settings}>
      {data.map((d) => {
        return (
          <div key={d.id} className="container w-4/5 overflow-hidden">
            <div className="item h-full flex flex-col items-center justify-center">
              <div className="left w-5/6">
                <div className="leftContainer pl-6">
                  <div className="imgContainer bg-yellow-500 rounded-full h-24 w-24 flex items-center justify-center">
                    <Image
                      src={d.icon}
                      width={50}
                      height={50}
                      alt={d.title}
                      className="flex items-center justify-center m-auto w-16 h-16"
                    />
                  </div>
                  <h2 className="m-4 font-bold">{d.title}</h2>
                  <p className="mb-4">{d.desc}</p>
                  <a
                    href={d.github}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-500 my-4"
                  >
                    <span className="">view on Github</span>
                  </a>
                </div>
              </div>
              <div className="right w-5/6">
                <Image
                  src={d.img}
                  width={400}
                  height={250}
                  alt={d.title}
                  className="flex items-center justify-center w-96 h-48 object-cover"
                />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderComponent;
