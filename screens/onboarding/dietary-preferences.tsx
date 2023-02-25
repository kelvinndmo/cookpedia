import { View, Text, Button } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Box, Icon } from "native-base";
import ProgressBar from "../../components/onboarding/progress-bar";
import { FlatGrid } from "react-native-super-grid";
import cusinePreferences, {
  dietaryPreferences,
} from "../../constants/cuisine-preferences";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DietaryPreferences = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <Box position="relative" flexGrow={1} flex={1} safeAreaTop={12}>
      <Box paddingX="5" marginTop="5">
        <Box mb="8" alignItems="center" flexDir="row">
          <Icon name="arrow-back" as={Ionicons} size="xl" color="black" />
          <ProgressBar progressWidth="30%" />
        </Box>
        <Text fontWeight="bold" fontSize="3xl">
          Do you have any dietary {"\n"} preferences? ⚙️
        </Text>
        <Box marginTop="5">
          <FlatGrid
            data={dietaryPreferences}
            itemDimension={width * 0.3}
            renderItem={({ item }) => (
              <Box
                borderWidth="1"
                paddingY="3"
                justifyContent="center"
                alignItems="center"
                borderColor="gray.300"
                borderRadius="lg"
                flexDir="row"
                justifyItems="space-between"
              >
                <Text fontSize="xl">{item.icon}</Text>
                <Text ml="5" fontWeight="bold">
                  {item.name}
                </Text>
              </Box>
            )}
            spacing={14}
          />
        </Box>
      </Box>
      <Box
        borderTopWidth="1"
        borderTopColor="gray.200"
        position="absolute"
        paddingY="12"
        bottom={0}
        width="100%"
        paddingX="5"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
      >
        <Button
          onPress={() => navigation.navigate("DietaryPreferences")}
          colorScheme="primary"
          borderRadius="full"
          width="40%"
          variant="subtle"
        >
          Skip
        </Button>
        <Button
          onPress={() => navigation.navigate("DietaryPreferences")}
          colorScheme="primary"
          borderRadius="full"
          width="40%"
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default DietaryPreferences;
