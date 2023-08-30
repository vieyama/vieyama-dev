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

const educationList = [
  "TIDAK / BELUM SEKOLAH",
  "SD / SEDERAJAT",
  "SMP / SEDERAJAT",
  "SMA / SEDERAJAT",
  "DIPLOMA I/II",
  "DIPLOMA III",
  "DIPLOMA IV / STRATA I",
  "STRATA II",
  "STRATA III",
];

const maritalStatusList = ["Kawin", "Belum Kawin", "Cerai Hidup", "Cerai Mati"];

const businessFieldList = [
  "Penyedia Sarana Produksi Perikanan",
  "Pengusaha Makanan & Minuman Siap Saji",
  "Penjual Eceran (Ikan Beku)",
  "Penyedia Transportasi berpendingin",
  "Penyewaan Cold Storage (per satuan berat)",
  "Penyewaan Cold Storage (per ruang / gedung)",
  "Perdagangan / Trading Grosir",
  "Pemrosesan Ikan",
  "Pengusaha Budidaya",
  "Penangkapan (Nelayan)",
  "Exporter",
  "Importer",
  "Lainnya",
];

const loadPurposeList = [
  "Perdagangan",
  "Peningkatan Modal Kerja",
  "Ekspor/Impor",
  "Rawat Inap/Medis",
  "Pendidikan",
  "Perjalanan",
  "Konsumsi Pribadi",
  "Lainnya",
];

const storageList = ["Fishlog Cold Storage", "Mitra Cold Storage"];

export {
  preparedDocs,
  needToKnow,
  educationList,
  maritalStatusList,
  businessFieldList,
  loadPurposeList,
  storageList,
};
