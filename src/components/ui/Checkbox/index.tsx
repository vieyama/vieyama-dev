"use client";

import * as React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import {randomString} from "~/utils/random-string";
import {cn} from "~/utils/tailwind-utils";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "prefix" | "suffix"
  > {
  isError?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, children, ...props}, ref) => {
    const randId = randomString(5, "aA");
    return (
      <div className="flex items-center">
        <input
          ref={ref}
          id={randId}
          type="checkbox"
          className={cn(
            "h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 accent-blue-600 focus:ring-2 focus:ring-blue-500",
            className,
          )}
          {...props}
        />
        <label htmlFor={randId} className="ml-2 text-base">
          {children}
        </label>
      </div>
    );
  },
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
