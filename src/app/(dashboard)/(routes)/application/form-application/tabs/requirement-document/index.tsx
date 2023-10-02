import {useSearchParams} from "next/navigation";

import {Icon, Text} from "~/components/ui";
import {useGetFinancingById} from "~/services/finance";

import RequirementDocumentCorporateForm from "./corporate";
import RequirementDocumentIndividualForm from "./individual";

const RequirementDocument = () => {
  const searchParams = useSearchParams();

  const userType = searchParams.get("type");

  const financeId = searchParams.get("uuid");

  const {data, isLoading} = useGetFinancingById(financeId as string);

  const defaultValueIndividual = {
    spouse_ktp_photo: data?.spouse_ktp_photo,
    applicant_npwp_photo: data?.applicant_npwp_photo,
    family_document_photo: data?.family_document_photo,
    house_ownership_photo: data?.house_ownership_photo,
    bin_or_bussines_photo: data?.bin_or_bussines_photo,
    bank_statement_photo: data?.bank_statement_photo,
    house_photo: data?.house_photo,
    selfie_pic_photo: data?.selfie_pic_photo,
    status: data?.status?.no,
  };

  const defaultValueCorporate = {
    directors_ktp_photo: data?.directors_ktp_photo,
    directors_npwp_photo: data?.directors_npwp_photo,
    comisarist_npwp_photo: data?.comisarist_npwp_photo,
    comisarist_ktp_photo: data?.comisarist_ktp_photo,
    shareholders_npwp_photo: data?.shareholders_npwp_photo,
    shareholders_ktp_photo: data?.shareholders_ktp_photo,
    company_npwp_photo: data?.company_npwp_photo,
    deed_of_incoraption_photo: data?.deed_of_incoraption_photo,
    amendment_deed_photo: data?.amendment_deed_photo ?? [],
    sk_kemenkumham_photo: data?.sk_kemenkumham_photo,
    sk_kemenkumham_changes_photo: data?.sk_kemenkumham_changes_photo ?? [],
    licensing_documents_photo: data?.licensing_documents_photo,
    financial_statement_photo: data?.financial_statement_photo,
    selfie_pic_photo: data?.selfie_pic_photo,
    selfie_comisarist_photo: data?.selfie_comisarist_photo,
    bank_statement_photo: data?.bank_statement_photo,
    office_photo: data?.office_photo,
    status: data?.status?.no,
  };

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

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
        <RequirementDocumentCorporateForm
          defaultValueForm={defaultValueCorporate}
        />
      ) : (
        <RequirementDocumentIndividualForm
          defaultValueForm={defaultValueIndividual}
        />
      )}
    </div>
  );
};

export default RequirementDocument;
