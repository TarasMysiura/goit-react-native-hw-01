import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  registrationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    justifyContent: "flex-end",
    paddingBottom: 30,
    //   width: "100%",
    //   height: "100%",
    //   justifyContent: "flex-end",
  },
  contentWrapper: {
    paddingHorizontal: 16,
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  registrationHeaderTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,
    color: "#212121",
  },
  input: {
    height: 50,
    fontSize: 16,
    padding: 16,
    marginBottom: 16,

    color: "#212121",
    backgroundColor: "#f6f6f6",

    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  inputPasswordWraper: {
    position: "relative",
  },
  passwordShowText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  passwordShowButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  registerButton: {
    display: "flex",
    width: 343,
    paddingHorizontal: 16,
    paddingVertical: 32,

    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  registerButtonText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
});
export const {
  registrationContainer,
  contentWrapper,
  registrationHeaderTitle,
  input,
  text,
  inputPasswordWraper,
  passwordShowText,
  passwordShowButton,
  registerButton,
  registerButtonText,
} = styles;
