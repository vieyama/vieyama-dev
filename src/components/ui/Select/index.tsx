"use client";

import React from "react";

import {cn} from "~/utils/tailwind-utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  ({className, children, ...props}, _ref) => {
    return (
      <select
        className={cn(
          "block w-full rounded-lg border border-gray-300 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
          className,
        )}
        {...props}>
        {children}
      </select>
    );
  },
);
Select.displayName = "Select";

export default Select;
