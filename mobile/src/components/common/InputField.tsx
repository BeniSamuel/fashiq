import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { bg_colors } from "../../theme/color.theme";

const InputField: React.FC<TextInputProps> = (props) => {
  return <TextInput style={styles.input} placeholderTextColor="#b0ababff" {...props} />;
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(223, 216, 218, 0.25)",
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontFamily: "poppins-regular",
    fontSize: 14,
  },
});
