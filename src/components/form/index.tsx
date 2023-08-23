import type {FC, ReactNode} from "react";
import React from "react";

import type {FieldError} from "react-hook-form";

interface FormItemProps {
  children: ReactNode;
  error?: FieldError;
  label?: string | ReactNode;
  className?: string;
  childClassName?: string;
  labelClassName?: string;
}

const FormItem: FC<FormItemProps> = ({
  children,
  error,
  label,
  className,
  childClassName,
  labelClassName,
}) => {
  return (
    <div className={className}>
      {<div className={labelClassName || ""}>{label}</div> ?? null}
      <div className={childClassName}>
        {children}
        <span className="text-base text-error">{error?.message}</span>
      </div>
    </div>
  );
};

export default FormItem;
