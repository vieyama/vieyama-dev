import React from "react";

import CurrencyInput from "react-currency-input-field";

import {cn} from "~/utils/tailwind-utils";

import type {CurrencyInputProps} from "react-currency-input-field";

export interface InputProps extends CurrencyInputProps {
  isError?: boolean;
}

const InputNumber = React.forwardRef<CurrencyInputProps, InputProps>(
  ({className, onChange, isError, ...props}, _ref) => {
    const defaultClassName =
      "block w-full h-9 rounded-lg border border-gray-300 bg-white p-2.5 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500";
    return (
      <CurrencyInput
        {...props}
        placeholder={props.placeholder}
        decimalsLimit={2}
        onChange={onChange}
        className={cn(
          defaultClassName,
          `${
            isError ? "border-2 border-error focus:border-error" : ""
          } ${className}`,
        )}
      />
    );
  },
);
InputNumber.displayName = "InputNumber";

export default InputNumber;
