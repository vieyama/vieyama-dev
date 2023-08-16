import React from "react";

import Breadcrumbs from "~/dashboard/components/breadcrumbs";

import Workspace from "./components/workspace";

const WorkspacePage = () => {
  const breadcrumb = [{label: "Workspace", path: "/workspace"}];
  return (
    <>
      {/* breadcrumb */}
      <Breadcrumbs breadcrumb={breadcrumb} />

      <Workspace />
    </>
  );
};

export default WorkspacePage;
