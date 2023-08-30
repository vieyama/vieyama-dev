"use client";

import React from "react";

import {Combobox} from "@headlessui/react";

import {cn} from "~/utils/tailwind-utils";

interface AutoCompleteProps {
  options: {id: string; value: string}[];
  className?: string;
  onChange?(value: unknown): void;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
  className,
  options,
  onChange,
}) => {
  const [query, setQuery] = React.useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.value.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <Combobox onChange={onChange}>
      <Combobox.Input
        className={cn(
          "block h-9 w-full rounded-lg border border-gray-300 bg-white p-2.5 text-base text-gray-900 outline-none placeholder:text-sm placeholder:text-gray-400 focus:border-blue-500",
          className,
        )}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Combobox.Options className="absolute z-30 w-96 border border-stroke bg-white">
        {filteredOptions.map((option) => (
          <Combobox.Option
            key={option.id}
            value={option.id}
            className="cursor-pointer p-2 hover:bg-gray-100">
            {option.value}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default AutoComplete;
