import isEmpty from "lodash/isEmpty";

import FormItem from "~/components/form";
import {Text, Upload} from "~/components/ui";

import type {
  FieldError,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import type {FilesType} from "~/components/ui/Upload";
import type {ReqruitmentDocCorporateType} from "~/interfaces/form/reqruitmentDoc";

type ValueFormName = keyof ReqruitmentDocCorporateType;

const FinanceDoc = ({
  errors,
  setValue,
  getValues,
}: {
  errors: FieldErrors<ReqruitmentDocCorporateType>;
  setValue: UseFormSetValue<ReqruitmentDocCorporateType>;
  getValues: UseFormGetValues<ReqruitmentDocCorporateType>;
}) => {
  const onChangeUpload = (values: {id: string}[], formName: ValueFormName) => {
    const images = values.map((item) => item.id);
    const currentImage = getValues(formName);

    const setImage = currentImage ? [...currentImage, ...images] : images;
    setValue(formName, setImage);
  };

  const onDeleteFile = (files: string[], formName: ValueFormName) => {
    setValue(formName, isEmpty(files) ? undefined : files);
  };

  return (
    <div className="mt-6 flex flex-col gap-3.5">
      <Text className="text-blue-600" weight="semi-bold">
        Dokumen Foto
      </Text>

      <FormItem
        error={errors.office_photo as FieldError}
        label="Kantor Beserta Aktifitasnya"
        labelClassName="mb-3.5">
        <Upload
          fileList={getValues("office_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "office_photo")}
          onDelete={(value) => onDeleteFile(value, "office_photo")}
          maxFile={5}
        />
      </FormItem>
      <FormItem
        error={errors.selfie_pic_photo as FieldError}
        label="Foto Selfie Penanggung Jawab"
        labelClassName="mb-3.5">
        <Upload
          fileList={getValues("selfie_pic_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "selfie_pic_photo")}
          onDelete={(value) => onDeleteFile(value, "selfie_pic_photo")}
          maxFile={5}
        />
      </FormItem>
      <FormItem
        error={errors.selfie_comisarist_photo as FieldError}
        label="Foto Selfie Komisaris"
        labelClassName="mb-3.5">
        <Upload
          fileList={getValues("selfie_comisarist_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "selfie_comisarist_photo")}
          onDelete={(value) => onDeleteFile(value, "selfie_comisarist_photo")}
          maxFile={5}
        />
      </FormItem>
    </div>
  );
};

export default FinanceDoc;
