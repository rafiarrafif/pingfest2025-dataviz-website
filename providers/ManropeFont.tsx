import React from "react";
import localFont from "next/font/local";

const Manrope = localFont({
  src: [
    {
      path: "../fonts/Manrope-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Manrope-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Manrope-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Manrope-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Manrope-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
  ],
});

const ManropeFont = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div className={`${Manrope.className} antialiased`}>{children}</div>;
};

export default ManropeFont;
