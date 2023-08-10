import * as fs from "fs";
import * as path from "path";

import * as iconJson from "./selection.json";

const file = path.resolve("./src/interfaces/icons/icomoonType.ts");

const getIconName = () => {
  let iconNames = "";
  iconJson.icons.forEach((icon) => {
    iconNames += `\n  | '${icon.properties.name}'`;
  });
  const types = `export type IcomoonType =${iconNames};\n`;
  fs.writeFileSync(file, types);
};

getIconName();
