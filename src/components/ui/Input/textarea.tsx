import * as React from "react";

import {cn} from "~/utils/tailwind-utils";

export interface InputProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "size" | "prefix" | "suffix"
  > {
  isError?: boolean;
}

const InputTextArea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({className, isError, rows, ...props}, ref) => {
    const defaultClassName =
      "block disabled:bg-gray-200 w-full rounded-lg p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500";
    return (
      <div className="relative">
        <textarea
          rows={rows ?? 4}
          ref={ref}
          {...props}
          className={cn(
            defaultClassName,
            isError ? "border-2 border-error focus:border-error" : "",
            className,
          )}
        />
      </div>
    );
  },
);
InputTextArea.displayName = "InputTextArea";

export default InputTextArea;
