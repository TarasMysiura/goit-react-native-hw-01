import React from "react";
import { StyleSheet, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

const App = () => (
  <View style={styles.container}>
    <RegistrationScreen />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
