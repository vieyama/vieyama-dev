import {type Dispatch, type SetStateAction, useState} from "react";

import {useRouter, useSearchParams} from "next/navigation";

import {Button, Modal, Text} from "~/components/ui";

const FooterButton = ({
  isLoading,
  setSaveType,
  isDirty,
  onConfirm,
  isFilledData,
  applicationStatus,
}: {
  isDirty?: boolean;
  isLoading: boolean;
  isFilledData?: boolean;
  applicationStatus: number;
  setSaveType?: Dispatch<SetStateAction<"save" | "next">>;
  onConfirm?: () => void;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const process = searchParams.get("process");
  const [isOpen, setIsOpen] = useState(false);

  const handleRouteBack = () => {
    return process === "application-details"
      ? router.push("/workspace")
      : router.back();
  };
  const handleBack = () => {
    if (isDirty) {
      return setIsOpen(true);
    }
    return handleRouteBack();
  };

  return (
    <div className="mt-4 bg-white p-6">
      <div className="flex flex-col gap-5 md:flex-row">
        <Button
          variant="tertiary"
          className="w-full"
          type="button"
          isLoading={isLoading}
          onClick={handleBack}>
          Kembali
        </Button>
        <Button
          variant={process !== "confirmation" ? "tertiary" : "primary"}
          isLoading={isLoading}
          className="w-full"
          type="submit"
          disabled={
            (process === "confirmation" && !isFilledData) ||
            (process === "confirmation" && applicationStatus !== 0) ||
            ![0, 6].includes(applicationStatus)
          }
          onClick={() =>
            process !== "confirmation" ? setSaveType?.("save") : onConfirm?.()
          }>
          {process !== "confirmation" ? "Simpan" : "Kirim"}
        </Button>
        {process !== "confirmation" ? (
          <Button
            type="submit"
            onClick={() => setSaveType?.("next")}
            isLoading={isLoading}
            className="w-full">
            Lanjut
          </Button>
        ) : null}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        title="Anda yakin ingin meninggalkan halaman ini?"
        closable={false}
        className="m-5 max-h-[600px] overflow-y-auto md:max-h-max"
        footer={
          <div className="flex gap-4">
            <Button
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              variant="secondary"
              className="mb-2 mt-5 w-full">
              Batal
            </Button>

            <Button
              variant="danger"
              size="sm"
              onClick={handleRouteBack}
              className="mb-2 mt-5 w-full">
              Keluar
            </Button>
          </div>
        }>
        <Text align="text-justify">
          Perubahan yang anda masukan akan hilang ketika anda meninggalkan
          halaman ini tanpa menyimpannya terlebih dahulu
        </Text>
      </Modal>
    </div>
  );
};

export default FooterButton;
