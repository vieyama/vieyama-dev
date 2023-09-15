import {InputTextArea, Text} from "~/components/ui";

const TextAreaDisplay = ({label, value}: {label: string; value: string}) => {
  return (
    <div className="items-left flex w-full flex-col gap-y-3 md:flex-row">
      <Text className="w-64">{label}</Text>
      <InputTextArea value={value} inputWrapperClassName="w-full" disabled />
    </div>
  );
};

export default TextAreaDisplay;
