const fs = require("fs");
const path = require("path");

const iconJson = require("./selection.json");

const file = path.resolve("./src/interfaces/icons/icomoonType.ts");

const getIconName = () => {
  let iconNames = "";
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  iconJson.icons.forEach((icon) => {
    iconNames += `\n  | '${icon.properties.name}'`;
  });
  const types = `export type IcomoonType =${iconNames};\n`;
  fs.writeFileSync(file, types);
};

getIconName();
