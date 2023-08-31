import {useRouter} from "next/navigation";

import {Button} from "~/components/ui";

const FooterButton = () => {
  const router = useRouter();
  return (
    <div className="mt-4 bg-white p-6">
      <div className="flex flex-col gap-5 md:flex-row">
        <Button
          variant="tertiary"
          className="w-full"
          type="button"
          onClick={() => router.push("/workspace")}>
          Kembali
        </Button>
        <Button variant="tertiary" className="w-full" type="submit">
          Simpan
        </Button>
        <Button type="submit" className="w-full">
          Lanjut
        </Button>
      </div>
    </div>
  );
};

export default FooterButton;
