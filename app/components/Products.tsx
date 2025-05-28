import React from "react";
import Chuadiére from "./Chuadiére";
import Pompe from "./Pompe";
import Ventilation from "./Ventilation";
import Isolation from "./Isolation";

const Products = () => {
  return (
    <div id="products" className="flex flex-col items-center">
      <div className="lg:w-[40%] w-[85%] mt-10 space-y-5 mb-14">
        <h1 className="text-lg md:top-8 md:text-[32px] text-[#0170B7] font-extrabold md:p-4 text-center">
          Nos produits
        </h1>
        <p className="text-base md:text-[22px]  text-center font-light leading-relaxed text-[#0170B7]">
          Optimisez le Confort de Votre Espace avec Nos Solutions d'Isolation
        </p>
      </div>
      <Chuadiére />
      <Pompe />
      <Ventilation />
      <Isolation />
    </div>
  );
};

export default Products;
