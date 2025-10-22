import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { bg_colors } from "../../theme/color.theme";
import { dimensions } from "../../theme/dimensions.theme";

interface Props {
  title: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<Props> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: bg_colors.active_bg,
    borderRadius: 25,
    paddingVertical: dimensions.height * 0.016,
    alignItems: "center",
    paddingHorizontal: dimensions.width * 0.3,
  },
  text: {
    color: "#fff",
    fontFamily: "poppins-medium",
  },
});
