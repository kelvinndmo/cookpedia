import { View, Text, Box } from "native-base";
import React, { FC } from "react";

interface CookingLevelCardProps {
  title: string;
  description: string;
}

const CookingLevelCard: FC<CookingLevelCardProps> = ({
  title,
  description,
}) => {
  return (
    <Box
      width="100%"
      borderWidth="1"
      borderColor="gray.300"
      mt="5"
      borderRadius="md"
      paddingY="3"
      paddingX="2"
    >
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text fontSize="sm" color="gray.600" marginTop="2">
        {description}
      </Text>
    </Box>
  );
};

export default CookingLevelCard;
