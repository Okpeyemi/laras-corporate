"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ButtonProps {
  size?: string;
  title?: string;
  variant: "primary" | "secondary";
  icon?: string;
  icon2?: string;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({
  size,
  title,
  variant,
  icon,
  icon2,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const className = `px-6 py-3 rounded-full font-bold text-center flex items-center justify-center ${size} cursor-pointer duration-300 ease-in ${
    variant === "primary"
      ? "bg-primary text-background border-2 border-primary hover:bg-background hover:text-primary hover:border-2 hover:border-primary"
      : "bg-background text-primary border-2 border-background hover:bg-gradient-to-b hover:from-primary hover:to-foreground hover:text-background"
  }`;
  return (
    <a
      href={link}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && (
        <Image
          src={isHovered && icon2 ? icon2 : icon}
          alt={icon}
          width={20}
          height={20}
          className="inline-block"
        />
      )}
      {title && <span className="ml-3">{title}</span>}
    </a>
  );
};

export default Button;
