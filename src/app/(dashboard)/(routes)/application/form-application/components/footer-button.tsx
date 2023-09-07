import {useRouter} from "next/navigation";

import {Button} from "~/components/ui";

const FooterButton = ({isLoading}: {isLoading: boolean}) => {
  const router = useRouter();
  return (
    <div className="mt-4 bg-white p-6">
      <div className="flex flex-col gap-5 md:flex-row">
        <Button
          variant="tertiary"
          className="w-full"
          type="button"
          isLoading={isLoading}
          onClick={() => router.push("/workspace")}>
          Kembali
        </Button>
        <Button
          variant="tertiary"
          isLoading={isLoading}
          className="w-full"
          type="submit">
          Simpan
        </Button>
        <Button type="submit" isLoading={isLoading} className="w-full">
          Lanjut
        </Button>
      </div>
    </div>
  );
};

export default FooterButton;
