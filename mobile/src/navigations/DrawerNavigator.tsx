import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Achievement from "../../src/screens/drawer/Achievement";
import { Ionicons } from "@expo/vector-icons";
import { bg_colors, label_colors } from "../theme/color.theme";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={({ navigation }) => ({
      headerLeft: () => (
        <Ionicons
          name="menu"
          size={28}
          color="black"
          style={{ marginLeft: 15 }}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
      headerShown: false,
      drawerLabelStyle: {
        fontFamily: "poppins-medium"
      },
      drawerActiveBackgroundColor: bg_colors.active_bg,
      drawerActiveTintColor: label_colors.button_text
    })}
  >
    <Drawer.Screen
      name="MainTabs"
      component={TabNavigator}
      options={{ title: "Home" }}
    />
    <Drawer.Screen name="Achievements" component={Achievement} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
