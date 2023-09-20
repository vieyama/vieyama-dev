import isEmpty from "lodash/isEmpty";

import FormItem from "~/components/form";
import ControllerWrapper from "~/components/form/Controller";
import {Upload} from "~/components/ui";

import type {Control, FieldError, FieldValues} from "react-hook-form";
import type {FilesType} from "~/components/ui/Upload";

const UploadComponent = ({
  control,
  errorMessage,
  label,
  fieldName,
  optional,
  type = "button",
}: {
  control: Control<FieldValues>;
  errorMessage: FieldError;
  label: string;
  fieldName: string;
  optional?: boolean;
  type?: "button" | "input";
}) => {
  const onChangeUpload = (
    onChange: (value: string[]) => void,
    values: string[],
    currentValue: string[],
  ) => {
    const images = values;
    const setImage = currentValue ? [...currentValue, ...images] : images;
    onChange(type === "button" ? setImage : images);
  };

  const onDeleteFile = (
    onChange: (value: string[]) => void,
    files: string[],
  ) => {
    onChange(isEmpty(files) ? [] : files);
  };

  return (
    <FormItem
      label={label}
      error={errorMessage}
      optional={optional}
      labelClassName={
        type === "input" ? "md:min-w-[250px] lg:min-w-[250px]" : "mb-3.5"
      }
      childClassName="w-full"
      className={`mt-3.5 flex ${
        type === "input" ? "flex-row items-center gap-4" : "flex-col"
      }`}>
      <ControllerWrapper fieldName={fieldName} control={control}>
        {({onChange, value}) => (
          <Upload
            id={fieldName}
            type={type}
            fileList={value as FilesType}
            onChange={(image) => onChangeUpload(onChange, image, value)}
            onDelete={(value) => onDeleteFile(onChange, value)}
            maxFile={5}
          />
        )}
      </ControllerWrapper>
    </FormItem>
  );
};

export default UploadComponent;
