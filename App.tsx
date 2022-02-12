import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import {
  useFonts,
  Inter_600SemiBold as Inter600,
  Inter_400Regular as Inter400,
  Inter_500Medium as Inter500,
} from "@expo-google-fonts/inter";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "./components/SearchBar";
import LocationIcon from "./assets/svg-icons/location";
import FoodCard from "./components/FoodCard";
import DropDown from "./components/DropDown";
import BackArrowIcon from "./assets/svg-icons/backArrow";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter400,
    Inter500,
    Inter600,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const proximityDropDownOptions = [
    { label: "< 10km", value: "1" },
    { label: "10km - 20km", value: "2" },
    { label: "20km - 30km", value: "3" },
    { label: "30km - 40km", value: "4" },
    { label: ">40km", value: "5" },
  ];

  const ratingDropDownOptions = [
    { label: "Any", value: "1" },
    { label: "5 stars", value: "2" },
    { label: "4.5 stars", value: "3" },
    { label: "3 - 4 stars", value: "4" },
    { label: ">4 stars", value: "5" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.headerCon}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <BackArrowIcon />
          <View style={{ width: 16 }} />
          <Text style={styles.screenName}>Explore now!</Text>
        </View>
        <LocationIcon />
      </View>
      <SearchBar />
      <View style={styles.filterContainer}>
        <DropDown data={proximityDropDownOptions} placeholder='Proximity' />
        <View style={styles.filterDivider} />
        <DropDown data={ratingDropDownOptions} placeholder='Rating' />
        <View style={styles.filterDivider} />
        <View style={styles.filter3}>
          <Text style={styles.filterName}>Popular</Text>
        </View>
      </View>
      <ScrollView>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: { flexDirection: "row", marginBottom: 5 },
  filterName: { fontFamily: "Inter600", fontSize: 14 },
  filterDivider: { width: 10 },
  filter3: {
    borderWidth: 1,
    borderColor: "rgba(151,168,190,1)",
    width: 76,
    height: 36,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  screenName: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 23,
    letterSpacing: 0,
    color: "rgba(45,55,72,1)",
    fontFamily: "Inter600",
  },
  headerCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 10,
  },
});
