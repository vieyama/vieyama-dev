import React from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import {DetailApplicationCorporateSchema} from "~/validations/FormApplication";

import {
  ApplicantDataSection,
  CompanyAddressDataSection,
  CompanyDirectionDataSection,
} from "./section";
import FooterButton from "../../../components/footer-button";
import {EmergencyContactSection, FinancingDataSection} from "../global";

import type {Control, UseFormRegister, UseFormSetValue} from "react-hook-form";
import type {
  DetailApplicationCorporateType,
  DetailApplicationIndividualType,
} from "~/interfaces/form/detailApplication";

const ApplicationDetailCorporateForm = () => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: {errors},
  } = useForm<DetailApplicationIndividualType | DetailApplicationCorporateType>(
    {
      resolver: yupResolver(DetailApplicationCorporateSchema),
      defaultValues: {
        directors: [
          {
            name: "",
            email: "",
            no_ktp: "",
            pob: "",
            dob: "",
            position: "",
            share_ownership: "",
            address: "",
            province: "",
            city: "",
            district: "",
            postal_code: "",
          },
        ],
      },
    },
  );

  useFormPersist("application-detail-coporate-form", {
    watch,
    setValue,
    storage: window.localStorage, // default window.sessionStorage
  });

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
          register={register as UseFormRegister<DetailApplicationCorporateType>}
          errors={errors}
          setValue={setValue as UseFormSetValue<DetailApplicationCorporateType>}
        />
        <CompanyAddressDataSection
          register={register as UseFormRegister<DetailApplicationCorporateType>}
          errors={errors}
        />
        <CompanyDirectionDataSection
          register={register as UseFormRegister<DetailApplicationCorporateType>}
          errors={errors}
          control={control as Control<DetailApplicationCorporateType>}
        />
      </div>
      <div className="mt-4 bg-white p-6">
        <EmergencyContactSection register={register} errors={errors} />
        <FooterButton />
      </div>
    </form>
  );
};

export default ApplicationDetailCorporateForm;
