import React from "react";

export interface IDropDown {
  placeholder: string;
  data: IDropDownItem[];
  dropdownStyle?: React.CSSProperties;
}

export interface IDropDownItem {
  label: string;
  value: string;
}
