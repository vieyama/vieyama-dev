import IcomoonReact from "icomoon-react";

import colors from "~/constants/colors";

import iconSet from "./selection.json";

import type {ColorIndex} from "~/interfaces/constants/colors";
import type {IconProps} from "~/interfaces/icons/icon";

const Icon: React.FC<IconProps> = ({
  size = "16px",
  className,
  name,
  color = "",
}) => {
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={colors[color as ColorIndex]}
      size={size}
      icon={name}
    />
  );
};

export default Icon;
