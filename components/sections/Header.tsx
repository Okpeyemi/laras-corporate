"use client";

// import { menu } from "@/libs/menu";
import React from "react";
import Button from "../Button";
import WhatsAppWhiteIcon from "@/public/icons/whatsappIconWhite.svg";
import WhatsAppGreenIcon from "@/public/icons/whatsappIconGreen.svg";
// import HamburgerIcon from "@/public/icons/hamburgerIcon.svg";
// import XIcon from "@/public/icons/xIcon.svg";
// import Image from "next/image";

const Header = () => {
  // const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 responsive bg-background flex justify-between items-center border-b-2 border-b-primary py-6">
      <h1 className="text-4xl max-md:text-2xl max-lg:text-3xl font-bold text-primary">
        Lara's Corporate
      </h1>
      {/* <nav className="space-x-5 font-semibold text-xl hidden xl:flex">
        {menu.map(({ name, link }, index) => (
          <a key={index} href={link} className="text-foreground">
            {name}
          </a>
        ))}
      </nav> */}
      <div className="max-md:hidden flex">
        <Button
          link="https://wa.me/2290197367870"
          title="Contacter le vendeur"
          variant="primary"
          icon={WhatsAppWhiteIcon}
          icon2={WhatsAppGreenIcon}
        />
      </div>
      <div className="max-md:flex hidden">
        <Button
          link="https://wa.me/2290197367870"
          variant="primary"
          icon={WhatsAppWhiteIcon}
          icon2={WhatsAppGreenIcon}
        />
      </div>
      {/* {open ? (
        <Image
          src={XIcon}
          alt="menu"
          width={30}
          height={30}
          className="xl:hidden cursor-pointer text-primary"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <Image
          src={HamburgerIcon}
          alt="menu"
          width={30}
          height={30}
          className="xl:hidden cursor-pointer text-primary"
          onClick={() => setOpen(!open)}
        />
      )} */}
    </div>
  );
};

export default Header;
