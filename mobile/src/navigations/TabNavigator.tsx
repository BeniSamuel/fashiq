import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../src/screens/tabs/Home";
import Profile from "../../src/screens/tabs/Profile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigator;
