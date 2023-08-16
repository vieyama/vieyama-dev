import React from "react";

import {Button, Checkbox, Text} from "~/components/ui";

const Application = () => {
  const preparedDocs = [
    {
      docs: "Data Pemohon (Nama, KTP, NPWP, No. Telp)",
    },
    {
      docs: "Data Barang (Nama produk SKU, Ukuran, Kuantitas)",
    },
    {
      docs: "Dokumen Persyaratan:",
      sub: [
        {
          docs: "Untuk Individual",
          sub: [
            {docs: "Kartu Keluarga / Buku Nikah (jika Menikah)"},
            {
              docs: "Bukti Kepemilikan Rumah (Sertifikat/Akta Jual Beli/PBB/Rekening Listrik)",
            },
            {docs: "Nomor Induk Berusaha (NIB) atau Foto Usaha"},
            {docs: "Rekening Koran / Buku Tabungan 6 bulan terakhir"},
          ],
        },
        {
          docs: "Untuk Perusahaan",
          sub: [
            {docs: "KTP Director, Komisaris, dan Pemegang Saham"},
            {docs: "NPWP Director, Komisaris, dan Pemegang Saham"},
            {docs: "NPWP Perusahaan"},
            {docs: "Akta Pendirian / Akta Perubahan"},
            {docs: "SK Kemenkumham"},
            {docs: "SIUP, TDP atau NIB"},
            {
              docs: "Laporan Keuangan 2 Tahun Terakhir (diutamakan yang telah diaudit) / InHouse yang sudah ditandatangani",
            },
            {docs: "Rekening koran 6 bulan terakhir"},
          ],
        },
      ],
    },
  ];

  const needToKnow = [
    "Harap dicatat bahwa Pemohon harus setuju untuk mentransfer komoditi ke FQC kami (Jika tidak, maka Pemohon harus menjadi mitra FQC terlebih dahulu)",
    "Pemohon dapat menyimpan aplikasi dan melanjutkannya kemudian",
    "Pemohon harus menyetujui pernyataan berikut sebelum melanjutkan pengajuan aplikasi pembiayaan",
  ];
  return (
    <div className="mt-6 flex flex-col gap-y-4">
      <div className="flex-start flex flex-col gap-y-3.5 bg-white p-7.5">
        <Text variant="sub-header-2" weight="semi-bold">
          Formulir Aplikasi Pembiayaan
        </Text>
        <Text>Anda akan mengajukan Aplikasi Pembiayaan dengan FishLog</Text>
        <Text>
          Formulir Aplikasi Ini Membutuhkan Waktu Sekitar 10 Menit untuk
          Diselesaikan
        </Text>
      </div>

      <div className="flex-start flex flex-col gap-y-3.5 bg-white p-7.5">
        <Text variant="sub-header-2" weight="semi-bold">
          Anda perlu mempersiapkan
        </Text>
        <ol className="list-inside list-decimal">
          {preparedDocs.map((item, key) => (
            <li key={key} className="p-1">
              <Text className="pl-3 text-justify">{item.docs}</Text>
              {item.sub ? (
                <ol className="list-inside list-lower-latin pl-5">
                  {item.sub.map((sub, keySub) => (
                    <li key={keySub} className="p-1">
                      <Text className="pl-2 text-justify">{sub.docs}</Text>
                      {sub.sub ? (
                        <ol className="list-inside list-none pl-5">
                          {sub.sub.map((child, keyChild) => (
                            <li key={keyChild} className="p-1">
                              <Text className="pl-1 text-justify">
                                <span className="pr-3">-</span> {child.docs}
                              </Text>
                            </li>
                          ))}
                        </ol>
                      ) : null}
                    </li>
                  ))}
                </ol>
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <div className="flex-start flex flex-col gap-y-3.5 bg-white p-7.5">
        <Text variant="sub-header-2" weight="semi-bold">
          Anda perlu tahu
        </Text>
        <ol className="list-inside list-disc">
          {needToKnow.map((item, key) => (
            <li key={key}>
              <Text className="text-justify">{item}</Text>
            </li>
          ))}
        </ol>

        <div>
          <Checkbox>
            <Text className="text-justify">
              Saya Telah Membaca
              <Button
                variant="link"
                className="p-0 pl-1 text-black underline hover:text-blue-600">
                Catatan Penjelasan
              </Button>
            </Text>
          </Checkbox>
          <Checkbox>
            Saya Setuju dengan
            <Button
              variant="link"
              className="p-0 px-1 text-black underline hover:text-blue-600">
              Ketentuan Layanan
            </Button>
            dan
            <Button
              variant="link"
              className="p-0 px-1 text-black underline hover:text-blue-600">
              Kebijakan Privasi
            </Button>
            FishLog
          </Checkbox>
        </div>
      </div>

      <div className="flex-start flex flex-col gap-y-3.5 bg-white p-7.5">
        <Text variant="sub-header-2" weight="semi-bold">
          Mulai Dengan :
        </Text>
        <div className="flex w-full flex-col justify-between gap-5 sm:flex-row">
          <Button variant="tertiary" className="w-full">
            Pengajuan Individual
          </Button>
          <Button className="w-full">Pengajuan Perusahaan</Button>
        </div>
      </div>
    </div>
  );
};

export default Application;
