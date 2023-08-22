"use client";
import {RadioGroup} from "@headlessui/react";

interface RadioGroupComponentProps {
  value?: string | number;
  onChange?: (e: string) => void;
  name: string;
  defaultValue?: string | number;
  options: {value: string | number; label: string; className?: string}[];
  className?: string;
  childClassName?: string;
}

const RadioGroupComponent: React.FC<RadioGroupComponentProps> = ({
  value,
  onChange,
  name,
  defaultValue,
  options,
  className,
  childClassName,
}) => {
  return (
    <RadioGroup
      name={name}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      className={className ?? "flex w-auto"}>
      {options.map((option) => (
        <RadioGroup.Option
          key={option.value}
          value={option.value}
          className={`cursor-pointer ${childClassName ?? "flex"}`}>
          {({checked}) => (
            <div className={option?.className ?? ""}>
              <div className="flex h-5 w-5 items-center justify-center rounded-full border hover:border-blue-900 ui-checked:border-blue-600 ui-not-checked:border-gray-600">
                {checked ? (
                  <div className="h-[12px] w-[12px] rounded-full bg-blue-600 hover:bg-blue-900"></div>
                ) : null}
              </div>
              <span className="text-base">{option.label}</span>
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupComponent;
