"use client";

import {useAtom} from "jotai";

import {Icon, Text} from "~/components/ui";
import {authUserAtom} from "~/state/userAuth";

const Greeting = () => {
  const [authUser] = useAtom(authUserAtom);

  return (
    <div className="flex-start flex flex-col gap-3 bg-white p-7.5 sm:flex-row sm:items-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-stroke bg-background">
        <Icon name="user" size={32} color="gray500" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-x-2 md:flex-row">
          <Text variant="sub-header-2" weight="bold">
            Hi, {authUser?.name ?? "User"} !
          </Text>
          <Text variant="sub-header-2" weight="medium">
            Welcome back to your FishFin Workspace
          </Text>
        </div>
        <Text variant="sub-header-2" className="text-blue-600">
          {authUser?.role?.name ?? ""}
        </Text>
      </div>
    </div>
  );
};

export default Greeting;
