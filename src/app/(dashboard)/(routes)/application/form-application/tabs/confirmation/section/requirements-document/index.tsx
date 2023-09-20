import CollapseComponent from "~/app/(dashboard)/(routes)/application/components/collapse-component";

import FinanceDoc from "./section/finance-doc";
import LegalDocs from "./section/legal-docs";
import PhotosDoc from "./section/photos-doc";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const RequirementDocuments: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  return (
    <CollapseComponent title="Dokumen Persyaratan">
      <LegalDocs financeData={financeData} />
      <FinanceDoc financeData={financeData} />
      <PhotosDoc financeData={financeData} />
    </CollapseComponent>
  );
};

export default RequirementDocuments;
