"use client";
import React from "react";

import Breadcrumbs from "~/dashboard/components/breadcrumbs";

import Application from "./components/application";

const ApplicationPage = () => {
  const breadcrumb = [
    {label: "Workspace", path: "/workspace"},
    {label: "Application", path: "/application"},
  ];
  return (
    <div className="min-h-screen">
      {/* breadcrumb */}
      <Breadcrumbs breadcrumb={breadcrumb} />

      <Application />
    </div>
  );
};

export default ApplicationPage;
