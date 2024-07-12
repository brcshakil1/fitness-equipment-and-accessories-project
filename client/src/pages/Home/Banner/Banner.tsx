import bannerImg from "@/assets/Banner/4758-copy.jpg";
const Banner = () => {
  return (
    <div
      className="h-[90vh] w-full bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute bg-[#00000062] h-full w-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center">
          Gear Up for Greatness: <br /> Top-Quality Fitness Equipment
        </h1>
        <button className="mt-8 px-6 py-3 bg-[#EC3642] hover:bg-red-700 text-white text-lg font-medium rounded">
          Explore Products
        </button>
      </div>
    </div>
  );
};

export default Banner;
