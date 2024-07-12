/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import SecondaryTitle from "@/components/ui/SecondaryTitle/SecondaryTitle";

const FeaturedProductsCard = ({ product }: any) => {
  return (
    <div className="rounded-md border overflow-hidden">
      <img
        className="h-[250px] object-cover hover:scale-105 transition-all duration-300"
        src={product?.productImages[1]}
        alt={product?.name}
      />

      <div className="p-3">
        <div className="group">
          <SecondaryTitle title={product?.name} />
        </div>

        <p className="font-semibold text-[#EC3642] py-1">${product?.price}</p>
        {/* btn container */}
        <div className="grid place-items-center">
          <Button className="">More Details</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsCard;
