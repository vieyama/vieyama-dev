import * as Yup from "yup";

import type {QCAssignType} from "~/interfaces/form/adminDetail";

const requiredMessage = "This field is required.";

const AdminDetailSchema = Yup.object<QCAssignType>({
  province_id: Yup.number().required(requiredMessage),
  province_name: Yup.string().required(requiredMessage),
  city_id: Yup.number().required(requiredMessage),
  city_name: Yup.string().required(requiredMessage),
  qc_name: Yup.string().required(requiredMessage),
  letter_of_assignment: Yup.string().required(requiredMessage),
});

export {AdminDetailSchema};
