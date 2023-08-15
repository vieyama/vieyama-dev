"use client";
import React from "react";

import {useAtom} from "jotai";
import Image from "next/image";

import {Button, Drawer, Icon} from "~/components/ui";
import {drawerAtom} from "~/state/drawer";

import SidebarComponent from "../sidebar/sidebar";

const Header = () => {
  const [drawer, setDrawer] = useAtom(drawerAtom);

  return (
    <>
      <div className="fixed z-50 flex h-23 w-screen items-center justify-between bg-white px-8 py-6 drop-shadow-md">
        <div className="flex">
          <Button
            variant="transparent"
            size="icon"
            className="block screen-870:hidden"
            onClick={() => setDrawer({isOpen: !drawer.isOpen})}>
            <Icon name="menu" size={39} />
          </Button>
          <Image
            src="/assets/fishfin-logo.svg"
            alt="Fishfin Logo"
            className="ml-10 hidden md:block screen-870:ml-0"
            width={142}
            height={39}
          />
        </div>
        <div className="flex items-center gap-x-8">
          <Button variant="tertiary">Bantuan?</Button>
          <div className="hidden items-center gap-x-2 md:flex">
            <Icon name="online" />{" "}
            <span className="text-base font-medium">FishLog</span>
          </div>
        </div>
      </div>

      {/* drawer */}
      <Drawer
        isOpen={drawer.isOpen}
        onClose={() => setDrawer({isOpen: !drawer.isOpen})}>
        <SidebarComponent source="drawer" />
      </Drawer>
    </>
  );
};

export default Header;
