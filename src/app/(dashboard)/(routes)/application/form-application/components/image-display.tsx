import {Text} from "~/components/ui";
import DisplayImage from "~/components/ui/Upload/DisplayImage";

const ImageDisplay = ({
  fileList,
  label,
}: {
  fileList?: string[];
  label: string;
}) => {
  return (
    <>
      <Text className="mb-2">{label}</Text>
      {(fileList?.length ?? 0) > 0 ? (
        <div className="flex gap-5">
          {fileList?.map((file, index) => (
            <DisplayImage
              index={index}
              allowEmpty={false}
              key={file}
              fileId={file}
            />
          ))}
        </div>
      ) : (
        <DisplayImage index={0} allowEmpty={false} fileId={null} />
      )}
    </>
  );
};

export default ImageDisplay;
