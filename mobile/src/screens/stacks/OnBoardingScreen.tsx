import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../navigations/StackNavigator";
import PrimaryButton from "../../components/common/PrimaryButton";
import { dimensions } from "../../theme/dimensions.theme";
import { bg_colors } from "../../theme/color.theme";
import { StatusBar } from "expo-status-bar";

type Props = NativeStackScreenProps<StackParamList, "Onboarding">;

const OnboardingScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark"/>
      <Image
        source={require("../../../assets/images/onboarding-fashion.jpg")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to Fashiq 👗</Text>
        <Text style={styles.subtitle}>
          Discover, shop, and organize your dream wardrobe effortlessly.
        </Text>
      </View>

      <View>
        <PrimaryButton
          title="Get Started"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: dimensions.width * 0.07,
  },
  image: {
    width: "100%",
    height: dimensions.height * 0.45,
    borderRadius: 20,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontFamily: "poppins-semibold",
    fontSize: 24,
    color: bg_colors.active_bg,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    lineHeight: 25
  },
});
