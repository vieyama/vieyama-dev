import {Divider} from "~/components/ui";

import ApplicationDetails from "./application-details";
import ItemDetails from "./item-details";
import RequirementDocuments from "./reqirment-documents";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const ApplicationInformation = ({
  financeData,
}: {
  financeData?: FinanceResponseData;
}) => {
  return (
    <div className="bg-white p-6">
      <ApplicationDetails financeData={financeData} />
      <Divider className="py-3.5" />
      <RequirementDocuments financeData={financeData} />
      <Divider className="py-3.5" />
      <ItemDetails financeData={financeData} />
    </div>
  );
};

export default ApplicationInformation;
