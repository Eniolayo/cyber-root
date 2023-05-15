import React from "react";
import ctl from "@netlify/classnames-template-literals";

export default function Button({ children, variant, style }) {
  return (
    <button className={`${ButtonStyle(variant, style)}`}>{children}</button>
  );
}
function ButtonStyle(variant, style) {
  switch (variant) {
    case "primary":
      return ctl(`
        text-brightNavyBlue 
        rounded-m 
        border 
        border-brightNavyBlue 
        ${style}
      `);
    case "secondary":
      return ctl(`
        bg-brightNavyBlue 
        text-white 
        rounded-m 
        ${style}
      `);
    case "tertiary":
      return ctl(`
      text-brightNavyBlue 
      bg-white 
      text-xl
      rounded-md  
      ${style}
        `);
    default:
      return ctl(`
        ${style}
        `);
  }
}
