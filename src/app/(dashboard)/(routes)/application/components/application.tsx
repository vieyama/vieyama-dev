"use client";
import React, {useState} from "react";

import {Disclosure} from "@headlessui/react";
import {useDisclosure} from "@mantine/hooks";
import {useAtom} from "jotai";
import {useRouter} from "next/navigation";

import {Button, Checkbox, Icon, RadioGroup, Text} from "~/components/ui";
import {applicationTabsAtom} from "~/state/formApplication";

import ExplanationNoteModal from "./explanation-note-modal";

const Application = () => {
  const router = useRouter();
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

  const [applicationTabs, setApplicationTabs] = useAtom(applicationTabsAtom);

  const [explanationModal, explanationModalHandler] = useDisclosure(false);

  const [selectedMitra, setSelectedMitra] = useState("corporate");
  const [selectedPayment, setSelectedPayment] = useState("po-finacing");

  const [explanationReaded, explanationHandler] = useDisclosure(false);
  const [policyReaded, policyHandler] = useDisclosure(false);

  const handleCreateApplication = () => {
    setApplicationTabs([
      ...applicationTabs,
      {name: "application-details", isDone: false},
    ]);
    router.push(
      `/application/form-application?process=application-details&type=${selectedMitra}&payment=${selectedPayment}`,
    );
  };

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
        <Disclosure>
          {({open}) => (
            <>
              <Disclosure.Button className="focus-visible:ringfocus-visible:ring-opacity-75 flex w-full justify-between text-left text-sm font-medium focus:outline-none">
                <Text variant="sub-header-2" weight="semi-bold">
                  Anda perlu mempersiapkan
                </Text>
                <Icon
                  name="down-solid"
                  className={`${open ? "rotate-180 transform" : ""}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4">
                <ol className="list-decimal">
                  {preparedDocs.map((item) => (
                    <li key={item.docs} className="p-1">
                      <Text className="pl-3 text-justify">{item.docs}</Text>
                      {item.sub ? (
                        <ol className="list-lower-latin pl-5">
                          {item.sub.map((sub) => (
                            <li key={sub.docs} className="p-1">
                              <Text className="pl-2 text-justify">
                                {sub.docs}
                              </Text>
                              {sub.sub ? (
                                <ol className="list-none pl-5">
                                  {sub.sub.map((child) => (
                                    <li key={child.docs} className="p-1">
                                      <Text className="pl-1 text-justify">
                                        <span className="pr-3">-</span>{" "}
                                        {child.docs}
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
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className="flex-start flex flex-col gap-y-3.5 bg-white p-7.5">
        <Disclosure>
          {({open}) => (
            <>
              <Disclosure.Button className="focus-visible:ringfocus-visible:ring-opacity-75 flex w-full justify-between text-left text-sm font-medium focus:outline-none">
                <Text variant="sub-header-2" weight="semi-bold">
                  Informasi Tambahan
                </Text>
                <Icon
                  name="down-solid"
                  className={`${open ? "rotate-180 transform" : ""}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4">
                <ol className="list-disc">
                  {needToKnow.map((item) => (
                    <li key={item}>
                      <Text className="text-justify">{item}</Text>
                    </li>
                  ))}
                </ol>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      <div className="flex-start flex flex-col gap-y-3.5 bg-white p-7.5">
        <Text variant="sub-header-2" weight="semi-bold">
          Jenis Pengajuan
        </Text>

        <div className="flex flex-col gap-3 md:flex-row">
          <Text className="w-40">Tipe Mitra</Text>
          <RadioGroup
            name="mitra"
            onChange={(e: string) => setSelectedMitra(e)}
            defaultValue={selectedMitra}
            className="flex flex-col gap-2 screen-870:flex-row"
            options={[
              {
                value: "corporate",
                label: "Corporate",
                className: "flex gap-x-3 items-center w-[150px]",
              },
              {
                value: "individual",
                label: "Individual",
                className: "flex gap-x-3 items-center w-[150px]",
              },
            ]}
          />
        </div>

        <div className="mt-3 flex flex-col gap-3 md:mb-0 md:flex-row">
          <Text className="w-40">Tipe Pembiayaan</Text>
          <RadioGroup
            onChange={(e: string) => setSelectedPayment(e)}
            name="payment"
            defaultValue={selectedPayment}
            className="flex flex-col gap-2 min-[1000px]:flex-row"
            options={[
              {
                value: "po-finacing",
                label: "PO Financing",
                className: "flex gap-x-3 items-center w-[150px]",
              },
              {
                value: "invoice",
                label: "Invoice Financing",
                className: "flex gap-x-3 items-center w-[180px]",
              },
              {
                value: "inventory",
                label: "Inventory Financing",
                className: "flex gap-x-3 items-center w-[190px]",
              },
            ]}
          />
        </div>
      </div>

      <div className="flex-start flex flex-col gap-y-3.5 bg-white p-7.5">
        <Checkbox
          checked={explanationReaded}
          onChange={() =>
            explanationReaded
              ? explanationHandler.close()
              : explanationHandler.open()
          }>
          <Text>
            Saya Telah Membaca
            <Button
              variant="link"
              onClick={explanationModalHandler.open}
              className="p-0 pl-1 text-black underline hover:text-blue-600">
              Catatan Penjelasan
            </Button>
          </Text>
        </Checkbox>
        <Checkbox
          checked={policyReaded}
          onChange={() =>
            policyReaded ? policyHandler.close() : policyHandler.open()
          }>
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

      <div className="flex-start flex flex-col gap-y-3.5 bg-white p-7.5">
        <Text variant="sub-header-2" weight="semi-bold">
          Mulai Dengan :
        </Text>
        <div className="flex w-full flex-col justify-between gap-5 sm:flex-row">
          <Button
            className="w-full"
            onClick={handleCreateApplication}
            disabled={!explanationReaded || !policyReaded}>
            Kirim
          </Button>
        </div>
      </div>

      <ExplanationNoteModal
        isOpen={explanationModal}
        onClose={explanationModalHandler.close}
        explanationHandler={explanationHandler.open}
      />
    </div>
  );
};

export default Application;
