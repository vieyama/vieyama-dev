import {Input, Text} from "~/components/ui";

const InputDisplay = ({
  label,
  value,
  optional = false,
  inputClassName,
}: {
  label: string;
  value: string | number;
  optional?: boolean;
  inputClassName?: string;
}) => {
  return (
    <div className="items-left flex w-full flex-col gap-y-3 md:flex-row md:items-center">
      <Text className="w-[270px]">
        {label}
        {optional ? (
          <span className="ml-1 text-gray-500">(Opsional)</span>
        ) : null}
      </Text>
      <Input
        value={value}
        className={inputClassName}
        disabled
        inputWrapperClassName="w-full"
      />
    </div>
  );
};

export default InputDisplay;
