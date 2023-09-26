"use client";
import type {FC, ReactNode} from "react";
import React, {Fragment} from "react";

import {Dialog, Transition} from "@headlessui/react";
import {cva} from "class-variance-authority";

import {Button, Icon} from "~/components/ui";
import {cn} from "~/utils/tailwind-utils";

export type ModalSize = "full" | "xl" | "lg" | "md" | "sm";

export interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: ModalSize;
  closable?: boolean;
  title?: string;
  footer?: ReactNode;
  className?: string;
  withTitle?: boolean;
}

const modalVarians = cva("bg-white px-6 py-2 rounded-xl", {
  variants: {
    variant: {},
    size: {
      full: "w-screen h-screen",
      xl: "w-modal-xl",
      lg: "w-modal-lg",
      md: "w-modal-md",
      sm: "w-modal-sm",
      xs: "w-modal-xs",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const Modal: FC<IModal> = ({
  isOpen,
  onClose,
  children,
  size,
  closable = true,
  title,
  footer,
  className,
  withTitle = true,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment} data-testid="overlay">
      <Dialog
        onClose={onClose}
        className="relative z-50"
        aria-labelledby="modal-title"
        aria-modal="true">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto">
            <div className="min-h-screen flex h-screen w-full items-center justify-center p-4 sm:p-0">
              <div className={cn(modalVarians({size, className}))}>
                {withTitle ? (
                  <div
                    className={`flex h-10 items-center ${
                      title ? "justify-between" : "justify-end"
                    }`}>
                    <span
                      className={`text-lg font-semibold ${
                        title ? "block" : "hidden"
                      }`}>
                      {title}
                    </span>
                    <Button
                      className={closable ? "block" : "hidden"}
                      size="icon"
                      onClick={onClose}
                      variant="transparent">
                      <Icon name="x" size={24} />
                    </Button>
                  </div>
                ) : null}
                <div className="mt-2">{children}</div>
                {footer}
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
