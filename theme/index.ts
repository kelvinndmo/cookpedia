import { extendTheme } from "native-base";

const primary = {
  50: "#fbe6ec",
  100: "#f8cdd8",
  200: "#f4b5c5",
  300: "#f19cb1",
  400: "#ed839e",
  500: "#e96a8b",
  600: "#db073d",
  700: "#e23964",
  800: "#df2050",
  900: "#db073d",
};

const secondary = {
  50: "#fff5e6",
  100: "#ffeacc",
  200: "#ffe0b3",
  300: "#ffd699",
  400: "#ffcc80",
  500: "#ffc166",
  600: "#ffb74d",
  700: "#ffad33",
  800: "#ffa21a",
  900: "#ff9800",
};

const theme = extendTheme({
  colors: {
    // Add new color
    primary,
    secondary,

    amber: {
      400: "#d97706",
    },
  },
  components: {
    Buttton: {
      solid: {
        bg: "red",
      },
    },
  },
  fontConfig: {
    urbanist: {
      100: {
        normal: "Urbanist_100Thin",
        italic: "Urbanist_100Thin_Italic",
      },
      200: {
        normal: "Urbanist_200ExtraLight",
        italic: "Urbanist_200ExtraLight_Italic",
      },
      300: {
        normal: "Urbanist_300Light",
        italic: "Urbanist_300Light_Italic",
      },
      400: {
        normal: "Urbanist_400Regular",
        italic: "Urbanist_400Regular_Italic",
      },
      500: {
        normal: "Urbanist_500Medium",
        italic: "Urbanist_500Medium_Italic",
      },
      600: {
        normal: "Urbanist_600SemiBold",
        italic: "Urbanist_600SemiBold_Italic",
      },
      700: {
        normal: "Urbanist_700Bold",
        italic: "Urbanist_700Bold_Italic",
      },
      800: {
        normal: "Urbanist_800ExtraBold",
        italic: "Urbanist_800ExtraBold_Italic",
      },
      900: {
        normal: "Urbanist_900Black",
        italic: "Urbanist_900Black_Italic",
      },
    },
  },
  fonts: {
    heading: "urbanist",
    body: "urbanist",
    mono: "urbanist",
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "light",
  },
});

export default theme;
