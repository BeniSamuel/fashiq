import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Achievement from "../../src/screens/drawer/Achievement";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="MainTabs" component={TabNavigator} options={{ title: "Home" }} />
    <Drawer.Screen name="Achievements" component={Achievement} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
