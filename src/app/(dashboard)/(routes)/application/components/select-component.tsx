/* eslint-disable @typescript-eslint/ban-ts-comment */
import Select from "react-select";

import FormItem from "~/components/form";
import ControllerWrapper from "~/components/form/Controller";

import type {Control, FieldError, FieldValues} from "react-hook-form";
import type {
  GroupBase,
  InputActionMeta,
  Options,
  OptionsOrGroups,
  SingleValue,
} from "react-select";

export type OtherOption<T> = T;

interface SelectComponentProps<Option> {
  control: Control<FieldValues>;
  errorMessage: FieldError;
  label: string;
  fieldName: string;
  optional?: boolean;
  defaultValue?: Option | null;
  isLoading?: boolean;
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
  options?: OptionsOrGroups<Option, GroupBase<Option>>;
  optionChange?: (
    option: SingleValue<Option>,
    onChange: (...event: unknown[]) => void,
  ) => void;
  isOptionDisabled?: (option: Option, selectValue: Options<Option>) => boolean;
}

const SelectComponent = <T,>({
  control,
  errorMessage,
  label,
  fieldName,
  optional,
  isLoading,
  defaultValue,
  onInputChange,
  options,
  optionChange,
  isOptionDisabled,
}: SelectComponentProps<T>): JSX.Element => {
  return (
    <FormItem
      label={label}
      error={errorMessage}
      optional={optional}
      childClassName="w-full"
      labelClassName="md:min-w-[250px] lg:min-w-[250px]"
      className="flex flex-col gap-4 md:flex-row">
      <ControllerWrapper fieldName={fieldName} control={control}>
        {({onChange}) => (
          <Select
            id={fieldName}
            className="react-select"
            isLoading={isLoading}
            theme={(theme) => ({
              ...theme,
              borderRadius: 8,
            })}
            defaultValue={defaultValue}
            styles={{
              menu: (provided) => ({...provided, zIndex: 9999}),
            }}
            placeholder=""
            onInputChange={onInputChange}
            onChange={(event) => {
              if (optionChange) {
                optionChange?.(event, onChange);
              } else {
                //@ts-ignore
                onChange(event?.value);
              }
            }}
            components={{IndicatorSeparator: null}}
            options={options}
            isOptionDisabled={isOptionDisabled}
          />
        )}
      </ControllerWrapper>
    </FormItem>
  );
};

export default SelectComponent;
