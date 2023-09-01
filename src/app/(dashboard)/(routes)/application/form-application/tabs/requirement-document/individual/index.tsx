import React from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import {FormReqruitmentDocIndividualSchema} from "~/validations/FormReqruitmentDoc";

import {FinanceDocSection, LegalDocSection, PhotosDocSection} from "./section";
import FooterButton from "../../../components/footer-button";

import type {ReqruitmentDocIndividualType} from "~/interfaces/form/reqruitmentDoc";

const RequirementDocumentIndividualForm = () => {
  const searchParams = useSearchParams();
  const applicationType = searchParams.get("payment");

  const {
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: {errors},
  } = useForm<ReqruitmentDocIndividualType>({
    resolver: yupResolver(FormReqruitmentDocIndividualSchema),
    defaultValues: {
      ...(applicationType === "inventory" && {invoices_others_photo: []}),
    },
  });

  useFormPersist("item-reqruitement-individual-form", {
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
      <FooterButton />
    </form>
  );
};

export default RequirementDocumentIndividualForm;
