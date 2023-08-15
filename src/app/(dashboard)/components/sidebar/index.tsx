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
        enterFrom="translate-x-0"
        enterTo="-translate-x-full"
        leave="ease-in duration-200"
        leaveFrom="-translate-x-full"
        leaveTo="translate-x-0">
        <aside
          id="default-sidebar"
          className="fixed left-0 top-21 z-40 h-screen w-64 -translate-x-full transition-transform screen-870:translate-x-0"
          aria-label="Sidebar">
          <div className="h-full overflow-y-auto bg-white px-3 py-4 ">
            <SidebarComponent source="sidebar" />
          </div>
        </aside>
      </Transition.Child>
    </Transition>
  );
};

export default Sidebar;
