import Container from "@/components/ui/Container/Container";
import SectionTitle from "./../../../components/ui/SectionTitle/SectionTitle";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import FeaturedProductsCard from "./FeaturedProductsCard";
import { IProduct } from "@/types/products.interface";
import { Button } from "@/components/ui/button";
const FeaturedProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery({});

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>error...</p>;
  }

  const products = data.data;
  return (
    <Container>
      <div>
        <SectionTitle title="Choice Your Products" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products?.map((product: IProduct) => (
            <FeaturedProductsCard key={product?._id} product={product} />
          ))}
        </div>

        {/* Explore button */}
        <div className="grid place-items-center">
          <Button className="bg-[#EC3642] hover:bg-red-700">
            Explore More
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedProducts;
