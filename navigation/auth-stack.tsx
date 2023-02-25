import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccount from "../screens/onboarding/create-account";

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
