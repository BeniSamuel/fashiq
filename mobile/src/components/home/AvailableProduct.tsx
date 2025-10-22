import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { dimensions } from "../../theme/dimensions.theme";

const AvailableProduct = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Available Products</Text>
      </View>

      <View></View>
    </View>
  );
};

export default AvailableProduct;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimensions.height * 0.035,
  },
  title: {
    fontFamily: "poppins-medium"
  }
});
