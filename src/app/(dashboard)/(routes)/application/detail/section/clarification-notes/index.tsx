import {useForm} from "react-hook-form";

import FormItem from "~/components/form";
import {InputTextArea, Text} from "~/components/ui";

import FooterButton from "../../components/footer-button";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const ClarificationNotes = ({}: {financeData?: FinanceResponseData}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<{notes?: string}>({});
  const handleSave = () => {};

  return (
    <div className="bg-white p-6">
      <Text
        weight="semi-bold"
        variant="sub-header-2"
        className="mb-3.5 text-blue-600">
        Klarifikasi / Konfirmasi / Catatan
      </Text>
      <form
        className="flex flex-col gap-3.5"
        onSubmit={handleSubmit(handleSave)}>
        <FormItem
          label="Notes"
          optional
          error={errors.notes}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <InputTextArea isError={!!errors.notes} {...register("notes")} />
        </FormItem>
        <FooterButton />
      </form>
    </div>
  );
};

export default ClarificationNotes;
