import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Urbanist_100Thin,
  Urbanist_100Thin_Italic,
  Urbanist_200ExtraLight,
  Urbanist_200ExtraLight_Italic,
  Urbanist_300Light,
  Urbanist_300Light_Italic,
  Urbanist_400Regular,
  Urbanist_400Regular_Italic,
  Urbanist_500Medium,
  Urbanist_500Medium_Italic,
  Urbanist_600SemiBold,
  Urbanist_600SemiBold_Italic,
  Urbanist_700Bold,
  Urbanist_700Bold_Italic,
  Urbanist_800ExtraBold,
  Urbanist_800ExtraBold_Italic,
  Urbanist_900Black,
  Urbanist_900Black_Italic,
} from "@expo-google-fonts/urbanist";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { NativeBaseProvider } from "native-base";
import theme from "./theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    // thin: Urbanist_100Thin,
    // thinItalic: Urbanist_100Thin_Italic,
    // extraLight: Urbanist_200ExtraLight,
    // extraLightItalic: Urbanist_200ExtraLight_Italic,
    // light: Urbanist_300Light,
    // lightItalic: Urbanist_300Light_Italic,
    // regular: Urbanist_400Regular,
    // regularItalic: Urbanist_400Regular_Italic,
    // medium: Urbanist_500Medium,
    // mediumItalic: Urbanist_500Medium_Italic,
    // semiBold: Urbanist_600SemiBold,
    // semiBoldItalic: Urbanist_600SemiBold_Italic,
    // bold: Urbanist_700Bold,
    // boldItalic: Urbanist_700Bold_Italic,
    // extraBold: Urbanist_800ExtraBold,
    // extraBoldItalic: Urbanist_800ExtraBold_Italic,
    // black: Urbanist_900Black,
    // blackItalic: Urbanist_900Black_Italic,
    Urbanist_100Thin,
    Urbanist_100Thin_Italic,
    Urbanist_200ExtraLight,
    Urbanist_200ExtraLight_Italic,
    Urbanist_300Light,
    Urbanist_300Light_Italic,
    Urbanist_400Regular,
    Urbanist_400Regular_Italic,
    Urbanist_500Medium,
    Urbanist_500Medium_Italic,
    Urbanist_600SemiBold,
    Urbanist_600SemiBold_Italic,
    Urbanist_700Bold,
    Urbanist_700Bold_Italic,
    Urbanist_800ExtraBold,
    Urbanist_800ExtraBold_Italic,
    Urbanist_900Black,
    Urbanist_900Black_Italic,
  });

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <SafeAreaProvider style={{ flex: 1, flexGrow: 1 }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar style="dark" />
        </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }
}
