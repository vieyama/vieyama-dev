import * as React from "react";

import {cva, type VariantProps} from "class-variance-authority";

import {Icon} from "~/components/ui";
import {cn} from "~/utils/tailwind-utils";

import type {ColorIndex} from "~/interfaces/constants/colors";
import type {IcomoonType} from "~/interfaces/icons/icomoonType";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-base font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 disabled:pointer-not-allowed disabled:cursor-not-allowed disabled:opacity-1 disabled:bg-gray-100 disabled:text-gray-400",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-blue-50 text-blue-600 hover:bg-blue-100",
        tertiary:
          "border border-blue-600 bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 disabled:border-0",
        transparent: "text-blue-600 hover:bg-blue-50 disabled:bg-transparent",
        danger: "bg-red-500 text-white hover:bg-red-600",
        link: "text-blue-600 underline-offset-4 hover:underline disabled:bg-transparent",
      },
      size: {
        sm: "h-8 rounded-lg py-1 px-5.5",
        md: "h-11 py-2.5 px-5.5",
        lg: "h-11 rounded-lg px-8 text-lg",
        icon: "h-auto w-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: IcomoonType;
  isLoading?: boolean;
}

const getIconColor = (variant: string) => {
  let color = "";
  switch (variant) {
    case "secondary":
      color = "blue600";
      break;
    case "tertiary":
      color = "blue600";
      break;
    case "transparent":
      color = "blue600";
      break;
    default:
      color = "white";
      break;
  }
  return color;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {className, variant, size, children, icon, isLoading = false, ...props},
    ref,
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            className: `${className} ${
              isLoading ? "pointer-events-none cursor-not-allowed" : ""
            }`,
          }),
        )}
        ref={ref}
        {...props}>
        {icon && (
          <Icon
            name={icon}
            color={
              (props.disabled
                ? "gray400"
                : getIconColor(variant as string)) as ColorIndex
            }
            className={!children ? "mr-0" : "mr-1"}
          />
        )}
        {isLoading ? (
          <div role="status" className="flex">
            <svg
              aria-hidden="true"
              className="mr-2 inline h-5 w-5 animate-spin fill-blue-600 text-gray-400"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export {buttonVariants};
export default Button;
