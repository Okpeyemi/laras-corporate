import React from "react";
import Button from "../Button";
import WhatsAppWhiteIcon from "@/public/icons/whatsappIconWhite.svg";
import WhatsAppGreenIcon from "@/public/icons/whatsappIconGreen.svg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-foreground max-lg:mt-16 max-xl:mt-20 mt-24 h-[700px] max-md:h-[500px] flex flex-col items-start justify-center text-background responsive space-y-10">
      <div className="text">
        <h1>Médical & Santé.</h1>
        <h1>Beauté, Cosmétiques & Soins personnels.</h1>
        <h1>Shopping & Vente au détail.</h1>
      </div>
      <Button title="Contacter le vendeur" variant="secondary" icon={WhatsAppGreenIcon} icon2={WhatsAppWhiteIcon} />
    </div>
  );
};

export default Hero;
