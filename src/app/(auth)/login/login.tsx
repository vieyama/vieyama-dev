"use client";
import {useState} from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {setCookie} from "cookies-next";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";

import FormItem from "~/components/form";
import {Button, Input, InputPassword, Text} from "~/components/ui";
import {LoginSchema} from "~/validations/AuthValidation";

const LoginComponent = () => {
  const {replace} = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (_data: {email: string; password: string}) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCookie("accessToken", "whahaha cookies");
      replace("/workspace");
    }, 1000);
  };

  return (
    <div className="flex w-full max-w-2xl flex-col px-10 min-[953px]:px-24">
      <Text variant="heading-2" className="mb-11">
        Masuk
      </Text>
      <form className="flex flex-col gap-y-7" onSubmit={handleSubmit(onSubmit)}>
        <FormItem error={errors.email}>
          <Input
            size="lg"
            type="email"
            placeholder="Alamat email"
            isError={!!errors.email}
            {...register("email")}
          />
        </FormItem>
        <FormItem error={errors.password}>
          <InputPassword
            size="lg"
            placeholder="Kata sandi"
            isError={!!errors.password}
            {...register("password")}
          />
        </FormItem>

        <Button isLoading={isLoading} type="submit">
          Masuk
        </Button>
      </form>
    </div>
  );
};

export default LoginComponent;
