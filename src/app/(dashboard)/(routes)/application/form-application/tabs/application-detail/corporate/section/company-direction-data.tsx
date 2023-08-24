"use client";
import React from "react";

import {
  type FieldErrors,
  useFieldArray,
  type UseFormRegister,
} from "react-hook-form";

import {Button} from "~/components/ui";

import CompanyDirectionForm from "./company-direction-form";

import type {Control} from "react-hook-form";
import type {DetailApplicationType} from "~/interfaces/form/detailApplication";

const CompanyDirectionData = ({
  errors,
  register,
  control,
}: {
  register: UseFormRegister<DetailApplicationType>;
  errors: FieldErrors<DetailApplicationType>;
  control: Control<DetailApplicationType>;
}) => {
  const {fields, append, remove} = useFieldArray({
    control,
    name: "companyDirction", // unique name for your Field Array
  });
  return (
    <div className="mt-10 flex flex-col gap-y-5">
      {fields.map((field, index) => (
        <CompanyDirectionForm
          key={field.id}
          field={field}
          index={index}
          errors={errors}
          register={register}
          fieldsLength={fields.length}
          remove={remove}
        />
      ))}

      <Button
        type="button"
        onClick={() =>
          append({
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
          })
        }>
        Tambah Pemegang Saham / Direksi
      </Button>
    </div>
  );
};

export default CompanyDirectionData;
