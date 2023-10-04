import React from "react";

import {useAtom} from "jotai";

import {authUserAtom} from "~/state/userAuth";

import ApplicantInformation from "../../section/applicant-information";
import ApplicationInformation from "../../section/application-information";
import AppraisalInformation from "../../section/appraisal-information";
import AppraisalNotes from "../../section/appraisal-notes";
import VPRecommendation from "../../section/vp-recommendation";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const VPSection: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  const [authUser] = useAtom(authUserAtom);
  const roleId = authUser?.role?.id;

  return (
    <>
      <ApplicantInformation
        roleId={roleId as number}
        financeData={financeData}
      />
      <ApplicationInformation financeData={financeData} />
      <AppraisalInformation financeData={financeData} />
      <AppraisalNotes financeData={financeData} />
      <VPRecommendation financeData={financeData} />
    </>
  );
};

export default VPSection;
