import FormItem from "~/components/form";
import {Text, Upload} from "~/components/ui";

const FinanceDoc = () => {
  return (
    <div className="mt-6 flex flex-col gap-3.5">
      <Text className="text-blue-600" weight="semi-bold">
        Dokumen Foto
      </Text>

      <FormItem label="Kantor Beserta Aktifitasnya" labelClassName="mb-3.5">
        <Upload />
      </FormItem>
      <FormItem label="Foto Selfie Penanggung Jawab" labelClassName="mb-3.5">
        <Upload />
      </FormItem>
      <FormItem label="Foto Selfie Komisaris" labelClassName="mb-3.5">
        <Upload />
      </FormItem>
    </div>
  );
};

export default FinanceDoc;
