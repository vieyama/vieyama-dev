import {useForm} from "react-hook-form";
import Select from "react-select";

import FormItem from "~/components/form";
import ControllerWrapper from "~/components/form/Controller";
import {Input, InputNumber, Text} from "~/components/ui";

import InputDisplay from "../../../components/input-display";
import FooterButton from "../../components/footer-button";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const CreditOffers = ({financeData}: {financeData?: FinanceResponseData}) => {
  const financeStatus = financeData?.status?.no;
  const {
    handleSubmit,
    control,
    register,
    formState: {errors},
  } = useForm<{notes?: string; pic?: string; approved?: boolean}>({});
  const handleSave = () => {};

  return (
    <div className="mt-5 bg-white p-6">
      <Text
        weight="semi-bold"
        variant="sub-header-2"
        className="mb-3.5 text-blue-600">
        Penawaran Kredit
      </Text>
      <form
        className="flex flex-col gap-3.5"
        onSubmit={handleSubmit(handleSave)}>
        <FormItem
          label="Nlai Inventory"
          error={errors.pic}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <ControllerWrapper fieldName={`pic`} control={control}>
            {({onChange, value, onBlur}) => {
              return (
                <InputNumber
                  isError={!!errors.pic}
                  onChangeValue={onChange}
                  onBlur={onBlur}
                  defaultValue={value}
                  customPrefix={
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-s-lg bg-gray-200 px-4">
                      IDR
                    </div>
                  }
                />
              );
            }}
          </ControllerWrapper>
        </FormItem>
        <FormItem
          label="Rasio Pendanaan"
          error={errors.notes}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <ControllerWrapper fieldName={`notes`} control={control}>
            {({onChange, value, onBlur}) => {
              return (
                <InputNumber
                  className="text-end"
                  onChangeValue={onChange}
                  onBlur={onBlur}
                  defaultValue={value}
                  customSuffix={
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center rounded-e-lg bg-gray-200 px-4">
                      %
                    </div>
                  }
                />
              );
            }}
          </ControllerWrapper>
        </FormItem>
        <FormItem
          label="Lembaga Pembiayaan"
          error={errors.notes}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <ControllerWrapper fieldName={`notes`} control={control}>
            {({onChange}) => {
              return (
                <Select
                  id={"notes"}
                  className="react-select"
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 8,
                  })}
                  styles={{
                    menu: (provided) => ({...provided, zIndex: 9999}),
                  }}
                  onChange={onChange}
                  isMulti
                  placeholder=""
                  components={{IndicatorSeparator: null}}
                  options={[
                    {value: "KoinWorks", label: "KoinWorks"},
                    {value: "Restock.id", label: "Restock.id"},
                    {value: "Modal Rakyat", label: "Modal Rakyat"},
                  ]}
                />
              );
            }}
          </ControllerWrapper>
        </FormItem>

        <FormItem
          label="Skor Kredit SLIK"
          error={errors.notes}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <div className="flex flex-col gap-4 md:flex-row">
            <select
              className={`block w-full rounded-lg border ${
                errors.notes ? "border-error" : "border-gray-300"
              } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
              {...register("notes")}
              placeholder="Kolektibilitas">
              <option value="">Pilih Kolektibilitas</option>
              <option value="Kolektibilitas 1">Kolektibilitas 1</option>
              <option value="Kolektibilitas 2">Kolektibilitas 2</option>
              <option value="Kolektibilitas 3">Kolektibilitas 3</option>
              <option value="Kolektibilitas 4">Kolektibilitas 4</option>
              <option value="Kolektibilitas 5">Kolektibilitas 5</option>
            </select>
          </div>
        </FormItem>
        <InputDisplay
          label="Nilai Pendanaan"
          value={`IDR ${Number(90000000).toLocaleString()}`}
        />
        <InputDisplay
          label="Kuantitas"
          inputClassName="text-end"
          value={`${Number(200).toLocaleString() ?? ""} Kg`}
        />
        <FormItem
          label="Interest Rate"
          error={errors.pic}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <ControllerWrapper fieldName={`pic`} control={control}>
            {({onChange, value, onBlur}) => {
              return (
                <InputNumber
                  isError={!!errors.pic}
                  onChangeValue={onChange}
                  onBlur={onBlur}
                  defaultValue={value}
                  customPrefix={
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-s-lg bg-gray-200 px-4">
                      IDR
                    </div>
                  }
                />
              );
            }}
          </ControllerWrapper>
        </FormItem>
        <FormItem
          label="Admin Fee"
          error={errors.pic}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <ControllerWrapper fieldName={`pic`} control={control}>
            {({onChange, value, onBlur}) => {
              return (
                <InputNumber
                  isError={!!errors.pic}
                  onChangeValue={onChange}
                  onBlur={onBlur}
                  defaultValue={value}
                  customPrefix={
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-s-lg bg-gray-200 px-4">
                      IDR
                    </div>
                  }
                />
              );
            }}
          </ControllerWrapper>
        </FormItem>
        <FormItem
          label="Origination Fee"
          error={errors.pic}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <ControllerWrapper fieldName={`pic`} control={control}>
            {({onChange, value, onBlur}) => {
              return (
                <InputNumber
                  isError={!!errors.pic}
                  onChangeValue={onChange}
                  onBlur={onBlur}
                  defaultValue={value}
                  customPrefix={
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-s-lg bg-gray-200 px-4">
                      IDR
                    </div>
                  }
                />
              );
            }}
          </ControllerWrapper>
        </FormItem>
        <FormItem
          label="Bunga"
          optional
          error={errors.pic}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <ControllerWrapper fieldName={`pic`} control={control}>
            {({onChange, value, onBlur}) => {
              return (
                <InputNumber
                  isError={!!errors.pic}
                  onChangeValue={onChange}
                  onBlur={onBlur}
                  defaultValue={value}
                  customPrefix={
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-s-lg bg-gray-200 px-4">
                      IDR
                    </div>
                  }
                />
              );
            }}
          </ControllerWrapper>
        </FormItem>
        <FormItem
          label="Beban PPN"
          optional
          error={errors.pic}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <ControllerWrapper fieldName={`pic`} control={control}>
            {({onChange, value, onBlur}) => {
              return (
                <InputNumber
                  isError={!!errors.pic}
                  onChangeValue={onChange}
                  onBlur={onBlur}
                  defaultValue={value}
                  customPrefix={
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-s-lg bg-gray-200 px-4">
                      IDR
                    </div>
                  }
                />
              );
            }}
          </ControllerWrapper>
        </FormItem>
        <FormItem
          label="Jatuh Tempo #1"
          error={errors.notes}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <Input
            type="date"
            isError={!!errors.notes}
            {...register("notes", {
              valueAsDate: true,
            })}
          />
        </FormItem>
        <FormItem
          label="Jatuh Tempo #2"
          error={errors.notes}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <Input
            type="date"
            isError={!!errors.notes}
            {...register("notes", {
              valueAsDate: true,
            })}
          />
        </FormItem>
        <FormItem
          label="Jatuh Tempo #3"
          error={errors.notes}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <Input
            type="date"
            isError={!!errors.notes}
            {...register("notes", {
              valueAsDate: true,
            })}
          />
        </FormItem>
        <FormItem
          label="Total Disbursement"
          error={errors.pic}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <ControllerWrapper fieldName={`pic`} control={control}>
            {({onChange, value, onBlur}) => {
              return (
                <InputNumber
                  isError={!!errors.pic}
                  onChangeValue={onChange}
                  onBlur={onBlur}
                  defaultValue={value}
                  customPrefix={
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-s-lg bg-gray-200 px-4">
                      IDR
                    </div>
                  }
                />
              );
            }}
          </ControllerWrapper>
        </FormItem>
        <FooterButton withReturn status={financeStatus ?? 0} />
      </form>
    </div>
  );
};

export default CreditOffers;
