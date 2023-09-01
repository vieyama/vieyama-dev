import * as Yup from "yup";

import type {DetailItemType} from "~/interfaces/form/detailItem";

const requiredMessage = "This field is required.";

const DetailItemSchema = Yup.object<DetailItemType>({
  warehouse_id62: Yup.string().required(requiredMessage),
  warehouse_address: Yup.string().required(requiredMessage),
  items: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string().required(requiredMessage),
        photos: Yup.array().required(requiredMessage),
        product_id62: Yup.string().required(requiredMessage),
        sku_id62: Yup.string().required(requiredMessage),
        qty: Yup.number().required(requiredMessage),
      }),
    )
    .required(requiredMessage),
});

export {DetailItemSchema};
