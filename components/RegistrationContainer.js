import React, { useState } from "react";
import {
  Text,
  // ImageBackground,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import styles, {
  contentWrapper,
  input,
  inputPasswordWraper,
  passwordShowButton,
  passwordShowText,
  registerButton,
  registerButtonText,
  registrationContainer,
  registrationHeaderTitle,
} from "./RegistrationContainer.styled";
// import { useDispatch } from "react-redux";

// import { StatusBar } from "expo-status-bar";
// import { AntDesign } from "@expo/vector-icons";
// import { Header } from "react-native/Libraries/NewAppScreen";

const RegistrationContainer = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePassword = (text) => setPassword(text);
  const handleLogin = (text) => setLogin(text);
  const handleEmail = (text) => setEmail(text);

  console.log("login: ", login);
  // console.log('email: ', email);
  // console.log('password: ', password);
  const showPassword = () => alert(`Your password is: ${password}`);

  return (
    <View style={registrationContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={contentWrapper}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <Text style={registrationHeaderTitle}>Реєстрація</Text>
            <TextInput
              // value={login}
              onChangeText={setLogin}
              placeholder="Логін"
              style={input}
              // onFocus={handleLogin}
            />
            <TextInput
              // value={email}
              onChangeText={setEmail}
              placeholder="Адреса електронної пошти"
              style={input}
              onFocus={handleEmail}
            />

            <View style={inputPasswordWraper}>
              <TextInput
                // value={password}
                onChangeText={setPassword}
                placeholder="Пароль"
                secureTextEntry
                style={input}
                onFocus={handlePassword}
              />
              <TouchableOpacity
                style={passwordShowButton}
                activeOpacity={0.5}
                onPress={showPassword}
              >
                <Text style={passwordShowText}>Показати</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={registerButton}
              activeOpacity={0.5}
              // onPress={register}
            >
              <Text style={registerButtonText}>Зареєструватися</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default RegistrationContainer;
