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

export {preparedDocs, needToKnow};
