"use client";

import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Greetings() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-orange-100 dark:bg-slate-700"
    >
      <Image
        src={mounted && (theme === 'dark' || resolvedTheme === 'dark') ? "/laptop-code-white.png" : "/laptop-code.png"}
        width={200}
        height={200}
        alt={"Laptop Icon"}
      />
      <h1 className="mb-2 text-2xl md:text-3xl">Yovie Fesya Pratama</h1>
      <TypeAnimation
        sequence={["Fullstack Developer", 500]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        className="text-2xl font-bold md:text-5xl"
      />
      <div className="flex flex-wrap justify-center gap-4 mt-8 mb-4">
        <a
          href="https://github.com/vieyama"
          target="_blank"
          className="p-2 border-2 border-black dark:border-white"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/yovie-fesya"
          target="_blank"
          className="p-2 border-2 border-black dark:border-white"
        >
          LinkedIn
        </a>
        <a
          href="mailto:yoviefp@gmail.com"
          target="_blank"
          className="p-2 border-2 border-black dark:border-white"
        >
          Email (yoviefp@gmail.com)
        </a>
        <a
          href="https://www.canva.com/design/DAGdZE-lpxA/Dc3lQgaAhFDchIHMRkr2Ug/view?utm_content=DAGdZE-lpxA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdab5574f6a"
          target="_blank"
          className="p-2 border-2 border-black dark:border-white"
        >
          My CV
        </a>
      </div>
      <Switch
        checked={mounted && (theme === 'dark' || resolvedTheme === 'dark')}
        onChange={() => {
          setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
        }}
        className={`${mounted && (theme === 'dark' || resolvedTheme === 'dark') ? "bg-cyan-700" : "bg-slate-500"
          } relative inline-flex h-14 w-28 items-center rounded-full mt-4`}
      >
        <span className="sr-only">Switch Themes</span>

        <Image
          src={mounted && (theme === 'dark' || resolvedTheme === 'dark') ? "/moon.png" : "/sun.png"}
          width={50}
          height={50}
          className={`${mounted && (theme === 'dark' || resolvedTheme === 'dark') ? "translate-x-14" : "translate-x-1"
            } inline-block transform rounded-full bg-orange-500 transition`}
          alt={"Laptop Icon"}
        />
      </Switch>
    </div>
  );
}
