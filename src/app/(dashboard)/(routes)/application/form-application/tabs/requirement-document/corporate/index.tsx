import React from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";

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
    setValue,
    watch,
    formState: {errors},
  } = useForm<ReqruitmentDocCorporateType>({
    resolver: yupResolver(FormReqruitmentDocCorporateSchema),
    defaultValues: {
      ...defaultValueForm,
      ...(applicationType === "Inventory Financing" && {
        invoices_others_photo: [],
      }),
    },
  });

  const insertFinance = useInsertFinance();

  const onSubmit = (data: object) => {
    const dataSave = {
      ...data,
      step: "requirements_document",
      partner_type: "corporate",
      financing_type: applicationType,
      uuid: financeId,
    };

    insertFinance
      .mutateAsync(dataSave)
      .then(() => {
        return toast({
          message: `Berhasil menyimpan data`,
          type: "success",
        });
      })
      .catch(() => {
        return toast({
          message: "Terjadi kesalahan, silahkan coba kembali!",
          type: "error",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LegalDocSection errors={errors} setValue={setValue} watch={watch} />
      <FinanceDocSection errors={errors} setValue={setValue} watch={watch} />
      <PhotosDocSection errors={errors} setValue={setValue} watch={watch} />
      <FooterButton isLoading={false} />
    </form>
  );
};

export default RequirementDocumentCorporateForm;
