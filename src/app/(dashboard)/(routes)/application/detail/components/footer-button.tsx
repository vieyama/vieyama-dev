"use client";

import type {Dispatch, SetStateAction} from "react";
import {useState} from "react";

import {useRouter} from "next/navigation";

import {Button} from "~/components/ui";
import {useDisclosure} from "~/hooks";

import ModalComponent from "./modal";

const FooterButton = ({
  isLoading,
  withSave,
  withReturn,
  withReject,
  withApprove,
  status,
  disabled,
  setSaveType,
}: {
  disabled?: boolean;
  isLoading?: boolean;
  withSave?: boolean;
  withReturn?: boolean;
  withReject?: boolean;
  withApprove?: boolean;
  status: number;
  isDirty?: boolean;
  setSaveType?: Dispatch<SetStateAction<"save" | "submit">>;
}) => {
  const router = useRouter();
  const handleBack = () => {
    return router.back();
  };
  const [modalType, setModalType] = useState("return");
  const [isOpenModal, openModalHandler] = useDisclosure(false);

  const onClose = () => openModalHandler.close();
  const handleOpenModal = (type: string) => {
    setModalType(type);
    openModalHandler.open();
  };

  return (
    <div className="mt-4 bg-white">
      <div className="flex flex-col gap-5 md:flex-row">
        <Button
          variant="tertiary"
          className="w-full"
          type="button"
          isLoading={isLoading}
          onClick={handleBack}>
          Kembali
        </Button>
        {withSave ? (
          <Button
            disabled={disabled}
            variant="tertiary"
            className="w-full"
            type="submit"
            onClick={() => setSaveType?.("save")}
            isLoading={isLoading}>
            Simpan
          </Button>
        ) : null}
        {withReturn ? (
          <Button
            variant="tertiary"
            className="w-full"
            type="button"
            onClick={() => handleOpenModal("return")}
            isLoading={isLoading}>
            Kembalikan
          </Button>
        ) : null}
        {withReject ? (
          <Button
            variant="tertiary"
            className="w-full"
            type="button"
            onClick={() => handleOpenModal("reject")}
            isLoading={isLoading}>
            Tolak
          </Button>
        ) : null}
        {withApprove ? (
          <Button
            type="submit"
            variant="primary"
            isLoading={isLoading}
            onClick={() => handleOpenModal("approve")}
            className="w-full">
            Setuju
          </Button>
        ) : (
          <Button
            type="submit"
            variant="primary"
            isLoading={isLoading}
            disabled={disabled}
            onClick={() => setSaveType?.("submit")}
            className="w-full">
            Kirim
          </Button>
        )}
      </div>
      <ModalComponent
        status={status}
        isOpen={isOpenModal}
        onClose={onClose}
        modalType={modalType}
      />
    </div>
  );
};

export default FooterButton;
