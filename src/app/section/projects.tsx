"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const Projects = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      className={`h-auto p-5 md:p-16 flex flex-col justify-center items-center ${
        currentTheme === "dark" ? "bg-slate-700" : "bg-orange-100"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-10">Projects</h2>

      <div className="flex gap-6 flex-wrap items-center justify-center">
        <a
          target="_blank"
          href="https://dashboard.edoo.id"
          rel="noopener noreferrer"
        >
          <div className="hover:scale-110 text-center">
            <h2>Edoo Dashboard</h2>
            <Image
              src="/projects/edoo-dashboard.png"
              alt="Photo Profile"
              width={400}
              height={200}
              className="shadow-2xl rounded-xl"
            />
          </div>
        </a>

        <a
          target="_blank"
          href="https://app.edoo.id/"
          rel="noopener noreferrer"
        >
          <div className="hover:scale-110 text-center">
            <h2>Edoo Web</h2>
            <Image
              src="/projects/edoo-web.png"
              alt="Photo Profile"
              width={400}
              height={200}
              className="shadow-2xl rounded-xl"
            />
          </div>
        </a>

        <a
          target="_blank"
          href="https://belajar.gredu.co"
          rel="noopener noreferrer"
        >
          <div className="hover:scale-110 text-center">
            <h2>Gredu</h2>
            <Image
              src="/projects/gredu.png"
              alt="Photo Profile"
              width={400}
              height={200}
              className="shadow-2xl rounded-xl"
            />
          </div>
        </a>

        <a
          target="_blank"
          href="https://minerba.esdm.go.id/minepedia"
          rel="noopener noreferrer"
        >
          <div className="hover:scale-110 text-center">
            <h2>Minepedia</h2>
            <Image
              src="/projects/minepedia.png"
              alt="Photo Profile"
              width={400}
              height={200}
              className="shadow-2xl rounded-xl"
            />
          </div>
        </a>

        <a
          target="_blank"
          href="https://web.fap.fishlog-dev.net/login"
          rel="noopener noreferrer"
        >
          <div className="hover:scale-110 text-center">
            <h2>Fishfin</h2>
            <Image
              src="/projects/fishfin.png"
              alt="Photo Profile"
              width={400}
              height={200}
              className="shadow-2xl rounded-xl"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
