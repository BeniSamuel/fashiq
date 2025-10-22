import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import InputField from "../../components/common/InputField";
import PrimaryButton from "../../components/common/PrimaryButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../navigations/StackNavigator";
import { bg_colors } from "../../theme/color.theme";
import { StatusBar } from "expo-status-bar";

type Props = NativeStackScreenProps<StackParamList, "Signup">;

const SignupScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Create Your Account</Text>

      <View>
        <InputField placeholder="Full Name" />
        <InputField placeholder="Email" keyboardType="email-address" />
        <InputField placeholder="Password" secureTextEntry />
      </View>

      <PrimaryButton title="Sign Up" onPress={() => console.log("Signup")} />

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: 12
  },
  title: {
    fontFamily: "poppins-bold",
    fontSize: 22,
    color: bg_colors.active_bg,
    marginBottom: 25,
    textAlign: "center",
  },
  loginText: {
    textAlign: "center",
    marginTop: 20,
    fontFamily: "poppins-regular",
  },
  loginLink: {
    fontFamily: "poppins-semibold",
    color: bg_colors.active_bg,
  },
});
