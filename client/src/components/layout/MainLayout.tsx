import Home from "../../pages/Home/Home";
import Navbar from "../ui/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <Home />
    </div>
  );
};

export default MainLayout;
