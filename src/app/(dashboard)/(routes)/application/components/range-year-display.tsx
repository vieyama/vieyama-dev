import {Input, Text} from "~/components/ui";

const RangeYearDisplay = ({
  label,
  value1,
  value2,
}: {
  label: string;
  value1: string;
  value2: string;
}) => {
  return (
    <div className="items-left flex w-full flex-col gap-y-3 md:flex-row md:items-center">
      <Text className="w-[270px]">{label}</Text>
      <div className="flex w-full flex-col gap-4 sm:flex-row">
        <Input
          value={value1}
          disabled
          inputWrapperClassName="w-full"
          suffix={<div className="pr-3">Tahun</div>}
        />
        <Input
          value={value2}
          disabled
          inputWrapperClassName="w-full"
          suffix={<div className="pr-3">Bulan</div>}
        />
      </div>
    </div>
  );
};

export default RangeYearDisplay;
