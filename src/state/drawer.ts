import {atom} from "jotai";

export const drawerAtom = atom<{isOpen: boolean}>({
  isOpen: false,
});

export const hideSidebarAtom = atom<{isHide: boolean}>({
  isHide: false,
});
