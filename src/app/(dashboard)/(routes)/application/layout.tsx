import React from "react";

import Breadcrumbs from "~/dashboard/components/breadcrumbs";

const ApplicationPage = ({children}: {children: React.ReactNode}) => {
  const breadcrumb = [
    {label: "Workspace", path: "/workspace"},
    {label: "Formulir Aplikasi Pembiayaan", path: "/application"},
  ];
  return (
    <div className="min-h-screen">
      {/* breadcrumb */}
      <Breadcrumbs breadcrumb={breadcrumb} />

      {children}
    </div>
  );
};

export default ApplicationPage;
