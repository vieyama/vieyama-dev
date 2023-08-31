import React from "react";

import FormItem from "~/components/form";
import {Upload} from "~/components/ui";

const LegalDocs = () => {
  return (
    <>
      <FormItem
        label="Kartu Identitas Pasangan (e-KTP)"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem label="NPWP Pemohon" labelClassName="mb-3.5" className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem
        label="Kartu Keluarga / Buku Nikah (Jika Menikah)"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem
        label="Bukti Kepemilikan Rumah (Sertifikat /  Akta Jual Beli / PBB / Rekening Listrik)"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem
        label="Nomor Induk Berusaha (NIB) atau Foto Usaha"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
    </>
  );
};

export default LegalDocs;
