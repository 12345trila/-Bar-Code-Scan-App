import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  

  return (
    <View style={styles.container}>
      <Image source={require("./assets/iconcarot.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6DBE45", // Màu nền xanh lá
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    resizeMode: "contain",
  },
});

export default SplashScreen;
