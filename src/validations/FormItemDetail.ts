import * as Yup from "yup";

import type {DetailItemType} from "~/interfaces/form/detailItem";

const requiredMessage = "This field is required.";

const DetailItemSchema = Yup.object<DetailItemType>({
  warehouse_id62: Yup.string().required(requiredMessage),
  warehouse_address: Yup.string().required(requiredMessage),
  items: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string().nullable(),
        photos: Yup.array().nonNullable().required(requiredMessage),
        product_id62: Yup.string().required(requiredMessage),
        stock_id62: Yup.string().required(requiredMessage),
        batch_number: Yup.string().required(requiredMessage),
        selected_stock: Yup.string().required(requiredMessage),
        quantity: Yup.number()
          .min(1, requiredMessage)
          .required(requiredMessage),
      }),
    )
    .required(requiredMessage),
});

export {DetailItemSchema};
