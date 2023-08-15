"use client";
import React from "react";

import {Text} from "~/components/ui";
import Breadcrumbs from "~/dashboard/components/breadcrumbs";

const ApplicationPage = () => {
  const breadcrumb = [
    {label: "Workspace", path: "/workspace"},
    {label: "Application", path: "/application"},
  ];
  return (
    <div className="">
      {/* breadcrumb */}
      <Breadcrumbs breadcrumb={breadcrumb} />

      <Text>Application dashboard</Text>
    </div>
  );
};

export default ApplicationPage;
