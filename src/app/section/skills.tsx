"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const Skills = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      className={`h-auto p-5 md:p-16 flex flex-col justify-center items-center ${
        currentTheme === "dark" ? "bg-gray-700" : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-10">Skills</h2>
      <div className="flex flex-col md:flex-row w-auto md:w-full justify-evenly">
        <ul className="max-w-md space-y-1 list-disc list-inside">
          <li>HTML / CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>NestJS</li>
          <li>Redux</li>
          <li>Jotai</li>
          <li>SASS</li>
          <li>Ant Design</li>
        </ul>
        <ul className="max-w-md space-y-1 list-disc list-inside">
          <li>Styled Components</li>
          <li>Tailwind CSS</li>
          <li>Chakra UI</li>
          <li>REST API</li>
          <li>GraphQL</li>
          <li>Jira</li>
          <li>Jest / React Testing Library</li>
          <li>GIT</li>
          <li>Docker</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
