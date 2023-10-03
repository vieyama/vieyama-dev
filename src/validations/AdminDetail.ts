import * as Yup from "yup";

import type {
  EvaluationFormType,
  QCAssignType,
  QCValuationType,
} from "~/interfaces/form/adminDetail";

const requiredMessage = "This field is required.";

const AdminDetailSchema = Yup.object<QCAssignType>({
  province_id: Yup.number().required(requiredMessage),
  province_name: Yup.string().required(requiredMessage),
  city_id: Yup.number().required(requiredMessage),
  city_name: Yup.string().required(requiredMessage),
  pic: Yup.number().required(requiredMessage),
  assignment_letter: Yup.array().of(Yup.string()).required(requiredMessage),
});

const EvaluationSchema = Yup.object<EvaluationFormType>({
  notes: Yup.string().required(requiredMessage),
  reason: Yup.string().required(requiredMessage),
});

const QCValuationSchema = Yup.object<QCValuationType>({
  appraisalItems: Yup.array().of(
    Yup.object().shape({
      qc_quantity: Yup.number().when("is_draft", ([maritalStatus], schema) =>
        maritalStatus === true
          ? schema.notRequired()
          : schema.required(requiredMessage),
      ),
      qc_hpp: Yup.number()
        .min(1, requiredMessage)
        .when("is_draft", ([maritalStatus], schema) =>
          maritalStatus === true
            ? schema.notRequired()
            : schema.required(requiredMessage),
        ),
    }),
  ),
  notes: Yup.string().when("is_draft", ([maritalStatus], schema) =>
    maritalStatus === true
      ? schema.notRequired()
      : schema.required(requiredMessage),
  ),
  approved: Yup.boolean(),
  is_draft: Yup.boolean(),
});

export {AdminDetailSchema, EvaluationSchema, QCValuationSchema};
