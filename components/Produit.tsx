"use client";

import { produits } from "@/libs/produits";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import WhatsAppWhiteIcon from "@/public/icons/whatsappIconWhite.svg";
import WhatsAppGreenIcon from "@/public/icons/whatsappIconGreen.svg";

const Produit = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = produits.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(produits.length / productsPerPage);
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 max-xl:gap-10 max-lg:gap-5">
        {currentProducts.map(({ id, name, description, price, image }) => (
          <div
            key={id}
            className="border-2 border-primary rounded-lg p-5 max-sm:w-[250px] max-md:w-[300px] max-lg:w-[300px] duration-300 ease-in hover:shadow-lg"
          >
            <div className="w-full h-[300px] max-md:h-[200px] mb-4">
              <Image
                src={image}
                alt={name}
                width={500}
                height={500}
                className="object-cover rounded-lg h-full"
              />
            </div>
            <div className="mb-4">
              <h2 className="font-bold text-2xl">{name}</h2>
              <p className="text-justify">{description}</p>
              <p className="font-bold text-3xl max-md:text-xl text-primary text-end">{price} FCFA</p>
            </div>
            <Button
              title="Contacter le vendeur"
              variant="primary"
              icon={WhatsAppWhiteIcon}
              icon2={WhatsAppGreenIcon}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-primary text-background cursor-not-allowed"
                : "bg-background text-primary border border-primary cursor-pointer hover:bg-foreground hover:text-background"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Produit;
