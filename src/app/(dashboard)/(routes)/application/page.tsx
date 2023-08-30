import React from "react";

import Application from "./components/application";

import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Formulir Aplikasi Pembiayaan - FishFin Dashboard",
  description: "Formulir Aplikasi Pembiayaan - FishLog Financial Dashboard",
};

const ApplicationPage = async () => {
  return <Application />;
};

export default ApplicationPage;
