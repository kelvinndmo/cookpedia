import { Box } from "native-base";
import React, { FC } from "react";
import { useWindowDimensions } from "react-native";

interface ProgressBarProps {
  progressWidth: string;
}

const ProgressBar: FC<ProgressBarProps> = ({ progressWidth }) => {
  const { width } = useWindowDimensions();
  return (
    <Box
      marginLeft="10"
      borderRadius="full"
      backgroundColor="gray.200"
      width={width * 0.45}
      position="relative"
      height="3"
    >
      <Box
        position="relative"
        height="100%"
        width={progressWidth}
        backgroundColor="primary.900"
        borderRadius="full"
      />
    </Box>
  );
};

export default ProgressBar;
