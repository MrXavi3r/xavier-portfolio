import SliderComponent from "./Slider";

const Showcase = () => {
  return (
    <section className="sections container pt-5 flex flex-col" id="showcase">
      <h2 className="text-center text-3xl font-normal font-raleway mb-6">
        Showcase Project
      </h2>
      <div className="flex w-full h-4/5 border-0 rounded my-0 mx-auto">
        <SliderComponent />
      </div>
    </section>
  );
};

export default Showcase;
