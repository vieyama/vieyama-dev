import {useForm} from "react-hook-form";

import FormItem from "~/components/form";
import ControllerWrapper from "~/components/form/Controller";
import {Checkbox} from "~/components/ui";

import FooterButton from "../../components/footer-button";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const FQCApproval = ({}: {financeData?: FinanceResponseData}) => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<{notes?: string; pic?: string; approved?: boolean}>({});
  const handleSave = () => {};

  return (
    <div className="mt-5 bg-white p-6">
      <form
        className="flex flex-col gap-3.5"
        onSubmit={handleSubmit(handleSave)}>
        <FormItem error={errors.approved}>
          <ControllerWrapper fieldName="approved" control={control}>
            {({onChange, value}) => (
              <Checkbox checked={value} onChange={onChange}>
                Penyimpanan tidak sesuai dengan daftar pada formulir penilaian
              </Checkbox>
            )}
          </ControllerWrapper>
        </FormItem>
        <FormItem error={errors.notes}>
          <ControllerWrapper fieldName="notes" control={control}>
            {({onChange, value}) => (
              <Checkbox checked={value} onChange={onChange}>
                Dengan Meneliti dokumen ini, saya yang melakukan penyimpanan dan
                segel, menyatakan bahwa semua informasi yang diberikan adalah
                lengkap dan benar.
              </Checkbox>
            )}
          </ControllerWrapper>
        </FormItem>
        <FooterButton />
      </form>
    </div>
  );
};

export default FQCApproval;
