import {useEffect, useState} from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";

import {useNext} from "~/hooks/useNext";
import useToast from "~/hooks/useToast";
import {useInsertFinance} from "~/services/finance";
import {FormReqruitmentDocCorporateSchema} from "~/validations/FormReqruitmentDoc";

import {FinanceDocSection, LegalDocSection, PhotosDocSection} from "./section";
import FooterButton from "../../../components/footer-button";

import type {ReqruitmentDocCorporateType} from "~/interfaces/form/reqruitmentDoc";

const RequirementDocumentCorporateForm: React.FC<{
  defaultValueForm?: ReqruitmentDocCorporateType;
}> = ({defaultValueForm}) => {
  const searchParams = useSearchParams();
  const applicationType = searchParams.get("payment");
  const financeId = searchParams.get("uuid");
  const {toast} = useToast();

  const {
    handleSubmit,
    clearErrors,
    control,
    formState: {errors, isDirty},
  } = useForm<ReqruitmentDocCorporateType>({
    resolver: yupResolver(FormReqruitmentDocCorporateSchema),
    defaultValues: {
      ...defaultValueForm,
      ...(applicationType === "Inventory Financing" && {
        invoices_others_photo: [],
      }),
    },
  });

  const handleBeforeUnload = (e: {
    preventDefault: () => void;
    returnValue: string;
  }) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    if (isDirty) window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      if (isDirty)
        window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  const [saveType, setSaveType] = useState<"save" | "next">("save");
  const insertFinance = useInsertFinance();
  const {handleNext} = useNext();

  const onSubmit = (data: object) => {
    const dataSave = {
      ...data,
      step: "requirements_document",
      partner_type: "corporate",
      financing_type: applicationType,
      uuid: financeId,
    };

    if (!isDirty && saveType === "next") {
      return handleNext();
    }

    if (isDirty) {
      insertFinance
        .mutateAsync(dataSave)
        .then(() => {
          if (saveType === "next") {
            return handleNext();
          }
        })
        .catch(() => {
          return toast({
            message: "Terjadi kesalahan, silahkan coba kembali!",
            type: "error",
          });
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LegalDocSection
        errors={errors}
        clearErrors={clearErrors}
        control={control}
      />
      <FinanceDocSection errors={errors} control={control} />
      <PhotosDocSection errors={errors} control={control} />
      <FooterButton
        isLoading={insertFinance.isLoading}
        setSaveType={setSaveType}
      />
    </form>
  );
};

export default RequirementDocumentCorporateForm;
