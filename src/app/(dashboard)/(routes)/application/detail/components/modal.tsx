import {yupResolver} from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import {useRouter, useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";

import FormItem from "~/components/form";
import {Button, InputTextArea, Modal, Text} from "~/components/ui";
import useToast from "~/hooks/useToast";
import {useInsertFinancingLoan} from "~/services/loan";
import {EvaluationSchema} from "~/validations/AdminDetail";

import type {EvaluationFormType} from "~/interfaces/form/adminDetail";

const ModalComponent: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  modalType: string;
  status: number;
}> = ({isOpen, onClose, modalType, status}) => {
  let modalTitle,
    modalDescription = "";
  let withNotes,
    withOptions = false;
  switch (modalType) {
    case "return":
      modalTitle = "Konfirmasi Pengembalian";
      modalDescription =
        "Apakah Anda yakin ingin mengembalikan aplikasi ini? Beri tahu kami alasan pengembalian";
      withNotes = true;
      withOptions = true;
      break;
    case "reject":
      modalTitle = "Konfirmasi Penolakan";
      modalDescription =
        "Anda yakin ingin menolak aplikasi ini? Beri tahu kami alasan penolakan";
      withNotes = false;
      withOptions = true;
      break;
    case "approve":
      modalTitle = "Konfirmasi";
      modalDescription =
        "Anda akan menyutujui aplikasi. Bagaimana anda ingin melanjutkan aplikasi?";
      break;
    default:
      break;
  }

  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm<EvaluationFormType>({
    resolver: yupResolver(EvaluationSchema),
  });
  const router = useRouter();
  const {toast} = useToast();
  const searchParams = useSearchParams();
  const financeId = searchParams.get("uuid");

  const insertFinancingLoan = useInsertFinancingLoan();

  const handleSubmitForm = (values: EvaluationFormType) => {
    const dataSave = {
      uuid: financeId as string,
      date_timestamps: dayjs().toISOString(),
      status: status,
      is_rejected: true,
      rejection_reason: values?.reason,
      rejection_notes: values.notes,
    };
    insertFinancingLoan
      .mutateAsync(dataSave)
      .catch(() =>
        toast({
          message: "Terjadi kesalahan, silahkan coba kembali!",
          type: "error",
        }),
      )
      .then(() => {
        toast({
          message: "Berhasil menyimpan data!",
          type: "success",
        });
        router.replace("/workspace");
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closable={false}
      withTitle={false}
      className={`m-5 max-h-[600px] w-[${
        modalType === "approve" ? "650px" : "500px"
      }] overflow-y-auto md:max-h-max`}
      footer={null}>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex flex-col items-center gap-3 p-5">
          <Text
            variant="sub-header-2"
            weight="medium"
            className="text-blue-600">
            {modalTitle}
          </Text>
          <Text className="text-center leading-8">{modalDescription}</Text>
          {withOptions ? (
            <FormItem
              optional={true}
              error={errors.reason}
              className="w-full"
              childClassName="w-full"
              labelClassName="md:min-w-[250px] lg:min-w-[250px]">
              <select
                {...register("reason")}
                className="h-[55px] w-full rounded-md border-stroke">
                <option value="">Pilih alasan</option>
                <option value="Permintaan Dokumen">Permintaan Dokumen</option>
                <option value="Data Pengajuan Tidak Lengkap">
                  Data Pengajuan Tidak Lengkap
                </option>
                <option value="Data Mitra Tidak Sesuai">
                  Data Mitra Tidak Sesuai
                </option>
              </select>
            </FormItem>
          ) : null}
          {withNotes ? (
            <FormItem
              optional={true}
              error={errors.notes}
              className="w-full"
              childClassName="w-full"
              labelClassName="md:min-w-[250px] lg:min-w-[250px]">
              <InputTextArea
                placeholder="Catatan"
                inputWrapperClassName="w-full"
                {...register("notes")}
              />
            </FormItem>
          ) : null}
          {modalType === "approve" ? (
            <div className="flex gap-3">
              <Button variant="tertiary" type="button" onClick={onClose}>
                Lanjutkan dengan on balance
              </Button>
              <Button type="button">Lanjutkan dengan off balance</Button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Button
                variant="tertiary"
                className="w-[100px]"
                type="button"
                onClick={onClose}>
                Tidak
              </Button>
              <Button className="w-[100px]" type="submit">
                Ya
              </Button>
            </div>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default ModalComponent;
