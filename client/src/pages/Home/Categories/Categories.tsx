/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/ui/Container/Container";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import CategoryCard from "./CategoryCard";
import { getUniqueCategoryProducts } from "@/utils/getUniqueCategoryProducts";
import { IProduct } from "@/types/products.interface";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={uniqueCategoryProduct.length}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {uniqueCategoryProduct?.map((product: IProduct) => (
              <SwiperSlide key={product?._id}>
                <CategoryCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Categories;
