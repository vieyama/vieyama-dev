import type {IcomoonType} from "./icomoonType";
import type {ColorIndex} from "~/interfaces/constants/colors";

export interface IconProps {
  color?: ColorIndex;
  size?: string | number;
  name: IcomoonType;
  className?: string;
}
