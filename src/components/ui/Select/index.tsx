"use client";

import React from "react";

import ReactSelect from "react-select";

import type {GroupBase} from "react-select";
import type {Props} from "react-select/dist/declarations/src/Select";

function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: Props<Option, IsMulti, Group>) {
  return (
    <ReactSelect
      {...props}
      className={`react-select ${props.className}`}
      theme={(theme) => ({
        ...theme,
        borderRadius: 8,
      })}
      styles={{
        menu: (provided) => ({...provided, zIndex: 9999}),
      }}
    />
  );
}

export default Select;
