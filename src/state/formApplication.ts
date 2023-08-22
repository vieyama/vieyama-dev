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
