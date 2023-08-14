import * as React from "react";

import {cva, type VariantProps} from "class-variance-authority";

import {Icon} from "~/components/ui";
import {cn} from "~/utils/tailwind-utils";

import type {ColorIndex} from "~/interfaces/constants/colors";
import type {IcomoonType} from "~/interfaces/icons/icomoonType";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-base font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-1 disabled:bg-gray-100 disabled:text-gray-400",
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
}

const getIconColor = (variant: string) => {
  let color = "white";
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
  ({className, variant, size, children, icon, ...props}, ref) => {
    return (
      <button
        className={cn(buttonVariants({variant, size, className}))}
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
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export {buttonVariants};
export default Button;
