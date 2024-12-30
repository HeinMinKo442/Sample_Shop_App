import React from "react";
import { useParams } from "react-router-dom";
import { useShop } from "../contexts/ShopContext";
import Breakdown from "../components/Breakdowns/Breakdown";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { id } = useParams();

  const { products } = useShop();

  const product = products.find((e) => e.id === Number(id));

  return (
    <div className="mt-20 mb-10 h-full">
      <div className=" p-10">
        <Breakdown product={product} />
        <ProductDisplay product={product}/>
      </div>
    </div>
  );
};

export default Product;
