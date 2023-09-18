import {useEffect, useState} from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import {useAtom} from "jotai";
import isEmpty from "lodash/isEmpty";
import omit from "lodash/omit";
import toNumber from "lodash/toNumber";
import {useSearchParams} from "next/navigation";
import {useController, useForm} from "react-hook-form";

import {useNext} from "~/hooks/useNext";
import useToast from "~/hooks/useToast";
import {useInsertFinance} from "~/services/finance";
import {useGetPartnerDetail, useGetPartnerList} from "~/services/partner/list";
import {mitraListSearchAtom} from "~/state/formApplication";
import {DetailApplicationIndividualSchema} from "~/validations/FormApplication";

import {
  AddressDataSection,
  ApplicantDataSection,
  DomicileDataSection,
  PersonalWorkplaceDataSection,
  SpouseDataSection,
} from "./section";
import FooterButton from "../../../components/footer-button";
import {EmergencyContactSection, FinancingDataSection} from "../global";

import type {DetailApplicationIndividualType} from "~/interfaces/form/detailApplication";
import type {Partner} from "~/interfaces/services/finance";
import type {PartnerDetailData} from "~/interfaces/services/partner/detail";

const ApplicationDetailIndividualForm: React.FC<{
  defaultValueForm?: DetailApplicationIndividualType;
  dataPartner?: Partner;
}> = ({defaultValueForm, dataPartner}) => {
  const {
    register,
    setValue,
    getValues,
    watch,
    handleSubmit,
    control,
    formState: {errors, dirtyFields},
  } = useForm<DetailApplicationIndividualType>({
    resolver: yupResolver(DetailApplicationIndividualSchema),
    defaultValues: defaultValueForm,
  });
  const isDirty = !isEmpty(dirtyFields);
  const maritalStatus = watch("marital_status");

  const searchParams = useSearchParams();
  const applicationType = searchParams.get("payment");
  const financeId = searchParams.get("uuid");
  const {toast} = useToast();

  const [mitraListSearch] = useAtom(mitraListSearchAtom);
  const selectedMitraId = watch("partner_id");

  const handleBeforeUnload = (e: {
    preventDefault: () => void;
    returnValue: string;
  }) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    if (isDirty) window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      if (isDirty)
        window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  const {data, isLoading} = useGetPartnerList({
    page: 1,
    per_page: 25,
    search: mitraListSearch,
    assign_to_me: 1,
    partner_type: "individual",
  });
  const {field: mitraKtp} = useController({control, name: "no_ktp"});
  const {field: bussinesField} = useController({
    control,
    name: "personal_workplace_business_fields",
  });

  useGetPartnerDetail(selectedMitraId as string, {
    enabled: !!selectedMitraId,
    onSuccess: (result: PartnerDetailData) => {
      setValue("applicant_name", result.applicant_name);
      mitraKtp.onChange(result.no_ktp);
      setValue("pob", result.pob);
      setValue("dob", dayjs(toNumber(result.dob)).format("YYYY-MM-DD"));
      setValue("no_telp", result.no_telp);
      setValue("no_hp", result.no_hp_other);
      setValue("email", result.email);
      setValue("address", result.address);
      setValue("province_id", result.province.id);
      setValue("province_name", result.province.name);
      setValue("city_id", result.city.id);
      setValue("city_name", result.city.name);
      setValue("district_id", result.district.id);
      setValue("district_name", result.district.name);
      bussinesField.onChange(result.personal_workplace_business_fields?.[0]);
      setValue("postal_code", toNumber(result.postal_code));
      setValue("domicile_address", result.domicile_address);
      setValue("domicile_province_id", result.domicile_province?.id);
      setValue("domicile_province_name", result.domicile_province?.name);
      setValue("domicile_city_id", result.domicile_city?.id);
      setValue("domicile_city_name", result.domicile_city?.name);
      setValue("domicile_district_id", result.domicile_district?.id);
      setValue("domicile_district_name", result.domicile_district?.name);
      setValue("domicile_postal_code", result.domicile_postal_code);
    },
  });

  const [saveType, setSaveType] = useState<"save" | "next">("save");
  const insertApplicationDetail = useInsertFinance();
  const {handleNext} = useNext();

  const onSubmit = (data: DetailApplicationIndividualType) => {
    const dob = dayjs(data?.dob).unix();
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
    const length_of_stay =
      toNumber(data.length_of_stay_year) * 12 +
      toNumber(data.length_of_stay_month);

    const personal_workplace_length_of_work =
      toNumber(data.personal_workplace_length_of_work_year) * 12 +
      toNumber(data.personal_workplace_length_of_work_month);

    const no_hp = data.no_hp2;

    const removedData = omit(
      data,
      "dob",
      "province_id",
      "province_name",
      "city_id",
      "city_name",
      "district_id",
      "district_name",
      "length_of_stay_month",
      "length_of_stay_year",
      "no_hp2",
    );

    const dataSave = {
      ...removedData,
      step: "application_details",
      partner_type: "individual",
      uuid: financeId,
      tenor: toNumber(data.tenor),
      personal_workplace_additional_income: toNumber(
        data.personal_workplace_additional_income,
      ),
      financing_type: applicationType,
      dob,
      no_hp,
      province,
      city,
      district,
      length_of_stay,
      personal_workplace_length_of_work,
      emergency_office_no_telp: "",
      emergency_home_number: "",
      directors: [],
    };

    if (!isDirty && saveType === "next") {
      return handleNext();
    }
    if (isDirty) {
      insertApplicationDetail
        .mutateAsync(dataSave)
        .then(() => {
          if (saveType === "next") {
            handleNext();
          }
        })
        .catch((err) => {
          const draftErrorMessage =
            "Unable to update data, data is not in draft status";
          return toast({
            message:
              err.response.data.message !== draftErrorMessage
                ? "Terjadi kesalahan, silahkan coba kembali!"
                : "Hanya data dengan status Draf yang dapat diubah.",
            type: "error",
          });
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white p-6">
        <FinancingDataSection
          register={register}
          errors={errors}
          getValues={getValues}
          control={control}
        />
        <ApplicantDataSection
          mitraData={data?.results}
          control={control}
          isLoadingMitra={isLoading}
          getValues={getValues}
          register={register}
          errors={errors}
          dataPartner={dataPartner}
        />
        <AddressDataSection register={register} errors={errors} />
        <DomicileDataSection register={register} errors={errors} />
        {maritalStatus === "Kawin" ? (
          <SpouseDataSection
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
            control={control}
          />
        ) : null}
        <PersonalWorkplaceDataSection
          register={register}
          getValues={getValues}
          errors={errors}
          control={control}
        />
        <EmergencyContactSection register={register} errors={errors} />
        <FooterButton
          isDirty={isDirty}
          isLoading={insertApplicationDetail.isLoading}
          setSaveType={setSaveType}
        />
      </div>
    </form>
  );
};

export default ApplicationDetailIndividualForm;
