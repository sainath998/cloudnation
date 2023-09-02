import React from "react";
import { Box, Flex, Heading, Input } from "@chakra-ui/react";

import { NavbarLeft, NavbarRight } from "./index.js";

export default function Navbar() {
  return (
    <Box>
      <Flex
        justifyContent="space-between"
        padding="1.25rem 8.1rem"
        backgroundColor="#F6F6F6"
      >
        <NavbarLeft />
        <NavbarRight />
      </Flex>
    </Box>
  );
}
