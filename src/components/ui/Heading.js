import React from "react";
import ctl from "@netlify/classnames-template-literals";

export default function Heading({ children, variant, styles, level }) {
  switch (level) {
    case "h1":
      return <h1 className={`${HeadingStyle(variant, styles)}`}>{children}</h1>;
    case "h2":
      return <h2 className={`${HeadingStyle(variant, styles)}`}>{children}</h2>;
    case "h3":
      return <h3 className={`${HeadingStyle(variant, styles)}`}>{children}</h3>;
    case "h4":
      return <h4 className={`${HeadingStyle(variant, styles)}`}>{children}</h4>;
    case "h5":
      return <h5 className={`${HeadingStyle(variant, styles)}`}>{children}</h5>;
    case "h6":
      return <h6 className={`${HeadingStyle(variant, styles)}`}>{children}</h6>;
  }
}

function HeadingStyle(variant, styles) {
  switch (variant) {
    case "sm":
      return ctl(`
            text-xl 
            m:text-lg
            capitalize
            ${styles}
        `);
    case "m":
      return ctl(`
            text-xl 
            m:text-2xl
            capitalize
            ${styles}
        `);
    case "md":
      return ctl(`
            text-xl 
            m:text-2xl 
            lg:text-3xl
            capitalize
            ${styles}
        `);
    case "lg":
      return ctl(`
            text-3xl 
            m:text-4xl
            capitalize
            ${styles}
        `);
    default:
      return ctl(`
            ${styles}
        `);
  }
}
