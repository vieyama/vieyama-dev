import dayjs from "dayjs";
import toNumber from "lodash/toNumber";
import toString from "lodash/toString";
import {useSearchParams} from "next/navigation";

import {useGetFinancingById} from "~/services/finance";
import {getLengthOfStay} from "~/utils/getLengthOfStay";

import ApplicationDetailCorporateForm from "./corporate";
import ApplicationDetailIndividualForm from "./individual";

const ApplicationDetails = ({userType}: {userType: string}) => {
  const searchParams = useSearchParams();

  const financeId = searchParams.get("uuid");

  const {data, isLoading} = useGetFinancingById(financeId as string);

  const defaultValueIndividual = {
    proposed_value: toNumber(data?.proposed_value),
    tenor: toString(data?.tenor),
    payment_method: data?.payment_method,
    loan_purposes: data?.loan_purposes,
    storage: data?.storage,
    partner_id: data?.partner_id ?? "",
    applicant_name: data?.applicant_name ?? "",
    no_ktp: data?.no_ktp ?? undefined,
    no_telp: data?.no_telp ?? "",
    mothers_maiden_name: data?.mothers_maiden_name ?? "",
    pob: data?.pob,
    ...(data?.dob && {
      dob: dayjs(toNumber(data?.dob)).format("YYYY-MM-DD"),
    }),
    house_ownership_status: data?.house_ownership_status,
    length_of_stay_year: data?.length_of_stay
      ? toString(getLengthOfStay(toNumber(data?.length_of_stay)).year)
      : undefined,
    length_of_stay_month: data?.length_of_stay
      ? toString(getLengthOfStay(toNumber(data?.length_of_stay)).month)
      : undefined,
    last_education: data?.last_education,
    marital_status: data?.marital_status,
    no_hp: data?.no_hp,
    no_hp2: toNumber(data?.no_hp_other),
    email: data?.email,
    domicile_address: data?.domicile_address ?? "",
    domicile_province_id: data?.domicile_province?.id,
    domicile_province_name: data?.domicile_province?.name ?? "",
    domicile_city_id: data?.domicile_city?.id,
    domicile_city_name: data?.domicile_city?.name ?? "",
    domicile_district_id: data?.domicile_district?.id,
    domicile_district_name: data?.domicile_district?.name ?? "",
    domicile_postal_code: data?.domicile_postal_code,
    address: data?.address ?? "",
    province_id: data?.province?.id,
    province_name: data?.province?.name ?? "",
    city_id: data?.city?.id,
    city_name: data?.city?.name ?? "",
    district_id: data?.district?.id,
    district_name: data?.district?.name ?? "",
    postal_code: data?.postal_code,
    spouse_name: data?.spouse_name ?? "",
    spouse_ktp: data?.spouse_ktp ?? "",
    spouse_no_hp: data?.spouse_no_hp ?? "",
    spouse_job: data?.spouse_job ?? "",
    spouse_income: toNumber(data?.spouse_income),
    spouse_number_of_dependents: toNumber(data?.spouse_number_of_dependents),
    personal_workplace_name: data?.personal_workplace_name,
    personal_workplace_address: data?.personal_workplace_address,
    personal_workplace_business_fields:
      data?.personal_workplace_business_fields?.[0],
    personal_workplace_position: data?.personal_workplace_position,
    personal_workplace_length_of_work_year:
      data?.personal_workplace_length_of_work
        ? toString(
            getLengthOfStay(toNumber(data?.personal_workplace_length_of_work))
              .year,
          )
        : undefined,
    personal_workplace_length_of_work_month:
      data?.personal_workplace_length_of_work
        ? toString(
            getLengthOfStay(toNumber(data?.personal_workplace_length_of_work))
              .year,
          )
        : undefined,
    personal_workplace_income: data?.personal_workplace_income
      ? toNumber(data?.personal_workplace_income)
      : undefined,
    personal_workplace_other_income: toNumber(
      data?.personal_workplace_other_income,
    ),
    personal_workplace_additional_income: toNumber(
      data?.personal_workplace_additional_income,
    ),
    emergency_name: data?.emergency_name,
    emergency_relationship: data?.emergency_relationship,
    emergency_address: data?.emergency_address,
    emergency_no_hp: data?.emergency_no_hp,
    emergency_office_no_telp: data?.emergency_office_no_telp,
    emergency_home_number: data?.emergency_home_number,
    status: data?.status?.no,
  };

  const defaultValueCorporate = {
    proposed_value: toNumber(data?.proposed_value),
    tenor: toString(data?.tenor),
    payment_method: data?.payment_method,
    loan_purposes: data?.loan_purposes,
    storage: data?.storage,
    partner_id: data?.partner_id ?? "",
    applicant_name: data?.applicant_name ?? "",
    company_name: data?.company_name ?? "",
    company_npwp: data?.company_npwp ?? "",
    applicant_npwp: data?.applicant_npwp ?? "",
    business_fields: data?.business_fields?.[0] ?? "",
    no_telp: data?.no_telp ?? "",
    email: data?.email ?? "",
    number_of_employees: toNumber(data?.number_of_employees),
    address: data?.address ?? "",
    province_id: data?.province?.id,
    province_name: data?.province?.name ?? "",
    city_id: data?.city?.id,
    city_name: data?.city?.name ?? "",
    district_id: data?.district?.id,
    district_name: data?.district?.name ?? "",
    postal_code: data?.postal_code ? toNumber(data?.postal_code) : 0,
    emergency_name: data?.emergency_name ?? "",
    emergency_relationship: data?.emergency_relationship ?? "",
    emergency_address: data?.emergency_address ?? "",
    emergency_no_hp: data?.emergency_no_hp ?? "",
    emergency_office_no_telp: data?.emergency_office_no_telp ?? "",
    emergency_home_number: data?.emergency_home_number ?? "",
    status: data?.status?.no,
    directors:
      (data?.directors?.length ?? 0) > 0
        ? data?.directors.map((item) => ({
            id: item?.id as string,
            name: item?.name,
            email: item?.email,
            no_ktp: item?.ktp,
            pob: item?.pob,
            dob: dayjs(toNumber(item?.dob)).format("YYYY-MM-DD"),
            position: item?.position,
            no_hp: item?.no_hp,
            share_ownership: item?.share_ownership,
            address: item?.address,
            province_id: item?.province?.id,
            province_name: item?.province?.name,
            city_id: item?.city?.id,
            city_name: item?.city?.name,
            district_id: item?.district?.id,
            district_name: item?.district?.name,
            postal_code: item?.postal_code ? toNumber(item?.postal_code) : 0,
          }))
        : [{id: null, name: "", postal_code: 0}],
  };

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return userType === "corporate" ? (
    <ApplicationDetailCorporateForm
      defaultValueForm={defaultValueCorporate}
      dataPartner={data?.partner}
    />
  ) : (
    <ApplicationDetailIndividualForm
      defaultValueForm={defaultValueIndividual}
      dataPartner={data?.partner}
    />
  );
};

export default ApplicationDetails;
