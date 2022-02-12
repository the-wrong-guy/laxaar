import React from "react";
import { View, Text, TextInput } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import SearchIcon from "../assets/svg-icons/search";

export default function SearchBar() {
  return (
    <View
      style={{
        height: 36,
        marginVertical: 24,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "rgba(151, 168, 190, 1)",
        borderRadius: 8,
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 9,
      }}
    >
      <SearchIcon />
      <View style={{ width: 8 }} />
      <TextInput
        placeholder='Search...'
        placeholderTextColor='rgba(151, 168, 190, 1)'
        style={{ textDecorationLine: "none", flex: 1 }}
      />
    </View>
  );
}
