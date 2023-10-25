"use client";

import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Greetings() {
  const [enabled, setEnabled] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      className={`min-h-screen flex justify-center items-center flex-col ${
        currentTheme === "dark" ? "bg-slate-700" : "bg-orange-100"
      }`}
    >
      <Image
        src={enabled ? "/laptop-code-white.png" : "/laptop-code.png"}
        width={200}
        height={200}
        alt={"Laptop Icon"}
      />
      <h1 className="text-2xl md:text-3xl mb-2">Yovie Fesya Pratama</h1>
      <TypeAnimation
        sequence={["Frontend Developer", 500]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        className="text-2xl md:text-5xl font-bold"
      />
      <div className="mt-8 mb-4 flex gap-4 flex-wrap justify-center">
        <a
          href="https://github.com/vieyama"
          target="_blank"
          className={`p-2 border-2 ${
            currentTheme === "dark" ? "border-white" : "border-black"
          }`}
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/yovie-fesya"
          target="_blank"
          className={`p-2 border-2 ${
            currentTheme === "dark" ? "border-white" : "border-black"
          }`}
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/yoviefp33/"
          target="_blank"
          className={`p-2 border-2 ${
            currentTheme === "dark" ? "border-white" : "border-black"
          }`}
        >
          Instagram
        </a>
        <a
          href="mailto:yoviefp@gmail.com"
          target="_blank"
          className={`p-2 border-2 ${
            currentTheme === "dark" ? "border-white" : "border-black"
          }`}
        >
          Email (yoviefp@gmail.com)
        </a>
        <a
          href="https://drive.google.com/file/d/1-73NaXyELSsj1A3Q6aRornRVpCzq74x9/view"
          target="_blank"
          className={`p-2 border-2 ${
            currentTheme === "dark" ? "border-white" : "border-black"
          }`}
        >
          My CV
        </a>
      </div>
      <Switch
        checked={enabled}
        onChange={(e) => {
          setEnabled(!enabled);
          setTheme(e ? "dark" : "light");
        }}
        className={`${
          enabled ? "bg-cyan-700" : "bg-slate-500"
        } relative inline-flex h-14 w-28 items-center rounded-full mt-4`}
      >
        <span className="sr-only">Enable notifications</span>

        <Image
          src={enabled ? "/moon.png" : "/sun.png"}
          width={50}
          height={50}
          className={`${
            enabled ? "translate-x-14" : "translate-x-1"
          } inline-block transform rounded-full bg-orange-500 transition`}
          alt={"Laptop Icon"}
        />
      </Switch>
    </div>
  );
}
