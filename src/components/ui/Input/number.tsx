"use client";

import {forwardRef, useState} from "react";

import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "~/utils/tailwind-utils";

const inputVariants = cva(
  "block w-full rounded-lg border focus:border-blue-500 outline-none border-gray-300 bg-white p-2.5 text-base text-gray-900 placeholder:text-gray-400",
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
}

const InputNumber = forwardRef<HTMLInputElement, InputProps>(
  ({className, size, isError, ...props}, ref) => {
    const [number, setNumber] = useState("");

    const handleChange = (event: {target: {value: string}}) => {
      const {value} = event.target;

      // Remove any existing commas from the input
      const sanitizedValue = value.replace(/,/g, "");

      // Format the number with commas
      const formattedValue = Number(sanitizedValue).toLocaleString();

      setNumber(formattedValue);
    };
    return (
      <div className="relative">
        <input
          ref={ref}
          {...props}
          value={number}
          onChange={handleChange}
          className={cn(
            inputVariants({
              size,
              className: `${
                isError ? "border-2 border-error focus:border-error" : ""
              } ${className}`,
            }),
          )}
        />
      </div>
    );
  },
);
InputNumber.displayName = "InputNumber";

export default InputNumber;
