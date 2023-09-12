"use client";

import {type ChangeEvent, useEffect, useState} from "react";

import {includes} from "lodash";
import Image from "next/image";

import useToast from "~/hooks/useToast";
import clientUpload from "~/utils/clientUpload";

import DisplayImage from "./DisplayImage";

export type FilesType = string[];

interface UploadProps {
  onChange?: (value: string[]) => void;
  onDelete?: (value: string[]) => void;
  fileList: FilesType;
  maxFile?: number;
  maxFileSise?: number;
  accept?: string;
  fileTypeLimiter?: string[];
  allowEmpty?: boolean;
  id: string;
}

const Upload: React.FC<UploadProps> = ({
  onChange,
  onDelete,
  fileList,
  maxFile,
  allowEmpty = true,
  maxFileSise = 5,
  id,
  accept = ".doc, .docx, .pdf, .jpg, .jpeg, .png",
}) => {
  const fileTypeLimiter = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword",
  ];

  const {toast} = useToast();
  const [files, setFiles] = useState<FilesType>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (fileList) {
      setFiles(fileList);
    }
  }, [fileList]);

  const handleGetFile = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const filesData = event.target.files;

    if (maxFile && (filesData?.length || 0) + (files?.length || 0) > 5) {
      setIsLoading(false);

      return toast({
        message: `Maksimal ${maxFile} File`,
        type: "warning",
      });
    }

    const promise = [];
    const data = new FormData();

    for (let index = 0; index < (filesData?.length as number); index++) {
      const file = filesData?.[index];
      const sizeLimit = (file?.size as number) / 1024 / 1024 < maxFileSise;

      if (!includes(fileTypeLimiter, file?.type)) {
        return toast({
          message: `Format file tidak didukung.`,
          type: "warning",
        });
      }

      if (!sizeLimit) {
        return toast({
          message: `Maksimal File Size ${maxFileSise} MB`,
          type: "warning",
        });
      }

      data.append("file", file as File);
      const upload = clientUpload.post("/attachment/fishfin", data);

      promise.push(upload);
    }

    await Promise.all(promise)
      .then((resultUpload) => {
        setIsLoading(false);
        const result = resultUpload
          .map((item) => item.data)
          ?.map((item) => `fishfin/${item.id}`);

        return onChange?.(result);
      })
      .catch(() => {
        return toast({
          message: `Terjadi kesalahan, silahkan coba kembali.`,
          type: "error",
        });
      });
  };

  const handleDelete = (fileId: string) => {
    const currentFile = files ? [...files] : [];
    const deletedIndex = files?.findIndex((item) => item === fileId);
    delete currentFile[deletedIndex as number];

    const setFile = currentFile.filter(function (element) {
      return element !== undefined;
    });
    setFiles(setFile);
    onDelete?.(setFile);
  };

  let displayUploadButton = true;

  if (!maxFile) {
    displayUploadButton = true;
  } else {
    if ((files?.length || 0) >= (maxFile || 0)) {
      displayUploadButton = false;
    }
  }

  return (
    <div className="flex gap-4">
      {files
        ? files.map((file, index) => (
            <DisplayImage
              index={index}
              allowEmpty={allowEmpty}
              handleDelete={handleDelete}
              key={file}
              fileId={file}
            />
          ))
        : null}
      <div
        className={`${
          displayUploadButton ? "flex" : "hidden"
        } w-[120px] select-none flex-col gap-2`}>
        <label
          htmlFor={`dropzone-file-${id}`}
          className={`${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          } flex h-[120px] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white hover:bg-gray-100`}>
          <div className="flex select-none flex-col items-center justify-center">
            {isLoading ? (
              <div role="status" className="flex">
                <svg
                  aria-hidden="true"
                  className="mr-2 inline h-10 w-10 animate-spin fill-blue-600 text-gray-400"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <Image
                src="/assets/upload-icon.svg"
                width={35}
                height={35}
                alt="Fishfin Upload Icon"
              />
            )}
          </div>
          <input
            id={`dropzone-file-${id}`}
            accept={accept}
            onChange={handleGetFile}
            multiple={true}
            disabled={isLoading}
            type="file"
            className="hidden"
          />
        </label>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Upload Gambar
        </p>
      </div>
    </div>
  );
};

export default Upload;
