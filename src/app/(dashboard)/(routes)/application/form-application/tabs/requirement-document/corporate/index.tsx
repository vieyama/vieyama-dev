import React from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import {FormReqruitmentDocCorporateSchema} from "~/validations/FormReqruitmentDoc";

import {FinanceDocSection, LegalDocSection, PhotosDocSection} from "./section";
import FooterButton from "../../../components/footer-button";

import type {ReqruitmentDocCorporateType} from "~/interfaces/form/reqruitmentDoc";

const RequirementDocumentCorporateForm = () => {
  const searchParams = useSearchParams();
  const applicationType = searchParams.get("payment");

  const {
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: {errors},
  } = useForm<ReqruitmentDocCorporateType>({
    resolver: yupResolver(FormReqruitmentDocCorporateSchema),
    defaultValues: {
      ...(applicationType === "inventory" && {invoices_others_photo: []}),
    },
  });

  useFormPersist("item-reqruitement-coporate-form", {
    watch,
    setValue,
    storage: window.localStorage, // default window.sessionStorage
  });

  const onSubmit = (data: object) => {
    return data;
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

export default RequirementDocumentCorporateForm;
