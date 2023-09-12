"use client";

import {useEffect} from "react";

import {useAtom} from "jotai";

import {financingListSearchAtom} from "~/state/workspace";

import Greeting from "./greeting-section";
import TableSection from "./table-section";
import TopSection from "./top-section";

const Workspace = () => {
  const [_, setFinancingListSearch] = useAtom(financingListSearchAtom);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) setFinancingListSearch("");

    return () => {
      isMounted = false;
    };
  }, [setFinancingListSearch]);

  return (
    <div className="mt-6 flex flex-col gap-y-4">
      <Greeting />
      <div className="bg-white p-7">
        <TopSection />
        <TableSection />
      </div>
    </div>
  );
};

export default Workspace;
