import Image from "next/image";
import React from "react";
import ProjectModal from "./components/ProjectModal";

const projects = [
  { img: '/projects/edoo-dashboard.png', title: 'Edoo Dashboard', url: 'https://dashboard.edoo.id', description: 'Created using NextJS, SCSS, Ant Design, and GraphQL' },
  { img: '/projects/edoo-web.png', title: 'Edoo Web', url: 'https://app.edoo.id/', description: 'Created using React JS, SCSS, Ant Design and GraphQL' },
  { img: '/projects/gredu.png', title: 'Gredu', url: 'https://belajar.gredu.co', description: 'Created using NextJS, SCSS, Ant Design and GraphQL' },
  { img: '/projects/minepedia.png', title: 'Minepedia', url: 'https://minerba.esdm.go.id/minepedia', description: 'Created using NextJS, SCSS, Ant Design and GraphQL' },
  { img: '/projects/pwa-admin.png', title: 'Magloft UA Admin', url: 'https://admin.magloft.app', description: 'Created using Angular, SCSS, and GraphQL' },
  { img: '/projects/mxp.png', title: 'Magloft MXP', url: 'https://mxp.magloft.com', description: 'Created using NextJS, Tailwind CSS and GraphQL' },
  { img: '/projects/rumahiats.png', title: 'Rumah IATS', url: 'https://rumahiats.id', description: 'Created using AstroJS, Tailwind CSS and Directus Headless CMS' },
  { img: '/projects/sharqiaa.png', title: 'Sharqiaa Indonesia', url: 'https://in.sharqiaa.com/', description: 'Created using WordPress' },
  { img: '/projects/alsiddiq.png', title: 'Al-Siddiq PPDB', url: 'https://ppdb.alsiddiq.sch.id/', description: 'Created using Laravel & ReactJS' },
  { img: '/projects/quill-math-editor.png', title: 'Library: Quill Math Editor', url: 'https://www.npmjs.com/package/quill-editor-math', description: 'Rich text editor with react quill, mathquill4quill, katex, and image resizer. you can use formula with this.' }
]

const Projects: React.FC<{}> = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-auto p-5 bg-orange-100 md:p-16 dark:bg-slate-700"
    >
      <h2 className="mb-10 text-2xl font-semibold">Projects</h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {projects.map((project, key) => (
          <ProjectModal
            key={key}
            display={
              <div className="text-center hover:scale-110">
                <h2>{project.title}</h2>
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="shadow-2xl rounded-xl"
                />
              </div>
            }
            title={project.title}
            url={project.url}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
