import { Input } from "../input";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <form
      className="flex items-center justify-center
       lg:w-[450px] w-full "
    >
      <Input
        type="text"
        placeholder="Search for..."
        className="bg-transparent border-t-0 border-b border-slate-400 focus:border-slate-700
         lg:focus:border-slate-100 
        focus:outline-0 w-auto lg:w-full text-white text-base ml-1.5"
      />
      <button className=" bg-[#EC3642] grid place-items-center h-full ml-1 px-3 py-2 lg:py-1">
        <IoSearch className="text-white text-2xl " />
      </button>
    </form>
  );
};

export default SearchBar;
