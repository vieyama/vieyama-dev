import type {FC, ReactNode} from "react";
import React from "react";

import type {FieldError} from "react-hook-form";

interface FormItemProps {
  children: ReactNode;
  error: FieldError | undefined;
  label?: string;
}

const FormItem: FC<FormItemProps> = ({children, error, label}) => {
  return (
    <div>
      {label ?? null}
      {children}
      <span className="text-base text-error">{error?.message}</span>
    </div>
  );
};

export default FormItem;
