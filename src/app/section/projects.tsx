import Image from "next/image";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-auto p-5 bg-orange-100 md:p-16 dark:bg-slate-700"
    >
      <h2 className="mb-10 text-2xl font-semibold">Projects</h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <a
          target="_blank"
          href="https://dashboard.edoo.id"
          rel="noopener noreferrer"
        >
          <div className="text-center hover:scale-110">
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
          <div className="text-center hover:scale-110">
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
          <div className="text-center hover:scale-110">
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
          <div className="text-center hover:scale-110">
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
          <div className="text-center hover:scale-110">
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

        <a
          target="_blank"
          href="https://admin.magloft.app/"
          rel="noopener noreferrer"
        >
          <div className="text-center hover:scale-110">
            <h2>Magloft UA Admin</h2>
            <Image
              src="/projects/pwa-admin.png"
              alt="Photo Profile"
              width={400}
              height={200}
              className="shadow-2xl rounded-xl"
            />
          </div>
        </a>
        <a
          target="_blank"
          href="https://mxp.magloft.com/"
          rel="noopener noreferrer"
        >
          <div className="text-center hover:scale-110">
            <h2>Magloft MXP</h2>
            <Image
              src="/projects/mxp.png"
              alt="Photo Profile"
              width={400}
              height={200}
              className="shadow-2xl rounded-xl"
            />
          </div>
        </a>
        <a
          target="_blank"
          href="https://rumahiats.id/"
          rel="noopener noreferrer"
        >
          <div className="text-center hover:scale-110">
            <h2>Rumah IATS</h2>
            <Image
              src="/projects/rumahiats.png"
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
