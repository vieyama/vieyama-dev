import React from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

import {DetailApplicationCorporateSchema} from "~/validations/FormApplication";

import {
  AddressDataSection,
  ApplicantDataSection,
  DomicileDataSection,
  PersonalWorkplaceDataSection,
  SpouseDataSection,
} from "./section";
import FooterButton from "../../../components/footer-button";
import {EmergencyContactSection, FinancingDataSection} from "../global";

import type {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import type {
  DetailApplicationCorporateType,
  DetailApplicationIndividualType,
} from "~/interfaces/form/detailApplication";

const ApplicationDetailIndividualForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm<DetailApplicationIndividualType | DetailApplicationCorporateType>(
    {
      resolver: yupResolver(DetailApplicationCorporateSchema),
    },
  );

  const onSubmit = (data: object) => {
    return data;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white p-6">
        <FinancingDataSection
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
        />
        <ApplicantDataSection
          register={
            register as UseFormRegister<DetailApplicationIndividualType>
          }
          errors={errors}
          setValue={
            setValue as UseFormSetValue<DetailApplicationIndividualType>
          }
        />
        <AddressDataSection
          register={
            register as UseFormRegister<DetailApplicationIndividualType>
          }
          errors={errors}
        />
        <DomicileDataSection
          register={
            register as UseFormRegister<DetailApplicationIndividualType>
          }
          errors={errors}
          setValue={
            setValue as UseFormSetValue<DetailApplicationIndividualType>
          }
          getValues={
            getValues as UseFormGetValues<DetailApplicationIndividualType>
          }
        />
        <SpouseDataSection
          register={
            register as UseFormRegister<DetailApplicationIndividualType>
          }
          errors={errors}
          setValue={
            setValue as UseFormSetValue<DetailApplicationIndividualType>
          }
          getValues={
            getValues as UseFormGetValues<DetailApplicationIndividualType>
          }
        />
        <PersonalWorkplaceDataSection
          register={
            register as UseFormRegister<DetailApplicationIndividualType>
          }
          setValue={
            setValue as UseFormSetValue<DetailApplicationIndividualType>
          }
          getValues={
            getValues as UseFormGetValues<DetailApplicationIndividualType>
          }
          errors={errors}
        />
        <EmergencyContactSection register={register} errors={errors} />
        <FooterButton />
      </div>
    </form>
  );
};

export default ApplicationDetailIndividualForm;
