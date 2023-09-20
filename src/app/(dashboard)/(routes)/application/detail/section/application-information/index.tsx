import {Divider} from "~/components/ui";

import ApplicationDetails from "./application-details";
import ItemValuationDetails from "./item-appraisal-details";
import ItemDetails from "./item-details";
import RequirementDocuments from "./reqirment-documents";
import AppraisalInformation from "../appraisal-information";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const ApplicationInformation = ({
  financeData,
}: {
  financeData?: FinanceResponseData;
}) => {
  return (
    <div className="bg-white p-6">
      <Divider className="py-3.5" />
      <ApplicationDetails financeData={financeData} />
      <Divider className="py-3.5" />
      <RequirementDocuments financeData={financeData} />
      <Divider className="py-3.5" />
      <AppraisalInformation financeData={financeData} />
      <Divider className="py-3.5" />
      <ItemDetails financeData={financeData} />
      <Divider className="py-3.5" />
      <ItemValuationDetails financeData={financeData} />
    </div>
  );
};

export default ApplicationInformation;
