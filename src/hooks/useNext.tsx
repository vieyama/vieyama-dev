import {useAtom} from "jotai";
import {useRouter, useSearchParams} from "next/navigation";

import {applicationTabsAtom} from "~/state/formApplication";

export const useNext = () => {
  const [applicationTabs, setApplicationTabs] = useAtom(applicationTabsAtom);
  const router = useRouter();
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const payment = searchParams.get("payment");
  const uuid = searchParams.get("uuid");
  const process = searchParams.get("process");

  const tabs = ["application-details", "requirement-document", "confirmation"];
  if (payment === "Inventory Financing") {
    tabs.splice(1, 0, "item-details");
  }

  const currentIndex = tabs.findIndex((item) => item === process);

  const handleNext = () => {
    const currentTabs = [...applicationTabs];
    const updatedApplicationTab = applicationTabs[currentIndex];
    updatedApplicationTab.isDone = true;

    currentTabs.splice(currentIndex, 1, updatedApplicationTab);

    setApplicationTabs(currentTabs);

    const nextTabs = currentIndex + 1;
    router.push(
      `/application/form-application?process=${tabs[nextTabs]}&type=${type}&payment=${payment}&uuid=${uuid}`,
    );
  };

  return {handleNext};
};
