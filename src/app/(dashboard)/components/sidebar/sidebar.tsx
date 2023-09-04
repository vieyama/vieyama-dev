"use client";

import type {FC} from "react";

import {useAtom} from "jotai";
import {usePathname, useRouter} from "next/navigation";

import {Button, Icon} from "~/components/ui";
import {routes} from "~/dashboard/constants/sidebar";
import {useLogout} from "~/hooks/useLogout";
import {drawerAtom} from "~/state/drawer";

import type {IcomoonType} from "~/interfaces/icons/icomoonType";

interface SidebarProps {
  source: "sidebar" | "drawer";
}

const SidebarComponent: FC<SidebarProps> = ({source}) => {
  const [drawer, setDrawer] = useAtom(drawerAtom);

  const pathname = usePathname();
  const router = useRouter();
  const {logout} = useLogout();

  const handleRoute = (url: string) => {
    if (url === "/signout") {
      logout();
    } else {
      router.push(url);
    }
    if (source === "drawer") setDrawer({isOpen: !drawer.isOpen});
  };
  return (
    <div className="flex flex-col">
      {routes.map((route) => (
        <Button
          key={route.url}
          variant="transparent"
          className="justify-start px-4"
          onClick={() => handleRoute(route.url)}>
          <Icon
            name={route.icon as IcomoonType}
            size={24}
            color={pathname.includes(route.url) ? "blue600" : "black"}
          />
          <span
            className={`ml-2 text-base ${
              pathname.includes(route.url) ? "text-blue-600" : "text-black"
            }`}>
            {route.label}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default SidebarComponent;
