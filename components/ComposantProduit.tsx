import { composants } from "@/libs/composantes";
import Image from "next/image";
import React from "react";

const ComposantProduit = () => {
  return (
    <div className="grid grid-cols-6 max-xl:grid-cols-3 max-md:grid-cols-2 lg:gap-10 max-lg:gap-5">
      {composants.map(({ nom, image }, index) => (
        <div
          key={index}
          className="border-2 border-foreground flex flex-col items-center justify-center px-10 py-14 max-lg:px-5 max-lg:py-10 max-md:px-3 max-md:py-10 rounded-full duration-300 ease-in hover:shadow-lg hover:bg-primary/20"
        >
          <div className="w-10 h-10 max-md:w-5 max-md:h-5 flex items-center justify-center">
            <Image
              src={image}
              alt={nom}
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <p className="text-center font-bold text-md">{nom}</p>
        </div>
      ))}
    </div>
  );
};

export default ComposantProduit;
