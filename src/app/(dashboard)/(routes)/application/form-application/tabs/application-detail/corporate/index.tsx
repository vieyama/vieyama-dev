import {useEffect, useState} from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import {useAtom} from "jotai";
import isEmpty from "lodash/isEmpty";
import isNumber from "lodash/isNumber";
import omit from "lodash/omit";
import toNumber from "lodash/toNumber";
import {useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";

import {useNext} from "~/hooks/useNext";
import useToast from "~/hooks/useToast";
import {useInsertFinance} from "~/services/finance";
import {useGetPartnerDetail, useGetPartnerList} from "~/services/partner/list";
import {
  deletedDirectorAtom,
  mitraListSearchAtom,
} from "~/state/formApplication";
import {DetailApplicationCorporateSchema} from "~/validations/FormApplication";

import {
  ApplicantDataSection,
  CompanyAddressDataSection,
  CompanyDirectionDataSection,
} from "./section";
import FooterButton from "../../../components/footer-button";
import {EmergencyContactSection, FinancingDataSection} from "../global";

import type {Control} from "react-hook-form";
import type {DetailApplicationCorporateType} from "~/interfaces/form/detailApplication";
import type {Partner} from "~/interfaces/services/finance";
import type {PartnerDetailData} from "~/interfaces/services/partner/detail";

type FormValueType = DetailApplicationCorporateType;

const ApplicationDetailCorporateForm: React.FC<{
  defaultValueForm?: DetailApplicationCorporateType;
  dataPartner?: Partner;
}> = ({defaultValueForm, dataPartner}) => {
  const searchParams = useSearchParams();
  const dataId = searchParams.get("uuid");
  const applicationType = searchParams.get("payment");
  const {toast} = useToast();

  const {
    control,
    register,
    setValue,
    getValues,
    handleSubmit,
    watch,
    formState: {errors, dirtyFields},
  } = useForm<FormValueType>({
    resolver: yupResolver(DetailApplicationCorporateSchema),
    defaultValues: defaultValueForm,
  });
  const isDirty = !isEmpty(dirtyFields);

  const selectedMitraId = watch("partner_id");
  const [mitraListSearch] = useAtom(mitraListSearchAtom);
  const [deletedDirector, setDeletedDirector] = useAtom(deletedDirectorAtom);

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

  const [saveType, setSaveType] = useState<"save" | "next">("save");
  const insertApplicationDetail = useInsertFinance();
  const {handleNext} = useNext();

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
    const deletedDirectors = deletedDirector?.map((deleted) => {
      const result = {
        ...deleted,
        province: {
          id: deleted?.province_id,
          name: deleted?.province_name,
        },
        city: {
          id: deleted?.city_id,
          name: deleted?.city_name,
        },
        district: {
          id: deleted?.district_id,
          name: deleted?.district_name,
        },
        share_ownership: isNumber(deleted?.share_ownership)
          ? `${deleted?.share_ownership}%`
          : deleted?.share_ownership,
        dob: dayjs(deleted?.dob).unix(),
        ktp: deleted?.no_ktp,
      };
      return omit(
        result,
        "no_ktp",
        "id",
        "province_id",
        "province_name",
        "city_id",
        "city_name",
        "district_id",
        "district_name",
      );
    });

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
      directors: isEmpty(deletedDirector)
        ? directors
        : [...(directors as []), ...(deletedDirectors as [])],
      tenor: toNumber(data.tenor),
      province,
      city,
      district,
      financing_type: applicationType,
    };

    if (defaultValueForm?.status !== 0) {
      return handleNext();
    }

    if (!isDirty && saveType === "next") {
      return handleNext();
    }

    if (isDirty) {
      insertApplicationDetail
        .mutateAsync(dataSave)
        .then(() => {
          setDeletedDirector(null);
          if (saveType === "next") {
            return handleNext();
          }
        })
        .catch(() => {
          return toast({
            message: "Terjadi kesalahan, silahkan coba kembali!",
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
          control={control}
          getValues={getValues}
        />
        <ApplicantDataSection
          mitraData={data?.results}
          dataPartner={dataPartner}
          isLoadingMitra={isLoading}
          getValues={getValues}
          register={register}
          errors={errors}
          control={control}
        />
        <CompanyAddressDataSection
          register={register}
          errors={errors}
          getValues={getValues}
          control={control}
        />
        <CompanyDirectionDataSection
          register={register}
          errors={errors}
          control={control as Control<DetailApplicationCorporateType>}
          getValues={getValues}
        />
      </div>
      <div className="mt-4 bg-white p-6">
        <EmergencyContactSection register={register} errors={errors} />
        <FooterButton
          applicationStatus={defaultValueForm?.status ?? 0}
          isLoading={insertApplicationDetail.isLoading}
          setSaveType={setSaveType}
          isDirty={isDirty}
        />
      </div>
    </form>
  );
};

export default ApplicationDetailCorporateForm;
