import React from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import useToast from "~/hooks/useToast";
import {useInsertFinance} from "~/services/finance";
import {FormReqruitmentDocIndividualSchema} from "~/validations/FormReqruitmentDoc";

import {FinanceDocSection, LegalDocSection, PhotosDocSection} from "./section";
import FooterButton from "../../../components/footer-button";

import type {ReqruitmentDocIndividualType} from "~/interfaces/form/reqruitmentDoc";

const RequirementDocumentIndividualForm: React.FC<{
  defaultValueForm?: ReqruitmentDocIndividualType;
}> = ({defaultValueForm}) => {
  const searchParams = useSearchParams();
  const applicationType = searchParams.get("payment");
  const financeId = searchParams.get("uuid");
  const {toast} = useToast();

  const {
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: {errors},
  } = useForm<ReqruitmentDocIndividualType>({
    resolver: yupResolver(FormReqruitmentDocIndividualSchema),
    defaultValues: {
      ...defaultValueForm,
      ...(applicationType === "Inventory Financing" && {
        invoices_others_photo: [],
      }),
    },
  });

  useFormPersist(`item-reqruitement-coporate-form-${financeId}`, {
    watch,
    setValue,
    storage: window.localStorage, // default window.sessionStorage
  });

  const insertFinance = useInsertFinance();

  const onSubmit = (data: object) => {
    const dataSave = {
      ...data,
      step: "requirements_document",
      partner_type: "individual",
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
      <LegalDocSection
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
      <FinanceDocSection
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
      <PhotosDocSection
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
      <FooterButton isLoading={false} />
    </form>
  );
};

export default RequirementDocumentIndividualForm;
