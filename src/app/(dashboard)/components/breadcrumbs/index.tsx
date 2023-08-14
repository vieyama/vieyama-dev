import {Icon, Text} from "~/components/ui";

const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Text variant="sub-header-2" className="text-blue-600">
        Workspace
      </Text>
      <Icon name="cheveron-right" />
      <Text variant="sub-header-2">Formulir Aplikasi Pembiayaan</Text>
    </div>
  );
};

export default Breadcrumb;
