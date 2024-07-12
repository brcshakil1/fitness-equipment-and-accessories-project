/* eslint-disable @typescript-eslint/no-explicit-any */

const CategoryCard = ({ product }: any) => {
  return (
    <div className=" hover:shadow-md rounded-md overflow-hidden border group">
      <img
        className="h-[250px] w-full object-cover group-hover:scale-105 transition-all duration-300"
        src={product?.productImages[1]}
        alt={product?.name}
      />
      <p className="p-3 font-semibold ">{product.category}</p>
    </div>
  );
};

export default CategoryCard;
