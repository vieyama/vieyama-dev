import {useSearchParams} from "next/navigation";

import {Icon, Text} from "~/components/ui";

import RequirementDocumentCorporateForm from "./corporate";
import RequirementDocumentIndividualForm from "./individual";

const RequirementDocument = () => {
  const searchParams = useSearchParams();

  const userType = searchParams.get("type");

  return (
    <div className="flex flex-col gap-4 bg-white p-6">
      <Text className="text-blue-600" weight="semi-bold">
        Dokumen Legalitas
      </Text>
      <div className="bg-blue-50 p-4 text-base">
        <Icon name="exclamation-circle" /> Unggah hingga 5 file (.pdf, .doc,
        .jpg, .png) Ukuran file maksimum adalah 5 MB
      </div>
      {userType === "corporate" ? (
        <RequirementDocumentCorporateForm />
      ) : (
        <RequirementDocumentIndividualForm />
      )}
    </div>
  );
};

export default RequirementDocument;
