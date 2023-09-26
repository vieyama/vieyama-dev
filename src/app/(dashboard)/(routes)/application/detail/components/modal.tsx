import {Button, InputTextArea, Modal, Text} from "~/components/ui";

const ModalComponent: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  modalType: string;
}> = ({isOpen, onClose, modalType}) => {
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
      <div className="flex flex-col items-center gap-3 p-5">
        <Text variant="sub-header-2" weight="medium" className="text-blue-600">
          {modalTitle}
        </Text>
        <Text className="text-center leading-8">{modalDescription}</Text>
        {withOptions ? (
          <select className="h-[55px] w-full rounded-md border-stroke">
            <option value="Permintaan Dokumen">Permintaan Dokumen</option>
          </select>
        ) : null}
        {withNotes ? (
          <InputTextArea placeholder="Catatan" inputWrapperClassName="w-full" />
        ) : null}
        {modalType === "approve" ? (
          <div className="flex gap-3">
            <Button variant="tertiary" onClick={onClose}>
              Lanjutkan dengan on balance
            </Button>
            <Button>Lanjutkan dengan off balance</Button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Button variant="tertiary" className="w-[100px]" onClick={onClose}>
              Tidak
            </Button>
            <Button className="w-[100px]">Ya</Button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalComponent;
