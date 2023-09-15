"use client";
import React from "react";

import {
  type FieldErrors,
  useFieldArray,
  type UseFormRegister,
} from "react-hook-form";

import {Button} from "~/components/ui";

import CompanyDirectionForm from "./company-direction-form";

import type {Control, UseFormGetValues} from "react-hook-form";
import type {DetailApplicationCorporateType} from "~/interfaces/form/detailApplication";

const CompanyDirectionData = ({
  errors,
  register,
  control,
  getValues,
}: {
  register: UseFormRegister<DetailApplicationCorporateType>;
  errors: FieldErrors<DetailApplicationCorporateType>;
  control: Control<DetailApplicationCorporateType>;
  getValues: UseFormGetValues<DetailApplicationCorporateType>;
}) => {
  const {fields, append, remove} = useFieldArray({
    control,
    name: "directors", // unique name for your Field Array
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
          getValues={getValues}
          control={control}
        />
      ))}

      <Button
        type="button"
        variant="tertiary"
        onClick={() =>
          append({
            name: "",
            email: "",
            pob: "",
            dob: "",
            position: "",
            share_ownership: "",
            address: "",
            no_ktp: "",
            no_hp: "",
            postal_code: 0,
          })
        }>
        + Tambah Pemegang Saham / Direksi
      </Button>
    </div>
  );
};

export default CompanyDirectionData;
