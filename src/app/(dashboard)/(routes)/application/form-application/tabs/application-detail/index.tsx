import {useSearchParams} from "next/navigation";

import ApplicationDetailCorporateForm from "./corporate";
import ApplicationDetailIndividualForm from "./individual";

const ApplicationDetails = () => {
  const searchParams = useSearchParams();

  const userType = searchParams.get("type");

  return userType === "corporate" ? (
    <ApplicationDetailCorporateForm />
  ) : (
    <ApplicationDetailIndividualForm />
  );
};

export default ApplicationDetails;
