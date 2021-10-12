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
  autoplaySpeed: 10000,
  fade: false,
};

const SliderComponent = () => {
  return (
    <Slider {...settings}>
      {data.map((d) => {
        return (
          <div key={d.id} className="container w-full overflow-hidden">
            <div className="h-auto flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:place-items-center">
              <div className="w-5/6">
                <div className="">
                  <h2 className="my-4 font-bold text-xl text-center">
                    {d.title}
                  </h2>
                  <small className="text-center text- text-red-500">
                    (in development)
                  </small>
                  <p className="mb-4 font-serif md:text-lg">{d.desc}</p>
                </div>
              </div>
              <div className="relative w-4/5 h-40 md:h-52 lg:w-4/5 lg:h-64">
                <Image
                  src={d.img}
                  layout="fill"
                  objectFit="contain"
                  // width="280"
                  // height="150"
                  alt={d.title}
                  placeholder="blur"
                  quality="100"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMUrAcAAKcAkqLcIOsAAAAASUVORK5CYII="
                  className="md:w-350"
                />
              </div>
              <a
                href={d.github}
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-500"
              >
                <span className="">view on Github</span>
              </a>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderComponent;
