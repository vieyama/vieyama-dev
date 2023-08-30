/* eslint-disable @next/next/no-img-element */
import React, {Fragment, useRef} from "react";

import {Dialog, Transition} from "@headlessui/react";
import Image from "next/image";
import {useHover} from "usehooks-ts";

import {useDisclosure} from "~/hooks";

import Icon from "../Icon";

const DisplayImage = ({file}: {file: string}) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const [previewImage, previewImageHandler] = useDisclosure(false);

  return (
    <div
      ref={hoverRef as React.LegacyRef<HTMLDivElement>}
      className="relative flex flex-col gap-4">
      <img
        src={file}
        className="h-[120px] w-[120px] object-cover object-center"
        alt="fishfin image upload"
      />
      <div
        className={`absolute bottom-[24.5px] flex h-10 w-full cursor-pointer items-center justify-center bg-white bg-opacity-60 ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
        onClick={previewImageHandler.open}>
        <Icon name="eyes-solid" color="gray500" />
      </div>

      <Transition
        appear
        show={previewImage}
        as={Fragment}
        data-testid="overlay">
        <Dialog
          onClose={previewImageHandler.close}
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
            <Dialog.Panel
              className="fixed inset-0 z-10 overflow-y-auto"
              onClick={previewImageHandler.close}>
              <div className="flex h-screen w-screen flex-col items-center justify-center">
                <Image
                  src={file}
                  width={300}
                  height={300}
                  alt=""
                  onClick={(e) => e.preventDefault()}
                  className="h-auto w-auto max-w-[950px] select-none"
                />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DisplayImage;
