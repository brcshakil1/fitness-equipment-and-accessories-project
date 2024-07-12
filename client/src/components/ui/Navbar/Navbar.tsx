import PrimaryNav from "./PrimaryNav";
import MenuItems from "./MenuItems";
import { useState } from "react";

const Navbar = () => {
  const [isMenuItemsShow, setIsMenuItemsShow] = useState(false);
  console.log(isMenuItemsShow, "<============");
  return (
    <div className="relative">
      <div>
        <PrimaryNav setIsMenuItemsShow={setIsMenuItemsShow} />
      </div>
      {/* menu items */}

      <MenuItems
        isMenuItemsShow={isMenuItemsShow}
        setIsMenuItemsShow={setIsMenuItemsShow}
      />
    </div>
  );
};

export default Navbar;
