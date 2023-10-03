import {useCallback} from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import {useRouter, useSearchParams} from "next/navigation";
import {useController, useForm} from "react-hook-form";

import {Text} from "~/components/ui";
import {useGetRegion} from "~/hooks/useGetRegion";
import useToast from "~/hooks/useToast";
import {useInsertFinancingLoan} from "~/services/loan";
import {useGetQCList} from "~/services/users/qcList/list";
import {AdminDetailSchema} from "~/validations/AdminDetail";

import SelectComponent from "../../../components/select-component";
import UploadComponent from "../../../components/upload-component";
import FooterButton from "../../components/footer-button";

import type {FieldError} from "react-hook-form";
import type {SingleValue} from "react-select";
import type {QCAssignType} from "~/interfaces/form/adminDetail";
import type {FinanceResponseData} from "~/interfaces/services/finance";

const QCAssignment = ({financeData}: {financeData?: FinanceResponseData}) => {
  const statusFinance = financeData?.status?.no;

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<QCAssignType>({
    resolver: yupResolver(AdminDetailSchema),
  });

  const {
    setSearchCity,
    setSelectedProvince,
    setSelectedCity,
    provinceOption,
    cityOption,
  } = useGetRegion();

  const {data: dataQC} = useGetQCList({search: "", page: 1, per_page: 100});

  const {field: provinceName} = useController({
    control,
    name: `province_name`,
  });
  const {field: cityName} = useController({
    control,
    name: `city_name`,
  });

  const handleChangeProvince = useCallback(
    (
      eventChange: SingleValue<{
        value: string;
        label: string;
      }>,
      onChange?: (arg0?: string) => void,
    ) => {
      setSelectedProvince({
        value: eventChange?.value as string,
        label: eventChange?.label as string,
      });
      onChange?.(eventChange?.value);
      provinceName.onChange(eventChange?.label);
    },
    [setSelectedProvince],
  );

  const handleChangeCity = useCallback(
    (
      eventChange: SingleValue<{
        value: string;
        label: string;
      }>,
      onChange?: (arg0?: string) => void,
    ) => {
      setSelectedCity({
        value: eventChange?.value as string,
        label: eventChange?.label as string,
      });
      onChange?.(eventChange?.value);
      cityName.onChange(eventChange?.label);
    },
    [setSelectedCity],
  );

  const {toast} = useToast();

  const searchParams = useSearchParams();
  const financeId = searchParams.get("uuid");
  const router = useRouter();

  const insertFinancingLoan = useInsertFinancingLoan();

  const handleSave = (values: QCAssignType) => {
    const dataSave = {
      uuid: financeId as string,
      pic: values?.pic,
      city: {
        id: values?.city_id,
        name: values?.city_name,
      },
      province: {
        id: values?.province_id,
        name: values?.province_name,
      },
      assignment_letter: values?.assignment_letter?.[0],
      date_timestamps: dayjs().toISOString(),
      status: financeData?.status?.no,
    };
    insertFinancingLoan
      .mutateAsync(dataSave)
      .then(() => {
        router.replace("/workspace");
        return toast({
          message: "Berhasil menugaskan QC",
          type: "success",
        });
      })
      .catch(() =>
        toast({
          message: "Terjadi kesalahan, silahkan coba kembali!",
          type: "error",
        }),
      );
  };

  return (
    <div className="bg-white p-6">
      <Text
        weight="semi-bold"
        variant="sub-header-2"
        className="mb-3.5 text-blue-600">
        QC Assignment
      </Text>
      <form
        className="flex flex-col gap-3.5"
        onSubmit={handleSubmit(handleSave)}>
        <SelectComponent
          control={control}
          errorMessage={errors.pic as FieldError}
          label="Nama Petugas QC"
          fieldName="pic"
          options={dataQC?.results?.map((item) => ({
            value: item?.id,
            label: item?.name,
          }))}
        />

        <SelectComponent
          control={control}
          errorMessage={errors.province_id as FieldError}
          label="Provinsi"
          fieldName="province_id"
          options={provinceOption}
          optionChange={handleChangeProvince}
        />

        <SelectComponent
          control={control}
          errorMessage={errors.city_id as FieldError}
          label="Kota"
          fieldName="city_id"
          onInputChange={(e) => setSearchCity(e)}
          options={cityOption}
          optionChange={handleChangeCity}
        />
        <UploadComponent
          control={control}
          type="input"
          errorMessage={errors.assignment_letter as FieldError}
          label="Rekening Koran 6 Bulan Terakhir"
          fieldName="assignment_letter"
        />
        <FooterButton status={statusFinance ?? 0} />
      </form>
    </div>
  );
};

export default QCAssignment;
