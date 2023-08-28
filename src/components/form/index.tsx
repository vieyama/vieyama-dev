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
  optional?: boolean;
}

const FormItem: FC<FormItemProps> = ({
  children,
  error,
  label,
  className,
  childClassName,
  labelClassName,
  optional = false,
}) => {
  return (
    <div className={className}>
      {label ? (
        <div className={labelClassName ?? ""}>
          {label}{" "}
          {optional ? <span className="text-gray-500">Opsional</span> : ""}
        </div>
      ) : null}
      <div className={childClassName}>
        {children}
        <span className="text-base text-error">{error?.message}</span>
      </div>
    </div>
  );
};

export default FormItem;
