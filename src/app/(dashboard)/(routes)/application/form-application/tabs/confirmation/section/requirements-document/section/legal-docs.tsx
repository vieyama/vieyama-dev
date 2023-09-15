import {useSearchParams} from "next/navigation";

import {Icon, Text} from "~/components/ui";
import ImageDisplay from "~/dashboard/(routes)/application/form-application/components/image-display";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const LegalDocs: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  const searchParams = useSearchParams();
  const mitraType = searchParams.get("type");

  const IndividualDisplay = () => {
    return (
      <>
        <ImageDisplay
          fileList={financeData?.spouse_ktp_photo}
          label="Kartu Identitas Pasangan (e-KTP)"
        />
        <ImageDisplay
          fileList={financeData?.applicant_npwp_photo}
          label="NPWP Pemohon"
        />
        <ImageDisplay
          fileList={financeData?.family_document_photo}
          label="Kartu Keluarga / Buku Nikah (Jika Menikah)"
        />
        <ImageDisplay
          fileList={financeData?.house_ownership_photo}
          label="Bukti Kepemilikan Rumah (Sertifikat / Akta Jual Beli / PBB / Rekening Listrik)"
        />
        <ImageDisplay
          fileList={financeData?.bin_or_bussines_photo}
          label="Nomor Induk Berusaha (NIB) atau Foto Usaha"
        />
      </>
    );
  };

  const CorporateDisplay = () => {
    return (
      <>
        <ImageDisplay
          fileList={financeData?.directors_ktp_photo}
          label="Kartu Identitas Direksi (e-KTP)"
        />
        <ImageDisplay
          fileList={financeData?.comisarist_ktp_photo}
          label="Kartu Identitas Komisaris (e-KTP)"
        />
        <ImageDisplay
          fileList={financeData?.shareholders_ktp_photo}
          label="Kartu Identitas Pemegang Saham (e-KTP)"
        />
        <ImageDisplay
          fileList={financeData?.directors_npwp_photo}
          label="NPWP Direksi"
        />
        <ImageDisplay
          fileList={financeData?.comisarist_npwp_photo}
          label="NPWP Komisaris"
        />
        <ImageDisplay
          fileList={financeData?.shareholders_npwp_photo}
          label="NPWP Pemegang Saham"
        />
        <ImageDisplay
          fileList={financeData?.company_npwp_photo}
          label="NPWP Perusahaan"
        />
        <ImageDisplay
          fileList={financeData?.deed_of_incoraption_photo}
          label="Akta Pendirian"
        />
        <ImageDisplay
          fileList={financeData?.amendment_deed_photo}
          label="Akta Perubahan (Opsional)"
        />
        <ImageDisplay
          fileList={financeData?.sk_kemenkumham_photo}
          label="SK Kemenkumham"
        />
        <ImageDisplay
          fileList={financeData?.sk_kemenkumham_changes_photo}
          label="SK Kemenkumham Perubahan (Opsional)"
        />
        <ImageDisplay
          fileList={financeData?.licensing_documents_photo}
          label="SIUP, TDP atau NIB"
        />
      </>
    );
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-3">
      <Text className="text-blue-600" weight="semi-bold">
        Dokumen Legalitas
      </Text>
      <div className="bg-blue-50 p-4 text-base">
        <Icon name="exclamation-circle" /> Unggah hingga 5 file (.pdf, .doc,
        .jpg, .png) Ukuran file maksimum adalah 5 MB
      </div>
      {mitraType === "corporate" ? <CorporateDisplay /> : <IndividualDisplay />}
    </div>
  );
};

export default LegalDocs;
