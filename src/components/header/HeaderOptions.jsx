import { Avatar, Badge, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Notification from "./Notification";
import { profileImageDataUrl } from "./constants";


export default function HeaderOptions() {
  return (
    <Flex gap="2rem" alignItems="center">
      <Badge
        variant="solid"
        colorScheme="green"
        padding="0.8rem 1.4rem"
        borderRadius="1rem"
        border="0.25px solid #DDD"
        backgroundColor="#F6E4FF"
      >
        <Text color="#9837CA">350 Credits Left</Text>
      </Badge>
      <Button
        colorScheme="blue"
        variant="outline"
        padding="1rem 1.4rem"
        borderRadius="1rem"
        backgroundColor="#9837CA"
        color="wheat"
        height="100%"
      >
        Add New
      </Button>
      <Notification />
      <Avatar name="Dan Abrahmov" src={profileImageDataUrl} borderRadius="4rem" />
    </Flex>
  );
}
