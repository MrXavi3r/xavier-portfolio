import Image from "next/image";
import AboutImg from "../../public/assets/about_img.svg";
import CogWheel from "../../public/assets/cogwheels.svg";
import Blockchain from "../../public/assets/blockchain.svg";
import ExchangeRate from "../../public/assets/exchange-rate.svg";
import Diver from "../../public/assets/scuba.svg";

const About = () => {
  return (
    <section className="container px-4 my-10 bg-pink-100" id="about">
      <div className="left">
        <h2 className="text-3xl font-semibold">A BIT ABOUT ME...</h2>
        <Image src={AboutImg} alt="about" width="600" className="hidden" />
      </div>
      <div className="right">
        <div className="mb-6 flex">
          <span>
            <div className="rounded-full w-24 h-24 bg-yellow-200 flex items-center justify-center">
              <Image src={CogWheel} alt="gear-wheel" />
            </div>
          </span>
          <div className="pl-4">
            <p>
              Self improvement is a value I hold close. Each day I strive to not
              only level up my skills, but to also positively impact anyone whom
              I come in touch with during that process.
            </p>
          </div>
        </div>
        <div className="mb-6 flex">
          <span>
            <div className="rounded-full w-24 h-24 flex items-center justify-center">
              <Image
                src={Blockchain}
                alt="blockchain development"
                className="rounded-full"
              />
            </div>
          </span>
          <div className="pl-4">
            <p>
              Im eager to work on challenging projects alongside other talented
              developers and eventually id like to explore emerging technologies
              such as blockchain.
            </p>
          </div>
        </div>
        <div className="mb-6 flex">
          <span>
            <div className="rounded-full w-24 h-24 bg-green-200 flex items-center justify-center">
              <Image src={ExchangeRate} alt="chart" width={70} height={70} />
            </div>
          </span>
          <div className="pl-4">
            <p>
              Aside from coding, ive been involved in the financial markets as a
              trader for just over a decade. I spend much of my time online
              analyzing charts, managing trades, and reading financial news
              articles. <mark>PRO TIP:</mark> buy and hold some bitcoin!
            </p>
          </div>
        </div>
        <div className="mb-6 flex">
          <span>
            <div className="rounded-full w-24 h-24 bg-blue-200 flex items-center justify-center">
              <Image src={Diver} alt="diver" />
            </div>
          </span>
          <div className="pl-4">
            <p>
              Despite the time I spend online, im a big outdoors guy. I love
              playing sports, running at the track and playing pickup
              basketball. I love to explore. Skydiving is on my bucket list, and
              scuba diving is my favorite hobby. I go whenever possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;