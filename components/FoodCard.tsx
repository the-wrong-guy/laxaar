import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AirbnbRating } from "react-native-ratings";

export default function FoodCard() {
  const foodUrl =
    "https://s3-alpha-sig.figma.com/img/d57e/40c5/d0fdc0dde793e4d4e12b8d0eccd635e5?Expires=1645401600&Signature=Ue1c8~TWnwT46RCZe9BlSNtO2jlHqG0PRePLT35ziAY0xsSbJPArDkxtfwf02C7EONH3Fb-VeUzROvprO2jtGpM9afqFzYAdT2JKcRr-ty-a1tL7pifoj0NZtXZYG4FHPHjoEKz5XY9-xsgK0cI6x1Q1Ww5uiPyTyn2shgKqx0zJoGg7jk~4lLKlwKj50Gf6IQodm13LRgIXhXmw8GBx3hYSs0A6p6vc~bd-fazFFoBkFzzz8sdn-tTOblfwCmzNgVGj74TiGo-u6uS9otJTjWLh6TEv7UjD-e74vPDdQ-p5ncBhjeh5R70fE4z~tVkRMQ3vCbzchw1UcUrkjI5OYw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
  return (
    <View style={styles.container}>
      <Image source={{ uri: foodUrl }} style={styles.foodImg} />
      <View style={{ width: 16 }} />
      <View>
        <Text style={styles.bakeryName}>Ck Bakery</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.commonText}>4.5</Text>
          <AirbnbRating
            count={5}
            showRating={false}
            isDisabled
            defaultRating={4}
            size={13}
            selectedColor='rgba(223, 179, 0, 1)'
            ratingContainerStyle={styles.ratingContainer}
          />
          <Text style={styles.commonText}>(9k)</Text>
        </View>
        <Text style={styles.commonText}>Kolkata, India</Text>
        <Text style={styles.commonText}>
          <Text style={{ color: "red" }}>Closed </Text>; Opens 9 AM
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: { paddingHorizontal: 3, marginTop: 5 },
  container: { flexDirection: "row", alignItems: "center", marginTop: 24 },
  foodImg: { height: 110, width: 120, borderRadius: 8 },
  bakeryName: {
    fontFamily: "Inter600",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19,
    letterSpacing: 0,
    color: "rgba(45,55,72,1)",
  },
  commonText: {
    color: "rgba(105,109,122,1)",
    fontFamily: "Inter400",
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0,
    paddingTop: 6,
  },
});
