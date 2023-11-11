// import { useState } from "react";
import { StyleSheet, ImageBackground, View, Text } from "react-native";
import RegistrationContainer from "../components/RegistrationContainer";

const RegistrationScreen = () => {
  return (
    // <View style={styles.container}>
    <ImageBackground
      source={require("../assets/images/BG/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <RegistrationContainer />
      {/* <Text style={styles.text}>Didassa</Text> */}
    </ImageBackground>
    // </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default RegistrationScreen;
