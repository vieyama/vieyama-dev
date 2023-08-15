"use client";

import type {FC, ReactNode} from "react";
import React, {Fragment} from "react";

import {Dialog, Transition} from "@headlessui/react";
import {cva} from "class-variance-authority";
import Image from "next/image";

import {Button, Icon} from "~/components/ui";
import {cn} from "~/utils/tailwind-utils";

export interface IDrawer {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const modalVarians = cva("bg-white px-6 py-2 w-64", {
  variants: {
    variant: {},
    size: {},
  },
});

const Drawer: FC<IDrawer> = ({isOpen, onClose, children, className}) => {
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
          enter="transition ease-in-out duration-100 transform"
          enterFrom="translate-x-0"
          enterTo="translate-x-0"
          leave="ease-in duration-100"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-0">
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto">
            <div className="min-h-screen flex h-screen p-0">
              <div className={cn(modalVarians({className}))}>
                <div className={`mt-3 flex h-10 items-center justify-between`}>
                  <Image
                    src="/assets/fishfin-logo.svg"
                    alt="Fishfin Logo"
                    width={122}
                    height={19}
                  />
                  <Button size="icon" onClick={onClose} variant="transparent">
                    <Icon name="x" size={24} />
                  </Button>
                </div>
                <div className="mt-5">{children}</div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Drawer;
