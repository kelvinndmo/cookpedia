import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CookingLevel from "../screens/onboarding/cooking-level";
import CuisinePreferences from "../screens/onboarding/cuisine-preferences";
import DietaryPreferences from "../screens/onboarding/dietary-preferences";

const OnboardingStack = createNativeStackNavigator();

const OnboardingStackNavigator = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <OnboardingStack.Screen name="CookingLevel" component={CookingLevel} />
      <OnboardingStack.Screen
        name="CuisinePreferences"
        component={CuisinePreferences}
      />
      <OnboardingStack.Screen
        name="DietaryPreferences"
        component={DietaryPreferences}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingStackNavigator;
