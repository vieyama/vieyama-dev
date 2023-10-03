import FormItem from "~/components/form";
import ControllerWrapper from "~/components/form/Controller";
import {Checkbox, InputTextArea} from "~/components/ui";

import InputDisplay from "../../../components/input-display";

import type {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import type {QCValuationType} from "~/interfaces/form/adminDetail";
import type {FinanceResponseData} from "~/interfaces/services/finance";

const QCApproval: React.FC<{
  financeData?: FinanceResponseData;
  register: UseFormRegister<QCValuationType>;
  control: Control<FieldValues>;
  errors: FieldErrors<QCValuationType>;
}> = ({financeData, errors, register, control}) => {
  return (
    <div className="mt-5 bg-white p-6">
      <InputDisplay
        label="Penanggung Jawab Penilaian"
        value={financeData?.qc?.name ?? ""}
      />
      <FormItem
        label="Notes"
        error={errors.notes}
        className="mt-5 flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <InputTextArea isError={!!errors.notes} {...register("notes")} />
      </FormItem>
      <FormItem className="mt-5">
        <ControllerWrapper fieldName="approved" control={control}>
          {({onChange, value}) => (
            <Checkbox checked={value} onChange={onChange}>
              Dengan Menandatangani dokumen ini, Saya yang melakukan Appraisal
              menyatakan semua informasi yang telah diberikan adalah LENGKAP dan
              BENAR
            </Checkbox>
          )}
        </ControllerWrapper>
      </FormItem>
    </div>
  );
};

export default QCApproval;
