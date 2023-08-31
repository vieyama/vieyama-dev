import React from "react";

import FormItem from "~/components/form";
import {Upload} from "~/components/ui";

const LegalDocs = () => {
  return (
    <>
      <FormItem
        label="Kartu Identitas Direksi (e-KTP)"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem
        label="Kartu Identitas Komisaris (e-KTP)"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem
        label="Kartu Identitas Pemegang Saham (e-KTP)"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem label="NPWP Direksi" labelClassName="mb-3.5" className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem
        label="NPWP Komisaris"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem
        label="NPWP Pemegang Saham"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem
        label="NPWP Perusahaan"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem
        label="Akta Pendirian"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem
        optional
        label="Akta Perubahan"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem
        label="SK Kemenkumham"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem
        optional
        label="SK Kemenkumham Perubahan"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
      <FormItem
        label="SIUP, TDP atau NIB"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload />
      </FormItem>
    </>
  );
};

export default LegalDocs;
