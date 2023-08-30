import React from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";

import {Button} from "~/components/ui";
import {DetailApplicationCorporateSchema} from "~/validations/FormApplication";

import {
  AddressDataSection,
  ApplicantDataSection,
  DomicileDataSection,
  PersonalWorkplaceDataSection,
  SpouseDataSection,
} from "./section";
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
  const router = useRouter();
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
        />
        <PersonalWorkplaceDataSection
          register={
            register as UseFormRegister<DetailApplicationIndividualType>
          }
          setValue={
            setValue as UseFormSetValue<DetailApplicationIndividualType>
          }
          errors={errors}
        />
        <EmergencyContactSection register={register} errors={errors} />
        <div className="mt-8 flex flex-col gap-5 md:flex-row">
          <Button
            variant="tertiary"
            className="w-full"
            type="button"
            onClick={() => router.push("/workspace")}>
            Kembali
          </Button>
          <Button variant="tertiary" className="w-full" type="submit">
            Simpan
          </Button>
          <Button type="submit" className="w-full">
            Lanjut
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ApplicationDetailIndividualForm;
