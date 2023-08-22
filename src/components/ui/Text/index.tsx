import type {FC, ReactNode} from "react";
import React from "react";

import {cva} from "class-variance-authority";

import type {VariantProps} from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    variant: {
      "heading-1": "text-heading-1",
      "heading-2": "text-heading-2",
      "heading-3": "text-heading-3",
      "sub-header-1": "text-sub-header-1",
      "sub-header-2": "text-sub-header-2",
      paragraph: "text-base",
      "body-text-1": "text-body-text-1",
      "body-text-2": "text-body-text-2",
      "caption-1": "text-caption-1",
      "caption-2": "text-caption-2",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      "semi-bold": "font-semibold",
      bold: "font-bold",
    },
    align: {
      "text-left": "text-left",
      "text-right": "text-right",
      "text-center": "text-center",
      "text-justify": "text-justify",
    },
  },
  defaultVariants: {
    variant: "paragraph",
    weight: "regular",
  },
});

export interface TextProps extends VariantProps<typeof textVariants> {
  children: ReactNode;
  className?: string;
}

const Text: FC<TextProps> = ({
  children,
  variant,
  weight,
  align = "text-left",
  className,
}) => {
  return (
    <div className={`flex ${align}`}>
      <span className={textVariants({variant, weight, className})}>
        {children}
      </span>
    </div>
  );
};

export default Text;
