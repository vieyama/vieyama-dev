"use client";

import { Portofolio, baseUrl } from "@/utils/directusClient";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Greetings({ data }: { data: Portofolio }) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-orange-100 dark:bg-slate-700"
    >
      <Image
        src={mounted && (theme === 'dark' || resolvedTheme === 'dark') ? `${baseUrl}/assets/${data.HeaderLogoDark}` : `${baseUrl}/assets/${data.HeaderLogoLight}`}
        width={200}
        height={200}
        alt={"Laptop Icon"}
      />
      <h1 className="mb-2 text-2xl md:text-3xl">{data.Fullname}</h1>
      <TypeAnimation
        sequence={[data.Title, 500]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        className="text-2xl font-bold md:text-5xl"
      />
      <div className="flex flex-wrap justify-center gap-4 mt-8 mb-4">
        {data.Links.map(link => (
          <a
            key={link.id}
            href={link.Url}
            target="_blank"
            className="p-2 border-2 border-black dark:border-white"
          >
            {link.Display}
          </a>
        ))}
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
