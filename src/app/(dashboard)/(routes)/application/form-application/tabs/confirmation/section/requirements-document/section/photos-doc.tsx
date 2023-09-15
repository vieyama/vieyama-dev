import {useSearchParams} from "next/navigation";

import {Text} from "~/components/ui";
import ImageDisplay from "~/dashboard/(routes)/application/form-application/components/image-display";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const PhotosDoc: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  const searchParams = useSearchParams();
  const mitraType = searchParams.get("type");

  const IndividualDisplay = () => {
    return (
      <>
        <ImageDisplay
          fileList={financeData?.house_photo}
          label="Survey Rumah (Tampak Depan Dengan Nomor Rumah)"
        />
        <ImageDisplay
          fileList={financeData?.selfie_pic_photo}
          label="Foto Selfie Pemohon"
        />
      </>
    );
  };

  const CorporateDisplay = () => {
    return (
      <>
        <ImageDisplay
          fileList={financeData?.office_photo}
          label="Kantor Beserta Aktifitasnya"
        />
        <ImageDisplay
          fileList={financeData?.selfie_pic_photo}
          label="Foto Selfie Penanggung Jawab"
        />
        <ImageDisplay
          fileList={financeData?.selfie_comisarist_photo}
          label="Foto Selfie Komisaris"
        />
      </>
    );
  };
  return (
    <div className="flex flex-col gap-4 bg-white p-3">
      <Text className="text-blue-600" weight="semi-bold">
        Dokumen Foto
      </Text>

      {mitraType === "corporate" ? <CorporateDisplay /> : <IndividualDisplay />}
    </div>
  );
};

export default PhotosDoc;
