import React from "react";

import {useAtom} from "jotai";

import {authUserAtom} from "~/state/userAuth";

import ApplicantInformation from "../../section/applicant-information";
import ApplicationInformation from "../../section/application-information";
import ClarificationNotes from "../../section/clarification-notes";
import QCAssignment from "../../section/qc-assignment";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const AdminSection = ({
  financeData,
  refetch,
}: {
  financeData?: FinanceResponseData;
  refetch: () => void;
}) => {
  const [authUser] = useAtom(authUserAtom);
  const roleId = authUser?.role?.id;
  const status = financeData?.status?.no;

  return (
    <>
      <ApplicantInformation roleId={roleId ?? 0} financeData={financeData} />
      <ApplicationInformation financeData={financeData} />

      {[5].includes(roleId as number) && status === 5 ? (
        <ClarificationNotes financeData={financeData} refetch={refetch} />
      ) : null}
      {status === 1 ? <QCAssignment financeData={financeData} /> : null}
    </>
  );
};

export default AdminSection;
