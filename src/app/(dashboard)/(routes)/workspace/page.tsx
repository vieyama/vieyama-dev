"use client";
import React from "react";

import {Text} from "~/components/ui";
import Breadcrumbs from "~/dashboard/components/breadcrumbs";

const WorkspacePage = () => {
  return (
    <div className="">
      {/* breadcrumb */}
      <Breadcrumbs />

      <Text>Workspace dashboard</Text>
    </div>
  );
};

export default WorkspacePage;
