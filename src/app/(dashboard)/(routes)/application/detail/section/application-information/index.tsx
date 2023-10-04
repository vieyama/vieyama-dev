import {useAtom} from "jotai";

import {Divider} from "~/components/ui";
import {authUserAtom} from "~/state/userAuth";

import ApplicationDetails from "./application-details";
import ItemDetails from "./item-details";
import RequirementDocuments from "./reqirment-documents";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const ApplicationInformation = ({
  financeData,
}: {
  financeData?: FinanceResponseData;
}) => {
  const [authUser] = useAtom(authUserAtom);
  const roleId = authUser?.role?.id;
  return (
    <div className="bg-white p-6">
      <ApplicationDetails financeData={financeData} />
      <Divider className="py-3.5" />
      <RequirementDocuments financeData={financeData} />
      {roleId === 5 ? (
        <>
          <Divider className="py-3.5" />
          <ItemDetails financeData={financeData} />
        </>
      ) : null}
    </div>
  );
};

export default ApplicationInformation;
