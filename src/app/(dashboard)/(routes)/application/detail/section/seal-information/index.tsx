import {useForm} from "react-hook-form";

import FormItem from "~/components/form";
import ControllerWrapper from "~/components/form/Controller";
import {Checkbox, InputTextArea, Text} from "~/components/ui";

import InputDisplay from "../../../components/input-display";
import FooterButton from "../../components/footer-button";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const SealInformation = ({}: {financeData?: FinanceResponseData}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<{notes?: string}>({});
  const handleSave = () => {};

  return (
    <div className="bg-white p-6">
      <Text
        weight="semi-bold"
        variant="sub-header-2"
        className="mb-3.5 text-blue-600">
        Informasi Segel
      </Text>
      <InputDisplay label="Tanggal Segel" value={""} />
      <div className="my-4" />
      <InputDisplay label="Penanggung Jawab Segel" value={""} />
      <div className="my-4" />
      <form
        className="flex flex-col gap-3.5"
        onSubmit={handleSubmit(handleSave)}>
        <FormItem
          label="Notes"
          error={errors.notes}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <InputTextArea isError={!!errors.notes} {...register("notes")} />
        </FormItem>
        <div className="my-4" />
        <FormItem error={errors.notes}>
          <ControllerWrapper fieldName="approved" control={control}>
            {({onChange, value}) => (
              <Checkbox checked={value} onChange={onChange}>
                Dengan Meneliti dokumen ini, saya yang melakukan penyimpanan dan
                segel, menyatakan bahwa semua informasi yang diberikan adalah
                lengkap dan benar.
              </Checkbox>
            )}
          </ControllerWrapper>
        </FormItem>
        <FooterButton />
      </form>
    </div>
  );
};

export default SealInformation;
