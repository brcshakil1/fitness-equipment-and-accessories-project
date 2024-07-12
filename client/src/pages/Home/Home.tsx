import { useGetProductsQuery } from "@/redux/api/baseApi";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import ImageGallery from "./ImageGallery/ImageGallery";

const Home = () => {
  const { data, error, isLoading } = useGetProductsQuery({});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  console.log({ data });

  return (
    <div>
      {/* banner component */}
      <Banner />

      {/* categories */}
      <Categories />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Image gallery */}
      <ImageGallery />
    </div>
  );
};

export default Home;
