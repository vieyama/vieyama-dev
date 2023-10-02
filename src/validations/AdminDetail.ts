import * as Yup from "yup";

import type {
  EvaluationFormType,
  QCAssignType,
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

export {AdminDetailSchema, EvaluationSchema};
