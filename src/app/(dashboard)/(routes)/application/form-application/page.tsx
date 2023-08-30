import FormApplication from "./form-application";

import type {Metadata} from "next";

type Props = {
  params: {id: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  let titlePage = "";
  switch (searchParams?.process) {
    case "application-details":
      titlePage = "Rincian Aplikasi";
      break;
    case "item-details":
      titlePage = "Rincian Barang";
      break;
    case "requirement-document":
      titlePage = "Dokumen Persyaratan";
      break;
    default:
      titlePage = "Konfirmasi";
      break;
  }
  return {
    title: `Formulir ${titlePage} - FishFin Dashboard`,
  };
}

const FormApplicationPage = () => {
  return <FormApplication />;
};

export default FormApplicationPage;
