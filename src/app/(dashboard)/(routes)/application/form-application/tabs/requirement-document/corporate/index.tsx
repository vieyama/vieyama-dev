import React from "react";

import {useForm} from "react-hook-form";

import FormItem from "~/components/form";
import {Text, Upload} from "~/components/ui";

const RequirementDocumentCorporateForm = () => {
  const {handleSubmit} = useForm();

  const onSubmit = (data: object) => {
    return data;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Text>Kartu Identitas Direksi (e-KTP)</Text>
        <FormItem>
          <Upload />
        </FormItem>
      </div>
    </form>
  );
};

export default RequirementDocumentCorporateForm;
