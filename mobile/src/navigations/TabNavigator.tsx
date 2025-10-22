import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../src/screens/tabs/Home";
import Profile from "../../src/screens/tabs/Profile";
import { bg_colors, label_colors } from "../theme/color.theme";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarLabelStyle: { fontFamily: "poppins-semibold", fontSize: 11 },
      tabBarActiveTintColor: bg_colors.active_bg,
      tabBarIcon: () => null
    }}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigator;
