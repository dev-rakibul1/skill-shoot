"use client";

import { CSSProperties, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

type IButton = {
  title: string;
  color: string;
};

const primaryButton: CSSProperties = {
  padding: "10px 22px",
  textTransform: "capitalize",
  borderRadius: "6px",
  fontWeight: 700,
  transition: "background-color 0.5s ease",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const ButtonComponent = ({ title, color }: IButton) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const buttonStyle: CSSProperties = {
    ...primaryButton,
    backgroundColor: isHovered ? "#c04e00" : color,
    color: isHovered ? "white" : "white",
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title} <GoArrowUpRight className="text-xl" />
    </button>
  );
};

export default ButtonComponent;
