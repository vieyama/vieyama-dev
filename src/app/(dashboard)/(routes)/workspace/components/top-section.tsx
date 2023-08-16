import React from "react";

import {Button, Icon, Input} from "~/components/ui";

const TopSection = () => {
  return (
    <div className="screen-520:item-center flex flex-col items-start justify-between gap-y-4 screen-520:flex-row">
      <Button size="lg" className="w-full screen-520:w-auto">
        Ajukan Fishfin
      </Button>
      <div className="w-full screen-520:w-auto">
        <Input
          placeholder="Cari Barang"
          size="lg"
          className=""
          prefix={<Icon name="search" />}
        />
      </div>
    </div>
  );
};

export default TopSection;
