import React from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

import {Button} from "~/components/ui";
import {DetailApplicationCorporateSchema} from "~/validations/FormApplication";

import {
  ApplicantDataSection,
  CompanyAddressDataSection,
  CompanyDirectionDataSection,
  FinancingDataSection,
} from "./section";

import type {DetailApplicationType} from "~/interfaces/form/detailApplication";

const ApplicationDetailCorporateForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<DetailApplicationType>({
    resolver: yupResolver(DetailApplicationCorporateSchema),
    defaultValues: {
      companyDirction: [
        {
          fullName: "",
          email: "",
          ktpNumber: "",
          pob: "",
          dob: "",
          position: "",
          phone: "",
          phoneCode: "",
          shareholding: "",
          addressById: "",
          provinceById: "",
          regencyById: "",
          districtById: "",
          villageById: "",
          postalCodeById: "",
        },
      ],
    },
  });

  const onSubmit = (data: object) => {
    return data;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FinancingDataSection register={register} errors={errors} />
      <ApplicantDataSection register={register} errors={errors} />
      <CompanyAddressDataSection register={register} errors={errors} />
      <CompanyDirectionDataSection
        register={register}
        errors={errors}
        control={control}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ApplicationDetailCorporateForm;
