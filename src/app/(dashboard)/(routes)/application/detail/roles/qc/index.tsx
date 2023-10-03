import React, {useState} from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import {useAtom} from "jotai";
import {useRouter, useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";

import {Button} from "~/components/ui";
import useToast from "~/hooks/useToast";
import {useInsertFinancingLoan} from "~/services/loan";
import {authUserAtom} from "~/state/userAuth";
import {QCValuationSchema} from "~/validations/AdminDetail";

import ApplicantInformation from "../../section/applicant-information";
import ItemValuationDetails from "../../section/application-information/item-appraisal-details";
import QCApproval from "../../section/qc-approval";

import type {QCValuationType} from "~/interfaces/form/adminDetail";
import type {FinanceResponseData} from "~/interfaces/services/finance";

const QCSection: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  const [authUser] = useAtom(authUserAtom);
  const roleId = authUser?.role?.id;

  const {
    control,
    handleSubmit,
    watch,
    register,
    setValue,
    formState: {errors},
  } = useForm<QCValuationType>({
    resolver: yupResolver(QCValuationSchema),
    defaultValues: {
      notes: financeData?.qc_notes ?? "",
      appraisalItems: financeData?.items?.map((item) => ({
        id: item?.id as number,
        qc_quantity: item?.quantity as number,
        qc_hpp: item?.qc_hpp ?? 0,
      })),
      is_draft: false,
    },
  });
  const isApproved = watch("approved");

  const {toast} = useToast();

  const searchParams = useSearchParams();
  const financeId = searchParams.get("uuid");
  const router = useRouter();

  const [saveType, setSaveType] = useState<"save" | "submit">("save");

  const insertFinancingLoan = useInsertFinancingLoan();

  const handleSave = (values: QCValuationType) => {
    const dataSave = {
      uuid: financeId as string,
      notes: values?.notes,
      items: values?.appraisalItems,
      date_timestamps: dayjs().toISOString(),
      status: financeData?.status?.no,
      is_draft: saveType === "save",
    };

    insertFinancingLoan
      .mutateAsync(dataSave)
      .then(() => {
        if (saveType === "submit") {
          router.replace("/workspace");
        }

        return toast({
          message: "Berhasil menugaskan QC",
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

  const handleBack = () => {
    return router.back();
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleSave)}>
      <ApplicantInformation
        roleId={roleId as number}
        financeData={financeData}
      />
      <ItemValuationDetails
        financeData={financeData}
        control={control}
        watch={watch}
        errors={errors}
      />
      <QCApproval
        register={register}
        control={control}
        financeData={financeData}
        errors={errors}
      />
      <div className="mt-4 bg-white">
        <div className="flex flex-col gap-5 md:flex-row">
          <Button
            variant="tertiary"
            className="w-full"
            type="button"
            isLoading={insertFinancingLoan.isLoading}
            onClick={handleBack}>
            Kembali
          </Button>
          <Button
            disabled={!isApproved}
            variant="tertiary"
            className="w-full"
            type="submit"
            onClick={() => {
              setSaveType("save");
              //   setValue("is_draft", true);
            }}
            isLoading={insertFinancingLoan.isLoading}>
            Simpan
          </Button>
          <Button
            type="submit"
            variant="primary"
            isLoading={insertFinancingLoan.isLoading}
            disabled={!isApproved}
            onClick={() => {
              setSaveType("submit");
              setValue("is_draft", false);
            }}
            className="w-full">
            Kirim
          </Button>
        </div>
      </div>
    </form>
  );
};

export default QCSection;
