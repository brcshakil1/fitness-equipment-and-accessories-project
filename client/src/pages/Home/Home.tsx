import { useGetProductsQuery } from "@/redux/api/baseApi";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";

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
    </div>
  );
};

export default Home;
