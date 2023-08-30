import React from "react";

import CurrencyInput from "react-currency-input-field";

import {cn} from "~/utils/tailwind-utils";

import type {CurrencyInputProps} from "react-currency-input-field";

export interface InputProps extends CurrencyInputProps {
  isError?: boolean;
  onChangeValue?: (value: string, name: string) => void;
  withPrefix?: boolean;
}

const InputNumber = React.forwardRef<CurrencyInputProps, InputProps>(
  ({className, onChangeValue, isError, withPrefix = true, ...props}, _ref) => {
    const defaultClassName =
      "block w-full h-9 rounded-lg border border-gray-300 bg-white p-2.5 pl-[60px] text-base text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500";
    return (
      <div className="relative flex">
        {withPrefix ? (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-s-lg border border-gray-300 bg-gray-200 px-3.5">
            IDR
          </div>
        ) : null}
        <CurrencyInput
          {...props}
          placeholder={props.placeholder}
          decimalsLimit={2}
          onValueChange={(value, name) =>
            onChangeValue?.(value as string, name as string)
          }
          className={cn(
            defaultClassName,
            `${
              isError ? "border-2 border-error focus:border-error" : ""
            } ${className}`,
          )}
        />
      </div>
    );
  },
);
InputNumber.displayName = "InputNumber";

export default InputNumber;
