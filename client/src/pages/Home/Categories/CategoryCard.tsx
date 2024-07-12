/* eslint-disable @typescript-eslint/no-explicit-any */

import SecondaryTitle from "@/components/ui/SecondaryTitle/SecondaryTitle";

const CategoryCard = ({ product }: any) => {
  return (
    <div className=" hover:shadow-md rounded-md overflow-hidden border group cursor-pointer">
      <img
        className="h-[250px] w-full object-cover group-hover:scale-105 transition-all duration-300"
        src={product?.productImages[1]}
        alt={product?.name}
      />
      <div className="px-3 pt-3 mb-3">
        <SecondaryTitle title={product?.category} />
      </div>
    </div>
  );
};

export default CategoryCard;
