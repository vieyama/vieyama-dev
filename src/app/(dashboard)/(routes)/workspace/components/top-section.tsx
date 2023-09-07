"use client";

import {useAtom} from "jotai";
import debounce from "lodash/debounce";
import {useRouter} from "next/navigation";

import {Button, Icon, Input} from "~/components/ui";
import {financingListSearchAtom} from "~/state/workspace";

const TopSection = () => {
  const [_, setFinancingListSearch] = useAtom(financingListSearchAtom);

  const router = useRouter();
  const handleAdd = () => {
    router.push("/application");
  };

  const handleSearch = debounce((searchValue: string) => {
    setFinancingListSearch(searchValue);
  }, 1500);

  return (
    <div className="screen-520:item-center flex flex-col items-start justify-between gap-y-4 screen-520:flex-row">
      <Button
        size="lg"
        className="w-full screen-520:w-auto"
        onClick={handleAdd}>
        Ajukan Fishfin
      </Button>
      <div className="w-full screen-520:w-auto">
        <Input
          placeholder="Cari"
          size="lg"
          className=""
          onChange={(event) => handleSearch(event.target.value)}
          prefix={<Icon name="search" />}
        />
      </div>
    </div>
  );
};

export default TopSection;
