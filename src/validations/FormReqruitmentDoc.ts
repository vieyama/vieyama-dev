import * as Yup from "yup";

import type {ReqruitmentDocCorporateType} from "~/interfaces/form/reqruitmentDoc";

const requiredMessage = "This field is required.";

const FormReqruitmentDocCorporateSchema =
  Yup.object<ReqruitmentDocCorporateType>({
    directors_ktp_photo: Yup.array().of(Yup.string()).required(requiredMessage),
    comisarist_ktp_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    shareholders_ktp_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    directors_npwp_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    comisarist_npwp_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    shareholders_npwp_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    company_npwp_photo: Yup.array().of(Yup.string()).required(requiredMessage),
    deed_of_incoraption_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    amendment_deed_photo: Yup.array().of(Yup.string()),
    sk_kemenkumham_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    sk_kemenkumham_changes_photo: Yup.array().of(Yup.string()),
    licensing_documents_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    financial_statement_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    bank_statement_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    invoices_others_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    office_photo: Yup.array().of(Yup.string()).required(requiredMessage),
    selfie_pic_photo: Yup.array().of(Yup.string()).required(requiredMessage),
    selfie_comisarist_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
  });

const FormReqruitmentDocIndividualSchema =
  Yup.object<ReqruitmentDocCorporateType>({
    directors_ktp_photo: Yup.array().of(Yup.string()).required(requiredMessage),
    spouse_ktp_photo: Yup.array().of(Yup.string()).required(requiredMessage),
    applicant_npwp_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    family_document_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    house_ownership_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    bin_or_bussines_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    bank_statement_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    invoices_others_photo: Yup.array()
      .of(Yup.string())
      .required(requiredMessage),
    house_photo: Yup.array().of(Yup.string()).required(requiredMessage),
    selfie_pic_photo: Yup.array().of(Yup.string()).required(requiredMessage),
  });

export {FormReqruitmentDocCorporateSchema, FormReqruitmentDocIndividualSchema};
