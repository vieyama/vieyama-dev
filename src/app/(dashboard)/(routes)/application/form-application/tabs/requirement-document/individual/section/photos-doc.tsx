import FormItem from "~/components/form";
import {Text, Upload} from "~/components/ui";

const FinanceDoc = () => {
  return (
    <div className="mt-6 flex flex-col gap-3.5">
      <Text className="text-blue-600" weight="semi-bold">
        Dokumen Foto
      </Text>

      <FormItem
        label="Survey Rumah (Tampak Depan Dengan Nomor Rumah)"
        labelClassName="mb-3.5">
        <Upload />
      </FormItem>
      <FormItem label="Foto Selfie Pemohon" labelClassName="mb-3.5">
        <Upload />
      </FormItem>
    </div>
  );
};

export default FinanceDoc;
