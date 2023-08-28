import React from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";

import {Button} from "~/components/ui";
import {DetailApplicationCorporateSchema} from "~/validations/FormApplication";

import {
  ApplicantDataSection,
  CompanyAddressDataSection,
  CompanyDirectionDataSection,
} from "./section";
import {EmergencyContactSection, FinancingDataSection} from "../global";

import type {Control, UseFormRegister, UseFormSetValue} from "react-hook-form";
import type {
  DetailApplicationCorporateType,
  DetailApplicationIndividualType,
} from "~/interfaces/form/detailApplication";

const ApplicationDetailCorporateForm = () => {
  const router = useRouter();
  const {
    control,
    register,
    handleSubmit,
    setValue,
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
            no_hp: 0,
            phoneCode: "",
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

  const onSubmit = (data: object) => {
    return data;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white p-6">
        <FinancingDataSection register={register} errors={errors} />
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

export default ApplicationDetailCorporateForm;
