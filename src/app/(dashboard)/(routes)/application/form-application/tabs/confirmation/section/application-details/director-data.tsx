import {Disclosure} from "@headlessui/react";
import dayjs from "dayjs";
import toNumber from "lodash/toNumber";

import {Icon, Text} from "~/components/ui";

import InputDisplay from "../../component/input-display";
import AddressData from "../global/address-data";

import type {Director} from "~/interfaces/services/finance";
import "dayjs/locale/id";

dayjs.locale("id");
const DirectorData = ({
  index,
  director,
}: {
  director: Director;
  index: number;
}) => {
  return (
    <Disclosure defaultOpen>
      {({open}) => (
        <div className="w-ful mt-4">
          <Disclosure.Button className="flex w-full items-center justify-between">
            <Text weight="semi-bold" className="text-blue-600">
              Data Pemegang Saham / Direksi #{index + 1}
            </Text>
            <Icon name={open ? "up-solid" : "down-solid"} size="13px" />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-5 flex flex-col gap-5">
            <InputDisplay label="Nama lengkap" value={director?.name ?? ""} />
            <InputDisplay label="No. KTP" value={director?.no_hp ?? ""} />
            <InputDisplay label="Tempat Lahir" value={director?.pob ?? ""} />
            <InputDisplay
              label="Tanggal Lahir"
              value={
                dayjs(toNumber(director?.dob)).format("DD / MMMM / YYYY") ?? ""
              }
            />{" "}
            <InputDisplay label="Jabatan" value={director?.position ?? ""} />
            <InputDisplay label="No. Handphone" value={director?.no_hp ?? ""} />
            <InputDisplay label="Email" value={director?.email ?? ""} />
            <InputDisplay
              label="Kepemilikan Saham"
              value={director?.share_ownership ?? ""}
            />
            <AddressData
              addressData={{
                address: director?.address,
                province: director?.province?.name,
                city: director?.city?.name,
                district: director?.district?.name,
                postal_code: director?.postal_code?.toString(),
              }}
              title="Alamat Perusahaan"
            />
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default DirectorData;
