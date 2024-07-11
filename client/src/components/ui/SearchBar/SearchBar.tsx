import { Input } from "../input";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <form
      className="flex items-center flex-row-reverse 
       lg:w-[450px] w-full relative rounded-full"
    >
      <Input
        type="text"
        placeholder="Search for..."
        className="bg-transparent border-gray-700 w-full text-white text-base pl-16  rounded-full"
      />
      <button className="w-10 absolute left-0 z-10  grid place-items-center h-full ml-2">
        <IoSearch className="text-white text-2xl " />
      </button>
    </form>
  );
};

export default SearchBar;
