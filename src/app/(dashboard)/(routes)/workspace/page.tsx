import React from "react";

import Breadcrumbs from "~/dashboard/components/breadcrumbs";

import Workspace from "./components/workspace";

import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Workspace - FishFin Dashboard",
};

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
