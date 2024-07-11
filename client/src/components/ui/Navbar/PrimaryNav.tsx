import Container from "../Container/Container";
import SearchBar from "../SearchBar/SearchBar";
import { FiShoppingCart } from "react-icons/fi";

const PrimaryNav = () => {
  return (
    <div className="bg-black py-10">
      <Container>
        {/* for large device */}
        <div className="flex justify-between items-center">
          <h2 className="text-white text-3xl">Titan Fitness</h2>
          <div className="flex items-center gap-5">
            <div className="hidden lg:grid">
              <SearchBar />
            </div>

            <div
              className="flex justify-center cursor-pointer bg-opacity-0 lg:bg-white items-center 
            gap-2 rounded-full py-0 lg:py-2
             px-0 lg:px-3 lg:w-auto relative"
            >
              <div
                className="lg:hidden grid absolute -top-2 -right-2 text-red z-10
               text-sm bg-slate-300 font-bold w-5 rounded-full text-center"
              >
                1
              </div>
              <FiShoppingCart className="text-2xl lg:text-black text-white " />
              <p className="lg:flex items-center gap-2 hidden text-black font-semibold">
                <span>$2000</span> <span>(1)</span>
              </p>
            </div>
          </div>
        </div>

        {/* show search bar for phone and tablet device */}
        <div>
          <div className="lg:hidden grid mt-5">
            <SearchBar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrimaryNav;
