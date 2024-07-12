import React from "react";
import Container from "../Container/Container";
import SearchBar from "../SearchBar/SearchBar";
import { FiShoppingCart } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";

interface PrimaryNavProps {
  setIsMenuItemsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrimaryNav: React.FC<PrimaryNavProps> = ({ setIsMenuItemsShow }) => {
  return (
    <div className="bg-black py-7">
      <Container>
        {/* for large device */}
        <div className="flex justify-between items-center px-4">
          {/* show menu btn for mobile device */}
          <LuMenu
            onClick={() => setIsMenuItemsShow(true)}
            className="text-white text-2xl lg:hidden cursor-pointer"
          />

          <h2 className="text-white text-3xl border-2 border-slate-200 p-3">
            Titan Fitness
          </h2>
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
                <span>$0.00</span> <span>(0)</span>
              </p>
            </div>
          </div>
        </div>

        {/* show search bar for phone and tablet device */}
        {/* <div>
          <div className="lg:hidden grid mt-5">
            <SearchBar />
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default PrimaryNav;
