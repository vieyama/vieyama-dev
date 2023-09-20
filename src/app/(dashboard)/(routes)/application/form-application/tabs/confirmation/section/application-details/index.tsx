import {useSearchParams} from "next/navigation";

import ApplicantData from "./applicant-data";
import DirectorData from "./director-data";
import FinancingData from "./financing-data";
import PersonalWorksplaceData from "./personal-worksplace-data";
import SpouseData from "./spouse-data";
import CollapseComponent from "../../../../../components/collapse-component";
import AddressData from "../global/address-data";
import EmergencyContactData from "../global/emergency-contact-data";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const ApplicationDetails: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  const searchParams = useSearchParams();
  const userType = searchParams.get("type");
  return (
    <CollapseComponent title="Rincian Aplikasi">
      <FinancingData financeData={financeData} />
      <ApplicantData financeData={financeData} />
      <AddressData
        addressData={{
          address: financeData?.address,
          province: financeData?.province?.name,
          city: financeData?.city?.name,
          district: financeData?.district?.name,
          postal_code: financeData?.postal_code?.toString(),
        }}
        title={
          userType === "corporate"
            ? "Alamat Perusahaan"
            : "Alamat Lengkap (Sesuai KTP)"
        }
      />
      {userType === "corporate"
        ? financeData?.directors?.map((director, index) => (
            <DirectorData key={director.id} index={index} director={director} />
          ))
        : null}

      {userType === "individual" ? (
        <AddressData
          addressData={{
            address: financeData?.domicile_address,
            province: financeData?.domicile_province?.name,
            city: financeData?.domicile_city?.name,
            district: financeData?.domicile_district?.name,
            postal_code: financeData?.domicile_postal_code?.toString(),
          }}
          title="Alamat Domisili"
        />
      ) : null}
      {userType === "individual" && financeData?.marital_status === "Kawin" ? (
        <SpouseData financeData={financeData} />
      ) : null}
      {userType === "individual" ? (
        <PersonalWorksplaceData financeData={financeData} />
      ) : null}
      <EmergencyContactData
        financeData={financeData}
        userType={userType as string}
      />
    </CollapseComponent>
  );
};

export default ApplicationDetails;
