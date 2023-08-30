import React from "react";

import {useForm} from "react-hook-form";

import FormItem from "~/components/form";

const RequirementDocumentIndividualForm = () => {
  const {handleSubmit} = useForm();

  const onSubmit = (data: object) => {
    return data;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormItem
        label="Nama Gudang"
        error={undefined}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex items-center gap-x-4">
          <select
            className="block w-full rounded-lg border p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Pilih Gudang">
            <option value="021">GudangAda</option>
            <option value={0}>GudangAda</option>
          </select>
        </div>
      </FormItem>
    </form>
  );
};

export default RequirementDocumentIndividualForm;
