"use client";

import {forwardRef, useEffect, useState} from "react";

import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "~/utils/tailwind-utils";

const inputVariants = cva(
  "block w-full rounded-lg border disabled:bg-gray-200 focus:border-blue-500 outline-none border-gray-300 bg-white p-2.5 text-base text-gray-900 placeholder:text-gray-400",
  {
    variants: {
      extra: {
        prefix: "pl-10",
        suffix: "pr-10",
      },
      size: {
        sm: "h-8",
        md: "h-9",
        lg: "h-11",
        full: "h-auto w-full",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface InputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "size" | "prefix" | "suffix"
    >,
    VariantProps<typeof inputVariants> {
  isError?: boolean;
  onChangeValue?: (string: string) => void;
  customPrefix?: React.ReactNode;
  customSuffix?: React.ReactNode;
}

const InputNumber = forwardRef<HTMLInputElement, InputProps>(
  ({className, size, isError, onChangeValue, defaultValue, ...props}, ref) => {
    const [number, setNumber] = useState("");

    useEffect(() => {
      if (defaultValue) {
        // Format the number with commas
        const formattedValue = Number(defaultValue).toLocaleString();

        setNumber(formattedValue);
      }
    }, [defaultValue]);

    const handleChange = (event: {target: {value: string}}) => {
      const {value} = event.target;

      // Remove any existing commas from the input
      const sanitizedValue = value.replace(/,/g, "");

      // Format the number with commas
      const formattedValue = Number(sanitizedValue).toLocaleString();

      setNumber(formattedValue);
      onChangeValue?.(sanitizedValue);
    };
    return (
      <div className="relative">
        {props.customPrefix ? props.customPrefix : null}
        <input
          ref={ref}
          {...props}
          value={number}
          onChange={handleChange}
          className={cn(
            inputVariants({
              size,
              className: `${props.customPrefix ? "pl-16" : ""} ${
                props.customSuffix ? "pr-16" : ""
              } ${
                isError ? "border-2 border-error focus:border-error" : ""
              } ${className}`,
            }),
          )}
        />
        {props.customSuffix ? props.customSuffix : null}
      </div>
    );
  },
);
InputNumber.displayName = "InputNumber";

export default InputNumber;
