import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./DrawerNavigator";
import OnboardingScreen from "../screens/stacks/OnBoardingScreen";
import LoginScreen from "../screens/stacks/Login";
import SignupScreen from "../screens/stacks/Signup";

export type StackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Signup: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Main" component={DrawerNavigator} />
  </Stack.Navigator>
);

export default StackNavigator;
