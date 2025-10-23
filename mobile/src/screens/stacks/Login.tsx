import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native";
import InputField from "../../components/common/InputField";
import PrimaryButton from "../../components/common/PrimaryButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../navigations/StackNavigator";
import { bg_colors, label_colors } from "../../theme/color.theme";
import { StatusBar } from "expo-status-bar";

type Props = NativeStackScreenProps<StackParamList, "Login">;

const LoginScreen = ({ navigation }: Props) => {
  const [remember, setRemember] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Login to Fashiq</Text>

      <View>
        <InputField placeholder="Email" keyboardType="email-address" />
        <InputField placeholder="Password" secureTextEntry />

        <View style={styles.row}>
          <View style={styles.rememberContainer}>
            <Switch
              value={remember}
              onValueChange={setRemember}
              trackColor={{ true: bg_colors.active_bg }}
            />
            <Text style={styles.rememberText}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.option_details}>
        <PrimaryButton
          title="Login"
          onPress={() => navigation.navigate("Main")}
        />
        
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signupText}>
            Don’t have an account?{" "}
            <Text style={styles.signupLink}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  title: {
    fontFamily: "poppins-bold",
    fontSize: 22,
    color: bg_colors.active_bg,
    marginBottom: 25,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    marginLeft: 6,
    fontFamily: "poppins-regular",
    fontSize: 13
  },
  forgot: {
    fontFamily: "poppins-medium",
    color: bg_colors.active_bg,
  },
  signupText: {
    textAlign: "center",
    marginTop: 20,
    fontFamily: "poppins-regular",
  },
  signupLink: {
    fontFamily: "poppins-semibold",
    color: bg_colors.active_bg,
  },
  option_details: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
});
