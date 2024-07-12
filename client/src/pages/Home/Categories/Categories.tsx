/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/ui/Container/Container";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import CategoryCard from "./CategoryCard";
import { getUniqueCategoryProducts } from "@/utils/getUniqueCategoryProducts";
import { IProduct } from "@/types/products.interface";

const Categories = () => {
  const { data, error, isLoading } = useGetProductsQuery({});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  const products = data?.data;

  const uniqueCategoryProduct = getUniqueCategoryProducts(products);

  return (
    <Container>
      <div className="py-14">
        {/* title */}
        <SectionTitle title="Discover Our Range of Fitness Equipment" />

        {/* categories */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4">
          {uniqueCategoryProduct?.map((product: IProduct) => (
            <CategoryCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Categories;
