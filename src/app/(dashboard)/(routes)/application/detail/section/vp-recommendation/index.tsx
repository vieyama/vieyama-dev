import dayjs from "dayjs";
import {useRouter, useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";

import FormItem from "~/components/form";
import {InputTextArea, Text} from "~/components/ui";
import useToast from "~/hooks/useToast";
import {useInsertFinancingLoan} from "~/services/loan";

import FooterButton from "../../components/footer-button";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const VPRecommendation = ({
  financeData,
}: {
  financeData?: FinanceResponseData;
}) => {
  const financeStatus = financeData?.status?.no;

  const searchParams = useSearchParams();
  const financeId = searchParams.get("uuid");
  const router = useRouter();
  const {toast} = useToast();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<{notes?: string}>({
    defaultValues: {
      notes: financeData?.vp_notes,
    },
  });

  const insertFinancingLoan = useInsertFinancingLoan();

  const handleSave = (values: {notes?: string}) => {
    const dataSave = {
      uuid: financeId as string,
      notes: values?.notes,
      date_timestamps: dayjs().toISOString(),
      status: financeData?.status?.no,
    };

    insertFinancingLoan
      .mutateAsync(dataSave)
      .then(() => {
        router.replace("/workspace");
        return toast({
          message: "Permohonan Anda telah dikirimkan!",
          type: "success",
        });
      })
      .catch(() =>
        toast({
          message: "Terjadi kesalahan, silahkan coba kembali!",
          type: "error",
        }),
      );
  };

  return (
    <div className="bg-white p-6">
      <Text
        weight="semi-bold"
        variant="sub-header-2"
        className="mb-3.5 text-blue-600">
        Rekomendasi VP Ecosystem
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
        <FooterButton status={financeStatus ?? 0} />
      </form>
    </div>
  );
};

export default VPRecommendation;
