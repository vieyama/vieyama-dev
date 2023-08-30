/* eslint-disable @next/next/no-img-element */
"use client";
import {type ChangeEvent, useState} from "react";

import Image from "next/image";

const Upload = () => {
  const [files, setFiles] = useState<string[]>([]);
  const handleGetFile = (event: ChangeEvent<HTMLInputElement>) => {
    const filesData = event.target.files;

    if ((filesData?.length as number) > 5) {
      return alert("max file 5");
    }

    const currentFile = files ? [...files] : [];
    for (let index = 0; index < (filesData?.length as number); index++) {
      const file = filesData?.[index];
      currentFile.push(URL.createObjectURL(file as File));
    }

    setFiles(currentFile);
  };

  return (
    <div className="flex gap-4">
      {files
        ? files.map((file) => (
            <div key={file} className="flex gap-4">
              <img
                src={file}
                className="h-[120px] w-[120px] object-cover object-center"
                alt="fishfin image upload"
              />
            </div>
          ))
        : null}
      <div className="flex w-[120px] flex-col gap-2">
        <label
          htmlFor="dropzone-file"
          className="flex h-[120px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/assets/upload-icon.svg"
              width={35}
              height={35}
              alt="Fishfin Upload Icon"
            />
          </div>
          <input
            id="dropzone-file"
            accept="image/*"
            onChange={handleGetFile}
            multiple={true}
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
