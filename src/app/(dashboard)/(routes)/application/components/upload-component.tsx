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
}: {
  control: Control<FieldValues>;
  errorMessage: FieldError;
  label: string;
  fieldName: string;
  optional?: boolean;
}) => {
  const onChangeUpload = (
    onChange: (value: string[]) => void,
    values: string[],
    currentValue: string[],
  ) => {
    const images = values;
    const setImage = currentValue ? [...currentValue, ...images] : images;
    onChange(setImage);
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
      labelClassName="mb-3.5"
      error={errorMessage}
      optional={optional}
      className="mt-3.5">
      <ControllerWrapper fieldName={fieldName} control={control}>
        {({onChange, value}) => (
          <Upload
            id={fieldName}
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
