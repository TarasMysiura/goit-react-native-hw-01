import React, { useState } from "react";
import {
  Text,
  avatarContainer,
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
import {
  registrationContainer,
  contentWrapper,
  // avatarContainer,  
  avatar,
  addImageBtn,
  addBtnIcon,
  registrationHeaderTitle,
  input,
  text,
  inputPasswordWraper,
  passwordShowText,
  passwordShowButton,
  registerButton,
  registerButtonText,
} from "./RegistrationContainer.styled";
// import { useDispatch } from "react-redux";

// import { StatusBar } from "expo-status-bar";
// import { AntDesign } from "@expo/vector-icons";
// import { Header } from "react-native/Libraries/NewAppScreen";

const initialFormData = {
  login: "",
  email: "",
  password: "",
};

const RegistrationContainer = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  // const handleLogin = (text) => setLogin(text);
  // const handleEmail = (text) => setEmail(text);
  // const handlePassword = (text) => setPassword(text);

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
    setIsKeyboardShown(false);
  }

  function handleSubmit() {
    console.log(formData);
    resetForm();
    hideKeyboard();
    dispatch(register());
  }

  function handleFocus() {
    setIsKeyboardShown(true);
  }

  const showPassword = () => setIsShowPassword((prev) => !prev);

  return (
    <View style={registrationContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={contentWrapper}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={avatarContainer}>
              <Image
                style={avatar}
                source={require("../assets/images/noPhoto.jpg")}
                resizeMode="cover"
              />
              <TouchableOpacity style={addImageBtn} activeOpacity={0.7}>
                <Image
                  style={addBtnIcon}
                  source={require("../assets/images/Icons/addBtnIcon.png")}
                />
              </TouchableOpacity>
              
            </View>

            <Text style={registrationHeaderTitle}>Реєстрація</Text>
            <TextInput
              // value={login}
              onChangeText={(data) =>
                setFormData((prevData) => ({ ...prevData, login: data }))
              }
              placeholder="Логін"
              style={input}
              value={formData.email}
              onFocus={handleFocus}
            />
            <TextInput
              // value={email}
              onChangeText={(data) =>
                setFormData((prevData) => ({ ...prevData, email: data }))
              }
              placeholder="Адреса електронної пошти"
              style={input}
              // onFocus={handleEmail}
            />

            <View style={inputPasswordWraper}>
              <TextInput
                // value={password}
                onChangeText={(data) =>
                  setFormData((prevData) => ({ ...prevData, password: data }))
                }
                placeholder="Пароль"
                secureTextEntry={!isShowPassword}
                style={input}
                // onFocus={handlePassword}
              />
              <TouchableOpacity
                style={passwordShowButton}
                activeOpacity={0.6}
                onPress={showPassword}
              >
                <Text style={passwordShowText}>
                  {isShowPassword ? "Сховати" : "Показати"}
                </Text>
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
