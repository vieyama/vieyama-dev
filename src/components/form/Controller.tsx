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
    onBlur,
    value,
  }: Pick<
    ControllerRenderProps,
    "onChange" | "value" | "onBlur"
  >) => JSX.Element;
}> = ({control, fieldName, children}) => {
  return (
    <Controller
      control={control}
      name={fieldName}
      render={({field: {onChange, onBlur, value}}) =>
        typeof children === "function"
          ? children({onChange, onBlur, value})
          : children
      }
    />
  );
};

export default ControllerWrapper;
