import {Controller} from "react-hook-form";

import type {
  Control,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";

const ControllerWrapper: React.FC<{
  control: Control<FieldValues>;
  fieldName: string;
  children: ({
    onChange,
    value,
  }: Pick<ControllerRenderProps, "onChange" | "value">) =>
    | JSX.Element
    | JSX.Element;
}> = ({control, fieldName, children}) => {
  return (
    <Controller
      control={control}
      name={fieldName}
      render={({field: {onChange, value}}) =>
        typeof children === "function" ? children({onChange, value}) : children
      }
    />
  );
};

export default ControllerWrapper;
