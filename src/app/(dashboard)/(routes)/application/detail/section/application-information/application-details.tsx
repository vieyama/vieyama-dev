import ApplicationDetailsForm from "../../../form-application/tabs/confirmation/section/application-details";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const ApplicationDetails = ({
  financeData,
}: {
  financeData?: FinanceResponseData;
}) => {
  return <ApplicationDetailsForm financeData={financeData} />;
};

export default ApplicationDetails;
