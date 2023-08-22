import React from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

import {Button} from "~/components/ui";
import {DetailApplicationSchema} from "~/validations/FormApplication";

import {FinancingDataSection} from "./section";

const ApplicationDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(DetailApplicationSchema),
  });

  const onSubmit = (data: object) => {
    return data;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FinancingDataSection register={register} errors={errors} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ApplicationDetailsForm;
