/* eslint-disable @next/next/no-img-element */
import React, {Fragment, useRef} from "react";

import {Dialog, Transition} from "@headlessui/react";
import Image from "next/image";
import {useHover} from "usehooks-ts";

import {googleApisFmsUrl} from "~/constants/globals";
import {useDisclosure} from "~/hooks";

import Icon from "../Icon";

const DisplayImage = ({
  index,
  fileId,
  handleDelete,
  allowEmpty,
}: {
  index: number;
  allowEmpty?: boolean;
  fileId: string | null;
  handleDelete?: (file: string) => void;
}) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const [previewImage, previewImageHandler] = useDisclosure(false);
  const [isErrorImage, isErrorImageHandler] = useDisclosure(false);
  const fileType = fileId?.split(".").pop();

  let srcFile = "";

  switch (fileType) {
    case "jpg":
      srcFile = `${googleApisFmsUrl}/attachment/${fileId}`;
      break;
    case "jpeg":
      srcFile = `${googleApisFmsUrl}/attachment/${fileId}`;
      break;
    case "png":
      srcFile = `${googleApisFmsUrl}/attachment/${fileId}`;
      break;
    case "pdf":
      srcFile = "/assets/preview-pdf.svg";
      break;
    case "docx":
      srcFile = "/assets/preview-docx.svg";
      break;
    case "doc":
      srcFile = "/assets/preview-docx.svg";
      break;
    default:
      srcFile = "/assets/no-images.svg";
      break;
  }

  let allowDelete = true;

  if (!allowEmpty) {
    if (!isErrorImage) {
      allowDelete = index !== 0;
    }
    if (!handleDelete) {
      allowDelete = false;
    }
  }

  return (
    <div
      ref={hoverRef as React.LegacyRef<HTMLDivElement>}
      className="relative flex h-[120px] max-h-[120px] w-[120px] max-w-[120px] flex-col gap-4 ">
      {allowDelete ? (
        <div
          className={`absolute right-0 top-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-s-lg rounded-t-none bg-white bg-opacity-60 ${
            isHover ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => handleDelete?.(fileId as string)}>
          <Icon name="trash" color="gray500" size={21} />
        </div>
      ) : null}
      <Image
        src={isErrorImage ? "/assets/broken-image.svg" : srcFile}
        width={120}
        height={120}
        objectFit="cover"
        objectPosition="center"
        onError={() => {
          isErrorImageHandler.open();
        }}
        className="h-full w-full object-cover object-center"
        alt="fishfin image upload"
      />
      {!isErrorImage && fileType ? (
        <div
          className={`${
            ["doc", "docx"].includes(fileType as string) ? "hidden" : "absolute"
          } bottom-0 flex h-10 w-full cursor-pointer items-center justify-center bg-white bg-opacity-60 ${
            isHover ? "opacity-100" : "opacity-0"
          }`}
          onClick={previewImageHandler.open}>
          <Icon name="eyes-solid" color="gray500" />
        </div>
      ) : null}

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
              {["jpg", "jpeg", "png"].includes(fileType as string) ? (
                <div className="flex h-screen w-screen flex-col items-center justify-center">
                  <Image
                    src={`${googleApisFmsUrl}/attachment/${fileId}`}
                    width={300}
                    height={300}
                    alt=""
                    onClick={(e) => e.preventDefault()}
                    className="h-auto w-auto max-w-[950px] select-none"
                  />
                </div>
              ) : (
                <div className="flex h-screen w-screen flex-col items-center justify-center">
                  <iframe
                    className="h-[90vh] w-full max-w-[950px]"
                    src={`${googleApisFmsUrl}/attachment/${fileId}`}></iframe>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DisplayImage;
