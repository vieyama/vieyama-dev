import {atom} from "jotai";
import {atomWithStorage} from "jotai/utils";

import type {Directors} from "~/interfaces/form/detailApplication";
import type {Items} from "~/interfaces/form/detailItem";

type TabsProps = {
  name: string;
  isDone: boolean;
}[];
export const applicationTabsAtom = atomWithStorage<TabsProps>(
  "applicationTabsAtom",
  [
    {name: "application-details", isDone: false},
    {name: "item-details", isDone: false},
    {name: "requirement-document", isDone: false},
    {name: "confirmation", isDone: false},
  ],
);

export const mitraListSearchAtom = atom<string>("");
export const selectedMitraIdAtom = atom<string | null>(null);
export const deletedDirectorAtom = atom<Directors[] | null>(null);
export const deletedItemsAtom = atom<Items[] | null>(null);
export const storedImageAtom = atom<
  {formName: string; items: string[]}[] | null
>(null);
