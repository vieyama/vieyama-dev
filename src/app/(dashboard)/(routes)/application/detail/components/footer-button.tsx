import {useRouter} from "next/navigation";

import {Button} from "~/components/ui";

const FooterButton = ({isLoading}: {isLoading?: boolean}) => {
  const router = useRouter();
  const handleBack = () => {
    return router.back();
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
        <Button
          type="submit"
          variant="primary"
          isLoading={isLoading}
          className="w-full">
          Kirim
        </Button>
      </div>
    </div>
  );
};

export default FooterButton;
