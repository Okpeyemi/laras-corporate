import React from "react";
import Button from "../Button";
import WhatsAppWhiteIcon from "@/public/icons/whatsappIconWhite.svg";
import WhatsAppGreenIcon from "@/public/icons/whatsappIconGreen.svg";
// import { menu } from "@/libs/menu";

const Footer = () => {
  return (
    <div className="responsive bg-gradient-to-b from-primary to-foreground text-background flex max-lg:flex-col max-lg:space-y-5 justify-between py-6">
      <div className="flex max-lg:flex-col max-lg:space-y-5 justify-between items-center w-full">
        <h3 className="text-4xl max-md:text-2xl font-bold">Lara&apos;s Corporate</h3>
        <p className="text-lg">+229 01 97 36 78 70</p>
        <Button
          link="https://wa.me/2290197367870"
          title="Contacter le vendeur"
          variant="secondary"
          size="w-fit"
          icon={WhatsAppGreenIcon}
          icon2={WhatsAppWhiteIcon}
        />
      </div>
      {/* <div className="space-y-5">
        <h3 className="text-3xl max-md:text-xl font-bold">Lien Utiles</h3>
        <nav className="flex flex-col">
            {menu.map(({ name, link}, index) => (
                <a key={index} href={link} className="text-lg hover:underline">{name}</a>
            ))}
        </nav>
      </div> */}
      {/* <div className="flex flex-col space-y-5">
        <h3 className="text-3xl max-md:text-xl font-bold">Contact</h3>
        <p className="text-lg">+229 01 97 36 78 70</p>
      </div> */}
    </div>
  );
};

export default Footer;
