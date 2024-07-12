/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Menubar,
  //   MenubarContent,
  //   MenubarItem,
  MenubarMenu,
  //   MenubarSeparator,
  MenubarTrigger,
} from "@radix-ui/react-menubar";
import Container from "../Container/Container";
// import { MenubarShortcut } from "../menubar";
import { IoCloseOutline } from "react-icons/io5";
import SearchBar from "../SearchBar/SearchBar";

interface IMenuProps {
  isMenuItemsShow: boolean;
  setIsMenuItemsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuItems: React.FC<IMenuProps> = ({
  isMenuItemsShow,
  setIsMenuItemsShow,
}) => {
  return (
    <div
      className={`absolute lg:sticky lg:bg-[#EC3642]  transition-all duration-500 bg-white top-0 ${
        !isMenuItemsShow ? "-left-[1000px]" : "left-0"
      } left-0 z-20 h-screen lg:h-auto w-screen `}
    >
      <div>
        {/* menu close */}
        <IoCloseOutline
          onClick={() => setIsMenuItemsShow(false)}
          className="absolute right-5 top-5 text-3xl cursor-pointer z-50 block lg:hidden"
        />
      </div>
      <Container>
        <div className="mt-14 block lg:hidden">
          <SearchBar />
        </div>
        {/* menu items */}
        <Menubar
          className="text-base lg:text-xl lg:text-white text-black 
          font-semibold flex flex-col lg:flex-row items-start lg:items-center my-8 lg:my-0 "
        >
          <MenubarMenu>
            <MenubarTrigger className="text-start w-full lg:w-auto lg:border-b-0 border-b lg:border-r py-3 px-1 lg:py-5 lg:px-6 ">
              Home
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-start w-full lg:w-auto lg:border-r lg:border-b-0 border-b py-3 px-1 lg:py-5 lg:px-6">
              Products
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-start w-full lg:w-auto lg:border-r lg:border-b-0 border-b py-3 px-1 lg:py-5 lg:px-6">
              About Us
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-start w-full lg:w-auto  lg:border-b-0 border-b py-3 px-1 lg:py-5 lg:px-6">
              Contact Us
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </Container>
    </div>
  );
};

export default MenuItems;
