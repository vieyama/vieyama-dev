import {atom} from "jotai";

type TabsProps = {
  name: string;
  isDone: boolean;
}[];
export const applicationTabsAtom = atom<TabsProps>([
  {name: "application-details", isDone: false},
  {name: "item-details", isDone: false},
  {name: "requirement-document", isDone: false},
  {name: "confirmation", isDone: false},
]);

export const mitraListSearchAtom = atom<string>("");
export const selectedMitraIdAtom = atom<string | null>(null);
export const selectedDomicileProvinceIdAtom = atom<number | null>(null);
export const selectedDomicileCityIdAtom = atom<number | null>(null);
export const selectedDomicileDistrictIdAtom = atom<number | null>(null);
