"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      className={`h-auto p-5 md:p-16 flex flex-col justify-center items-center ${
        currentTheme === "dark" ? "bg-gray-700" : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-10">About Me</h2>
      <Image
        src="/photo.jpg"
        alt="Photo Profile"
        width={200}
        height={300}
        className="shadow-2xl rounded-xl"
      />
      <p className="text-base text-justify mt-5 w-5/6">
        Hi :) 👋 I`&apos;m Yovie Fesya Pratama, A creative software developer
        with 4 years of experience. Skilled and experienced in designing,
        developing, testing and deploying websites using up-to-date
        technologies. Have professionally used JavaScript, TypeScript, ReactJS,
        NextJS, HTML and CSS. Eager to face more challenges regarding ways to
        optimize user experience.
      </p>
    </div>
  );
};

export default AboutMe;
