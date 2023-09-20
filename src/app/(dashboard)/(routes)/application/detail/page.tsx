import DetailApplication from "./detail-application";

import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Detail Formulir Aplikasi Pembiayaan - FishFin Dashboard",
  description:
    "Detail Formulir Aplikasi Pembiayaan - FishLog Financial Dashboard",
};

const ApplicationPage = async () => {
  return <DetailApplication />;
};

export default ApplicationPage;
