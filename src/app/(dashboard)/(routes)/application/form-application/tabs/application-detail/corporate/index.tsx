import {yupResolver} from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import {useAtom} from "jotai";
import isNumber from "lodash/isNumber";
import omit from "lodash/omit";
import toNumber from "lodash/toNumber";
import {useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";

import useToast from "~/hooks/useToast";
import {useInsertApplicationFinance} from "~/services/finance";
import {useGetPartnerDetail, useGetPartnerList} from "~/services/partner/list";
import {
  mitraListSearchAtom,
  selectedMitraIdAtom,
} from "~/state/formApplication";
import {DetailApplicationCorporateSchema} from "~/validations/FormApplication";

import {
  ApplicantDataSection,
  CompanyAddressDataSection,
  CompanyDirectionDataSection,
} from "./section";
import FooterButton from "../../../components/footer-button";
import {EmergencyContactSection, FinancingDataSection} from "../global";

import type {Control, UseFormRegister, UseFormSetValue} from "react-hook-form";
import type {DetailApplicationCorporateType} from "~/interfaces/form/detailApplication";
import type {Partner} from "~/interfaces/services/finance";
import type {PartnerDetailData} from "~/interfaces/services/partner/detail";

type FormValueType = DetailApplicationCorporateType;

const ApplicationDetailCorporateForm: React.FC<{
  defaultValueForm?: DetailApplicationCorporateType;
  dataPartner?: Partner;
}> = ({defaultValueForm, dataPartner}) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm<FormValueType>({
    resolver: yupResolver(DetailApplicationCorporateSchema),
    defaultValues: defaultValueForm,
  });

  const searchParams = useSearchParams();
  const dataId = searchParams.get("uuid");
  const applicationType = searchParams.get("payment");
  const {toast} = useToast();

  const [mitraListSearch] = useAtom(mitraListSearchAtom);
  const [selectedMitraId] = useAtom(selectedMitraIdAtom);

  const {data, isLoading} = useGetPartnerList({
    page: 1,
    per_page: 25,
    search: mitraListSearch,
    assign_to_me: 1,
    partner_type: "corporate",
  });

  useGetPartnerDetail(selectedMitraId as string, {
    enabled: !!selectedMitraId,
    onSuccess: (result: PartnerDetailData) => {
      setValue("applicant_name", result.applicant_name);
      setValue("company_name", result.company_name);
      setValue("company_npwp", result.company_npwp);
      setValue("business_fields", result.business_fields[0]);
      setValue("no_telp", result.no_telp);
      setValue("email", result.email);
      setValue("address", result.address);
    },
  });

  const insertApplicationDetail = useInsertApplicationFinance();

  const onSubmit = (data: DetailApplicationCorporateType) => {
    const province = {
      id: data.province_id,
      name: data.province_name,
    };
    const city = {
      id: data.city_id,
      name: data.city_name,
    };
    const district = {
      id: data.district_id,
      name: data.district_name,
    };

    const directors = data.directors?.map((item) => ({
      id: item.id ?? null,
      name: item?.name,
      ktp: item?.no_ktp,
      pob: item?.pob,
      dob: dayjs(item?.dob).unix(),
      position: item?.position,
      no_hp: item?.no_hp,
      email: item?.email,
      share_ownership: isNumber(item?.share_ownership)
        ? `${item?.share_ownership}%`
        : item?.share_ownership,
      address: item?.address,
      province: {
        id: item?.province_id,
        name: item?.province_name,
      },
      city: {
        id: item?.city_id,
        name: item?.city_name,
      },
      district: {
        id: item?.district_id,
        name: item?.district_name,
      },
      postal_code: item?.postal_code,
    }));

    const removedData = omit(
      data,
      "province_id",
      "province_name",
      "city_id",
      "city_name",
      "district_id",
      "district_name",
    );

    const dataSave = {
      ...removedData,
      step: "application_details",
      partner_type: "corporate",
      uuid: dataId,
      directors,
      tenor: toNumber(data.tenor),
      province,
      city,
      district,
      financing_type: applicationType,
    };

    insertApplicationDetail
      .mutateAsync(dataSave)
      .then(() => {
        return toast({
          message: `Berhasil menyimpan data`,
          type: "success",
        });
      })
      .catch(() => {
        return toast({
          message: "Terjadi kesalahan, silahkan coba kembali!",
          type: "error",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white p-6">
        <FinancingDataSection
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
        />
        <ApplicantDataSection
          mitraData={data?.results}
          dataPartner={dataPartner}
          isLoadingMitra={isLoading}
          register={register as UseFormRegister<DetailApplicationCorporateType>}
          errors={errors}
          setValue={setValue as UseFormSetValue<DetailApplicationCorporateType>}
        />
        <CompanyAddressDataSection
          register={register as UseFormRegister<DetailApplicationCorporateType>}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
        />
        <CompanyDirectionDataSection
          register={register as UseFormRegister<DetailApplicationCorporateType>}
          errors={errors}
          control={control as Control<DetailApplicationCorporateType>}
          setValue={setValue}
          getValues={getValues}
        />
      </div>
      <div className="mt-4 bg-white p-6">
        <EmergencyContactSection register={register} errors={errors} />
        <FooterButton />
      </div>
    </form>
  );
};

export default ApplicationDetailCorporateForm;
