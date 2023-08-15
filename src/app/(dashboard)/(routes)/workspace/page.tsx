"use client";
import React from "react";

import Breadcrumbs from "~/dashboard/components/breadcrumbs";

import Workspace from "./components/workspace";

const WorkspacePage = () => {
  const breadcrumb = [{label: "Workspace", path: "/workspace"}];
  return (
    <div className="">
      {/* breadcrumb */}
      <Breadcrumbs breadcrumb={breadcrumb} />

      <Workspace />
    </div>
  );
};

export default WorkspacePage;
