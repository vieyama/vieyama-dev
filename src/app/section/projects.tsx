import { Portofolio, baseUrl } from "@/utils/directusClient";
import Image from "next/image";
import React from "react";

const Projects: React.FC<{ data: Portofolio }> = ({ data }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-auto p-5 bg-orange-100 md:p-16 dark:bg-slate-700"
    >
      <h2 className="mb-10 text-2xl font-semibold">Projects</h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {data.Projects.map(item => (
          <a
            key={item.id}
            target="_blank"
            href={item.Url}
            rel="noopener noreferrer"
          >
            <div className="text-center hover:scale-110">
              <h2>{item.ProjectName}</h2>
              <Image
                src={`${baseUrl}/assets/${item.Image}`}
                alt="Photo Profile"
                width={400}
                height={200}
                className="shadow-2xl rounded-xl"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
