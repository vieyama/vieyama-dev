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
  { img: '/projects/quill-math-editor.png', title: 'Library: Quill Math Editor', url: 'https://www.npmjs.com/package/quill-editor-math', description: 'Rich text editor with react quill, mathquill4quill, katex, and image resizer. you can use formula with this.' },
  { img: '/projects/postbox.png', title: 'PostBox', url: 'https://react-jsonplaceholder-posts.vercel.app/', description: 'A clean and responsive web app built with ReactJS and Tailwind CSS to display post data from the JSONPlaceholder API. It features global state with Zustand, secure HTML rendering using sanitize-html, and optimized image handling via loadable-image.' },
  { img: '/projects/todoflow.png', title: 'TodoFlow', url: 'https://todoflow.yovie-pratama.my.id/', description: 'A Simple and Reliable Todo App Built with Modern Frontend Tools\nTodoFlow is a lightweight and responsive todo application developed with ReactJS, Tailwind CSS, and Zustand for state management. The app prioritizes clarity, performance, and an excellent developer experience.\nIt uses Zustand for a clean and scalable state management solution, while Tailwind CSS ensures a beautiful and utility-first design. The entire application is fully unit-tested with Vitest, ensuring reliability and maintainability in the long run.\nThe codebase is modular and easy to maintain, providing flexibility for future extensions. TodoFlow reflects my approach to building maintainable, test-driven React applications with modern tools and best practices.' },
  {
    img: '/projects/property-finder.png', title: 'Property Finder', url: 'https://my-properties.yovie-pratama.my.id/', description: 'Property Finder is a full-stack web application built with Next.js, Tailwind CSS, Supabase, Express.js, and the Google Maps API. The app enables users to browse and manage property listings with full CRUD (Create, Read, Update, Delete) functionality.\nIt features secure user authentication with Auth Magic, allowing users to log in and manage their accounts seamlessly.Users can create, view, update, and delete property listings, with the ability to display the properties on an interactive map powered by the Google Maps API.The app also includes an intuitive map selector in the property creation and update forms for easy location selection.\nBuilt with Tailwind CSS, Property Finder offers a fully responsive and modern design, ensuring an excellent user experience across devices.The application simplifies property management by combining a user- friendly interface with powerful location - based features, making it easy to find and manage properties.'
  },
  { img: '/projects/jsonplaceholder-explorer.png', title: 'JSONPlaceholder Explorer', url: 'https://json-placeholder-explorer.vercel.app/', description: 'Built with HTML, Tailwind CSS, and Vanilla JavaScript | Tested with Vitest\nPost Explorer is a lightweight web application that displays a list of posts fetched from the JSONPlaceholder API. It features client-side search, pagination, and the ability to view detailed comments for each post. The app includes a dedicated Reports page that filters and highlights posts containing the keyword "rerum" in their body and provides insights on the number of posts per user. The project emphasizes clean UI with Tailwind CSS and robust functionality with fully unit-tested JavaScript using Vitest.' },
]

const Projects: React.FC<{}> = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-auto p-5 bg-orange-100 md:p-16 dark:bg-slate-700"
    >
      <h2 className="mb-10 text-2xl font-semibold">Projects</h2>
      <div className="gap-5 space-y-5 text-center columns-1 sm:columns-2 md:columns-3 2xl:columns-4">
        {projects.map((project, key) => (
          <ProjectModal
            key={key}
            display={
              <div className="mb-5 text-center hover:scale-110">
                <h2 className="mb-3">{project.title}</h2>
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
