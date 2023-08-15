import Link from "next/link";

import {Icon, Text} from "~/components/ui";

import type {BreadcrumbsProps} from "~/interfaces/components/breadcrumbs";
const Breadcrumb = ({breadcrumb}: {breadcrumb: BreadcrumbsProps}) => {
  const getSeparatorIcon = (key: number) => {
    let icon = null;
    if (breadcrumb.length === 1) {
      icon = <Icon name="cheveron-right" size={20} color="gray500" />;
    } else {
      icon =
        key !== breadcrumb.length - 1 ? (
          <Icon name="cheveron-right" size={20} color="gray500" />
        ) : null;
    }

    return icon;
  };
  return (
    <div className="flex gap-x-2">
      {breadcrumb.map((crumb, i) => {
        return (
          <div className="flex items-center gap-x-2" key={i}>
            <Link href={crumb.path} className="hover:underline">
              <Text
                variant="sub-header-2"
                className={`${i === 0 ? "text-blue-600" : "text-black"}`}>
                {crumb.label}
              </Text>
            </Link>
            {/* separator */}
            {getSeparatorIcon(i)}
          </div>
        );
      })}
      {/* <Text variant="sub-header-2" className="text-blue-600">
        Workspace
      </Text>
      <Icon name="cheveron-right" />
      <Text variant="sub-header-2">Formulir Aplikasi Pembiayaan</Text> */}
    </div>
  );
};

export default Breadcrumb;
