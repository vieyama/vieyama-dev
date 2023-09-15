import {Disclosure} from "@headlessui/react";

import {Icon, Text} from "~/components/ui";

const CollapseComponent: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({title, children}) => {
  return (
    <Disclosure defaultOpen>
      {({open}) => (
        <div className="w-ful">
          <Disclosure.Button className="flex w-full items-center justify-between bg-blue-50 p-3">
            <Text weight="semi-bold">{title}</Text>
            <Icon name={open ? "up-solid" : "down-solid"} size="13px" />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-5 flex flex-col gap-5">
            {children}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default CollapseComponent;
