"use client";
import React from "react";

import {Button, Modal, Text} from "~/components/ui";

interface ExplanationNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  explanationHandler: () => void;
}
const ExplanationNoteModal: React.FC<ExplanationNoteModalProps> = ({
  isOpen,
  onClose,
  explanationHandler,
}) => {
  const handleApprove = () => {
    explanationHandler();
    onClose();
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Catatan Penjelasan"
        closable={false}
        className="m-5 max-h-[600px] w-[900px] overflow-y-auto md:max-h-max"
        footer={
          <>
            <Button
              size="sm"
              className="mb-2 mt-5 w-full"
              onClick={handleApprove}>
              Setuju
            </Button>
          </>
        }>
        <Text align="text-justify">
          Dengan ini saya menyatakan benar bahwa saya mengajukan pembiayaan di
          PT Rantai Pasok Teknologi dan semua data dan informasi yang saya
          berikan dalam Formulir Permohonan Pembiayaan ini dan melalui karyawan
          PT Rantai Pasok Teknologi adalah benar. Oleh karena itu, dengan ini
          saya memberikan persetujuan kepada PT Rantai Pasok Teknologi, untuk
          memeriksa kebenaran data dan mencari informasi informasi lebih lanjut
          untuk analisa kelayakan dan kebenaran data pribadi saya melalui sistem
          informasi konsumen yang diizinkan oleh undang-undang atau dengan cara
          lain yang diizinkan oleh ketentuan hukum yang berlaku, termasuk
          melalui pihak ketiga yang bekerja sama dengan PT Rantai Pasok
          Teknologi. Jika permohonan pembiayaan ini disetujui, saya memberikan
          persetujuan kepada PT Rantai Pasok Teknologi untuk menggunakan,
          memanfaatkan, dan/atau menginformasikan data pribadi saya termasuk
          namun tidak terbatas pada nomor telepon/ponsel/email untuk kegiatan
          penagihan/pembayaran serta untuk pemasaran /kegiatan promosi, termasuk
          jika PT Rantai Pasok Teknologi menggunakan pihak ketiga yang bekerja
          sama dengan PT Rantai Pasok Teknologi. Apabila permohonan pembiayaan
          ini disetujui, untuk keperluan korespondensi, saya bersedia dihubungi
          melalui media teknologi dengan menggunakan nomor handphone atau email
          termasuk namun tidak terbatas pada aplikasi WhatsApp. Dengan
          menandatangani Formulir Permohonan Pembiayaan ini, saya telah
          menyetujui ketentuan di atas.
        </Text>
      </Modal>
    </div>
  );
};

export default ExplanationNoteModal;
