import {useForm} from "react-hook-form";

import FormItem from "~/components/form";
import ControllerWrapper from "~/components/form/Controller";
import {Checkbox, Input, InputTextArea} from "~/components/ui";

import FooterButton from "../../components/footer-button";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const QCApproval = ({financeData}: {financeData?: FinanceResponseData}) => {
  const financeStatus = financeData?.status?.no;

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<{notes?: string; pic?: string; approved?: boolean}>({});
  const handleSave = () => {};

  return (
    <div className="mt-5 bg-white p-6">
      <form
        className="flex flex-col gap-3.5"
        onSubmit={handleSubmit(handleSave)}>
        <FormItem
          label="Penanggung Jawab Penilaian"
          error={errors.pic}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <Input disabled isError={!!errors.pic} {...register("pic")} />
        </FormItem>
        <FormItem
          label="Notes"
          error={errors.notes}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <InputTextArea isError={!!errors.notes} {...register("notes")} />
        </FormItem>
        <FormItem>
          <ControllerWrapper fieldName="approved" control={control}>
            {({onChange, value}) => (
              <Checkbox checked={value} onChange={onChange}>
                Dengan Menandatangani dokumen ini, Saya yang melakukan Appraisal
                menyatakan semua informasi yang telah diberikan adalah LENGKAP
                dan BENAR
              </Checkbox>
            )}
          </ControllerWrapper>
        </FormItem>
        <FooterButton withSave status={financeStatus ?? 0} />
      </form>
    </div>
  );
};

export default QCApproval;
