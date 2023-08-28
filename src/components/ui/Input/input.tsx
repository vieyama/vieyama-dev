import * as React from "react";

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
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  isError?: boolean;
  inputWrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {className, size, prefix, suffix, isError, inputWrapperClassName, ...props},
    ref,
  ) => {
    return (
      <div className={`relative ${inputWrapperClassName ?? ""}`}>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
          {prefix ?? null}
        </div>
        <input
          ref={ref}
          {...props}
          className={cn(
            inputVariants({
              size,
              className: `${
                isError ? "border-2 border-error focus:border-error" : ""
              } ${prefix ? "pl-10" : ""} ${className} ${suffix ? "pr-10" : ""}`,
            }),
          )}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
          {suffix ?? null}
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

export default Input;
