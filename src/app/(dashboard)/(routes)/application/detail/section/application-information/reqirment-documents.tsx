import RequirementDocumentsForm from "../../../form-application/tabs/confirmation/section/requirements-document";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const RequirementDocuments = ({
  financeData,
}: {
  financeData?: FinanceResponseData;
}) => {
  return <RequirementDocumentsForm financeData={financeData} />;
};

export default RequirementDocuments;
