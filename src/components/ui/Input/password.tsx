"use client";

import {forwardRef, useState} from "react";

import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "~/utils/tailwind-utils";

import Icon from "../Icon";

const inputVariants = cva(
  "block w-full rounded-lg border outline-none border-gray-300 bg-white p-2.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-blue-500",
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
  isError?: boolean;
}

const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  ({className, size, prefix, isError, ...props}, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
      setIsPasswordVisible((prevState) => !prevState);
    }

    return (
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
          {prefix ?? null}
        </div>
        <input
          ref={ref}
          {...props}
          type={isPasswordVisible ? "text" : "password"}
          className={cn(
            inputVariants({
              size,
              className: `${
                isError ? "border-2 border-error focus:border-error" : ""
              } ${prefix ? "pl-10" : ""} ${className}`,
            }),
          )}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3.5">
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
            onClick={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <Icon name="eye-off" size={20} />
            ) : (
              <Icon name="eyes" size={20} />
            )}
          </button>
        </div>
      </div>
    );
  },
);
InputPassword.displayName = "Input";

export default InputPassword;
