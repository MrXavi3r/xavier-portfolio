import SliderComponent from "./Slider";

const Showcase = () => {
  return (
    <section className="container pt-5 flex flex-col h-full" id="showcase">
      <h2 className="text-center text-3xl md:text-4xl font-normal font-raleway mb-6">
        Showcase Project
      </h2>
      <div className="flex w-full border-0 my-0 mx-auto">
        <SliderComponent />
      </div>
    </section>
  );
};

export default Showcase;
