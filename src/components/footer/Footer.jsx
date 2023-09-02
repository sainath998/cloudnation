import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box>
      {/* flex with 2 flex insidde it from chakra ui */}
      <Flex justifyContent="space-between" padding="7rem">
        <Flex gap="2.5rem">
          <Text>© CloudNation 2023</Text>
          <Text>Support</Text>
          <Text>Documentation</Text>
        </Flex>
        <Flex gap="2rem">
          <Text>Privacy</Text>
          <Text>Terms of Service</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
