import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, Button, Icon, Text } from "native-base";
import React from "react";
import CookingLevelCard from "../../components/cooking-level-card";
import ProgressBar from "../../components/onboarding/progress-bar";

const cookinglevels = [
  {
    title: "Novice",
    description:
      "Basic understanding of kitchen tools and basic cooking techniques such as boiling and frying.",
  },
  {
    title: "Intermediate",
    description:
      "Ability to follow recipes, prepare simple dishes, and use a variety of kitchen tools.",
  },
  {
    title: "Advanced",
    description:
      "Ability to prepare complex dishes, use a variety of kitchen tools, and follow recipes.",
  },
];

const CookingLevel = () => {
  const navigation = useNavigation();
  return (
    <Box position="relative" flexGrow={1} flex={1} safeAreaTop={12}>
      <Box paddingX="5" marginTop="5">
        <Box mb="8" alignItems="center" flexDir="row">
          <Icon name="arrow-back" as={Ionicons} size="xl" color="black" />
          <ProgressBar progressWidth="30%" />
        </Box>
        <Text fontWeight="bold" fontSize="3xl">
          What is your cooking {"\n"} level? 🍳
        </Text>
        <Text fontSize="md" marginTop="3">
          Please select your cooking level for better recommendations
        </Text>
        <Box marginTop="5">
          {cookinglevels.map((level, index) => (
            <CookingLevelCard {...level} key={level.title} />
          ))}
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
      >
        <Button
          onPress={() => navigation.navigate("CuisinePreferences")}
          colorScheme="primary"
          borderRadius="full"
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default CookingLevel;
