"use client";
import React from "react";

import {useAtom} from "jotai";
import {useRouter, useSearchParams} from "next/navigation";

import {Text} from "~/components/ui";
import {useMediaLayout} from "~/hooks/useMediaLayout";
import {applicationTabsAtom} from "~/state/formApplication";

import {
  ApplicationDetailsForm,
  ConfirmationForm,
  ItemDetailsForm,
  RequirementDocumentForm,
} from "./tabs";

const FormApplication = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const flowProccess = searchParams.get("process");
  const isMobile = useMediaLayout("sm");

  const userType = searchParams.get("type");
  const [applicationTabs] = useAtom(applicationTabsAtom);

  const tabs = [
    {
      name: "application-details",
      number: 1,
      label: "Rincian Aplikasi",
      isActive:
        flowProccess === "application-details" ||
        applicationTabs.find((tabs) => tabs.name === "application-details")
          ?.isDone,
    },
    {
      name: "item-details",
      number: 2,
      label: "Rincian Barang",
      isActive:
        flowProccess === "item-details" ||
        applicationTabs.find((tabs) => tabs.name === "item-details")?.isDone,
    },
    {
      name: "requirement-document",
      number: 3,
      label: "Dokumen Persyaratan",
      isActive:
        flowProccess === "requirement-document" ||
        applicationTabs.find((tabs) => tabs.name === "requirement-document")
          ?.isDone,
    },
    {
      name: "confirmation",
      number: 4,
      label: "Konfirmasi",
      isActive:
        flowProccess === "confirmation" ||
        applicationTabs.find((tabs) => tabs.name === "confirmation")?.isDone,
    },
  ];

  const handleClickTabs = (type: string) => {
    router.push(
      `/application/form-application?process=${type}&type=${userType}`,
    );
  };

  const Display = () => {
    let result = null;
    switch (flowProccess) {
      case "application-details":
        result = <ApplicationDetailsForm />;
        break;
      case "item-details":
        result = <ItemDetailsForm />;
        break;
      case "requirement-document":
        result = <RequirementDocumentForm />;
        break;
      case "confirmation":
        result = <ConfirmationForm />;
        break;
      default:
        result = <ApplicationDetailsForm />;
        break;
    }
    return result;
  };

  return (
    <div className="mt-6 flex flex-col gap-y-4 overflow-hidden rounded-lg border border-stroke">
      <div className="flex justify-between gap-2 bg-white p-6 sm:justify-evenly sm:p-7.5">
        {tabs.map((item) => (
          <div
            key={item.name}
            className="flex w-48 cursor-pointer flex-col items-center gap-3 text-center sm:w-auto"
            onClick={() => handleClickTabs(item.name)}>
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full border-2 md:h-16 md:w-16 ${
                item.isActive ? "border-blue-600" : "border-stroke"
              } bg-background`}>
              <Text
                variant={isMobile ? "body-text-1" : "sub-header-1"}
                className={`select-none ${
                  item.isActive ? "text-blue-600" : "text-black"
                }`}>
                {item.number}
              </Text>
            </div>
            <Text
              variant={isMobile ? "body-text-2" : "paragraph"}
              className={`select-none text-center ${
                item.isActive ? "text-blue-600" : "text-gray-500"
              }`}>
              {item.label}
            </Text>
          </div>
        ))}
      </div>

      <Display />
    </div>
  );
};

export default FormApplication;
