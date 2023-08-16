import type {ReactNode} from "react";
import React from "react";

import Image from "next/image";

import {Text} from "~/components/ui";

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="hidden items-center justify-center sm:flex">
        {children}
      </div>
      <div className="flex h-screen flex-col justify-between bg-gradient-auth px-[44px] py-[66px]">
        <div className="self-end">
          <Image
            src="/assets/auth-illustration.svg"
            width={145}
            height={22}
            alt="Fishfin auth illustration"
          />
        </div>
        <div className="flex flex-col gap-y-7 self-center">
          <Image
            src="/assets/fishfin-logo-white.svg"
            width={145}
            height={22}
            alt="Fishfin auth illustration"
          />
          <Text className="text-white">FishFin (FishLog Finance)</Text>
        </div>
        <Image
          src="/assets/auth-illustration.svg"
          width={145}
          height={22}
          alt="Fishfin auth illustration"
        />
      </div>
      {/* for mobile */}
      <div className="grid h-screen bg-transparent py-8 sm:hidden">
        <Image
          src="/assets/fishfin-logo.svg"
          width={145}
          height={22}
          alt="Fishfin auth illustration"
          className="justify-self-center"
        />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
