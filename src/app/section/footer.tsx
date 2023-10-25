"use client";

import { useTheme } from "next-themes";
import React from "react";

const Footer = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      className={`h-auto p-5 flex flex-col justify-center items-center ${
        currentTheme === "dark" ? "bg-gray-700" : "bg-white"
      }`}
    >
      <p className="text-base">Copyright © Yovie Fesya Pratama</p>
    </div>
  );
};

export default Footer;
