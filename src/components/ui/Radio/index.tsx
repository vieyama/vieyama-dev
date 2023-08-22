"use client";

import * as React from "react";

import {cn} from "~/utils/tailwind-utils";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "prefix" | "suffix"
  > {
  isError?: boolean;
  id: string;
  rootClassName?: string;
}

const Radio = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, rootClassName, children, id, ...props}, ref) => {
    return (
      <div className={`flex items-center ${rootClassName ?? ""}`}>
        <input
          ref={ref}
          id={id}
          type="radio"
          className={cn(
            "h-5 w-5 rounded-full text-blue-600 accent-blue-600 focus:ring-0",
            className,
          )}
          {...props}
        />
        <label htmlFor={id} className="ml-2 text-base">
          {children}
        </label>
      </div>
    );
  },
);
Radio.displayName = "Radio";

export default Radio;
