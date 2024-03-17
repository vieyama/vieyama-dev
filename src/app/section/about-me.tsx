import { Portofolio, baseUrl } from "@/utils/directusClient";
import Image from "next/image";
import React from "react";

const AboutMe: React.FC<{ data: Portofolio }> = ({ data }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-auto p-5 bg-white md:p-16 dark:bg-gray-700"
    >
      <h2 className="mb-10 text-2xl font-semibold">About Me</h2>
      <Image
        src={`${baseUrl}/assets/${data.Photo}`}
        alt="Photo Profile"
        width={200}
        height={300}
        className="shadow-2xl rounded-xl"
      />
      <p className="w-5/6 mt-5 text-base text-justify">
        {data.AboutMe}
      </p>
    </div>
  );
};

export default AboutMe;
