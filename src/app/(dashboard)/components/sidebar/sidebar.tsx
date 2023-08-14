"use client";

import type {FC} from "react";

import {deleteCookie} from "cookies-next";
import {useAtom} from "jotai";
import {usePathname, useRouter} from "next/navigation";

import {Button, Icon} from "~/components/ui";
import {routes} from "~/dashboard/constants/sidebar";
import {drawerAtom} from "~/state/drawer";

import type {IcomoonType} from "~/interfaces/icons/icomoonType";

interface SidebarProps {
  source: "sidebar" | "drawer";
}

const SidebarComponent: FC<SidebarProps> = ({source}) => {
  const [drawer, setDrawer] = useAtom(drawerAtom);

  const pathname = usePathname();
  const router = useRouter();

  const handleRoute = (url: string) => {
    if (url === "/signout") {
      deleteCookie("accessToken");
      router.replace("/login");
    } else {
      router.push(url);
    }
    if (source === "drawer") setDrawer({isOpen: !drawer.isOpen});
  };
  return (
    <div className="flex flex-col">
      {routes.map((route, key) => (
        <Button
          key={key}
          variant="transparent"
          className="justify-start px-4"
          onClick={() => handleRoute(route.url)}>
          <Icon
            name={route.icon as IcomoonType}
            size={24}
            color={route.url.includes(pathname) ? "blue600" : "black"}
          />
          <span
            className={`text-base ml-2 ${
              route.url.includes(pathname) ? "text-blue-600" : "text-black"
            }`}>
            {route.label}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default SidebarComponent;