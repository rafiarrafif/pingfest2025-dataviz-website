import React from "react";
import localFont from "next/font/local";

const Manrope = localFont({
  src: [
    {
      path: "../fonts/Manrope/Manrope-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Manrope/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Manrope/Manrope-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Manrope/Manrope-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Manrope/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Manrope/Manrope-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Manrope/Manrope-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
  ],
});

const ManropeFont = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div className={`${Manrope.className} antialiased`}>{children}</div>;
};

export default ManropeFont;
