import Image from "next/image";
import React from "react";

const AboutMe: React.FC<{}> = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-auto p-5 bg-white md:p-16 dark:bg-gray-700"
    >
      <h2 className="mb-10 text-2xl font-semibold">About Me</h2>
      <Image
        src="/photo.jpg"
        alt="Photo Profile"
        width={200}
        height={300}
        className="shadow-2xl rounded-xl"
      />
      <p className="w-5/6 mt-5 text-base text-justify">
        Hi :) 👋 I&lsquo;m Yovie Fesya Pratama, A creative software developer with 5 years of experience. Skilled and experienced in designing, developing, testing and deploying websites using up-to-date technologies. Have professionally used JavaScript, TypeScript, ReactJS, NextJS, Angular, NestJS, NodeJS, Laravel, WordPress, GraphQL, HTML and CSS. Eager to face more challenges regarding ways to optimize user experience.
      </p>
    </div>
  );
};

export default AboutMe;
