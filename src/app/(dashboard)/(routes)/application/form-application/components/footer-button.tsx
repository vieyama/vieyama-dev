import type {Dispatch, SetStateAction} from "react";

import {useRouter, useSearchParams} from "next/navigation";

import {Button} from "~/components/ui";

const FooterButton = ({
  isLoading,
  setSaveType,
}: {
  isLoading: boolean;
  setSaveType: Dispatch<SetStateAction<"save" | "next">>;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const process = searchParams.get("process");

  const handleBack = () => {
    return process === "application-details"
      ? router.push("/workspace")
      : router.back();
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
          variant="tertiary"
          isLoading={isLoading}
          className="w-full"
          type="submit"
          onClick={() => setSaveType("save")}>
          Simpan
        </Button>
        <Button
          type="submit"
          onClick={() => setSaveType("next")}
          isLoading={isLoading}
          className="w-full">
          Lanjut
        </Button>
      </div>
    </div>
  );
};

export default FooterButton;
