"use client";
import {Fragment} from "react";

import {Transition} from "@headlessui/react";
import {useAtom} from "jotai";

import {hideSidebarAtom} from "~/state/drawer";

import SidebarComponent from "./sidebar";

const Sidebar = () => {
  const [hideSidebar] = useAtom(hideSidebarAtom);

  return (
    <Transition
      appear
      show={!hideSidebar.isHide}
      as={Fragment}
      data-testid="overlay">
      <Transition.Child
        as={Fragment}
        enter="transition ease-in-out duration-200 transform"
        enterFrom="-translate-x-0"
        enterTo="-translate-x-1"
        leave="ease-in duration-200"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-0">
        <div
          className={`relative top-21 z-0 h-full min-h-sidebar w-64 bg-white px-5.5 py-6 drop-shadow-lg`}>
          <SidebarComponent source="sidebar" />
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default Sidebar;
