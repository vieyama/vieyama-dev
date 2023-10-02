import dayjs from "dayjs";
import {useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";

import FormItem from "~/components/form";
import {InputTextArea, Text} from "~/components/ui";
import useToast from "~/hooks/useToast";
import {useInsertFinancingLoan} from "~/services/loan";

import FooterButton from "../../components/footer-button";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const ClarificationNotes = ({
  financeData,
}: {
  financeData?: FinanceResponseData;
}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<{notes?: string}>({
    defaultValues: {
      notes: financeData?.admin_notes,
    },
  });
  const {toast} = useToast();

  const searchParams = useSearchParams();
  const financeId = searchParams.get("uuid");
  const statusFinance = financeData?.status?.no;

  const insertFinancingLoan = useInsertFinancingLoan();
  const handleSave = (data: {notes?: string}) => {
    const dataSave = {
      uuid: financeId as string,
      notes: data.notes,
      date_timestamps: dayjs().toISOString(),
      status: financeData?.status?.no,
    };
    insertFinancingLoan.mutateAsync(dataSave).catch(() =>
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
        <FooterButton
          withReturn={[1, 5].includes(statusFinance as number)}
          withApprove={statusFinance !== 5}
          status={statusFinance ?? 0}
        />
      </form>
    </div>
  );
};

export default ClarificationNotes;
