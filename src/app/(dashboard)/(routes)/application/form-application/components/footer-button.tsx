import {useRouter, useSearchParams} from "next/navigation";

import {Button} from "~/components/ui";

const FooterButton = ({isLoading}: {isLoading: boolean}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const process = searchParams.get("process");
  const type = searchParams.get("type");
  const payment = searchParams.get("payment");
  const uuid = searchParams.get("uuid");

  const tabs = ["application-details", "requirement-document", "confirmation"];
  if (payment === "Inventory Financing") {
    tabs.splice(1, 0, "item-details");
  }

  const currentIndex = tabs.findIndex((item) => item === process);

  const handleNext = () => {
    const nextTabs = currentIndex + 1;
    router.push(
      `/application/form-application?process=${tabs[nextTabs]}&type=${type}&payment=${payment}&uuid=${uuid}`,
    );
  };

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
          type="submit">
          Simpan
        </Button>
        <Button
          type="submit"
          onClick={handleNext}
          isLoading={isLoading}
          className="w-full">
          Lanjut
        </Button>
      </div>
    </div>
  );
};

export default FooterButton;
