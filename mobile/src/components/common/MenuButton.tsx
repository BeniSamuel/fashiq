// MenuButton.tsx
import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { DrawerNavigationProp } from "@react-navigation/drawer";

const MenuButton = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Ionicons name="menu" size={25} color="black" />
    </TouchableOpacity>
  );
};

export default MenuButton;
