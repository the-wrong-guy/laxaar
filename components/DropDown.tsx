import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { IDropDown } from "../utils/interfaces";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

export default function DropDown({
  placeholder,
  data,
  dropdownStyle,
}: IDropDown) {
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={[styles.dropdown, dropdownStyle]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data}
      maxHeight={280}
      labelField='label'
      valueField='value'
      placeholder={placeholder}
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      containerStyle={{ borderRadius: 8, top: -30, width: 157 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    position: "relative",
  },
  dropdown: {
    height: 36,
    borderColor: "rgba(151, 168, 190, 1)",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    flex: 1,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    // left: 22,
    // top: 8,
    zIndex: 999,
    // paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 13,
    fontFamily: "Inter600",
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: "Inter500",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
