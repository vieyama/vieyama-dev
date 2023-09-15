import Select from "react-select";

import FormItem from "~/components/form";
import ControllerWrapper from "~/components/form/Controller";

import type {Control, FieldError, FieldValues} from "react-hook-form";
import type {GroupBase, InputActionMeta, OptionsOrGroups} from "react-select";

type Option = {
  value: string;
  label: string;
};

const SelectComponent = ({
  control,
  errorMessage,
  label,
  fieldName,
  optional,
  isLoading,
  defaultValue,
  onInputChange,
  options,
}: {
  control: Control<FieldValues>;
  errorMessage: FieldError;
  label: string;
  fieldName: string;
  optional?: boolean;
  defaultValue?: Option | null;
  isLoading?: boolean;
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
  options?: OptionsOrGroups<Option, GroupBase<Option>>;
}) => {
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
            onChange={(e) => onChange(e?.value)}
            components={{IndicatorSeparator: null}}
            options={options}
          />
        )}
      </ControllerWrapper>
    </FormItem>
  );
};

export default SelectComponent;
