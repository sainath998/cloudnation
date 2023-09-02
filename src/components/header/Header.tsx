import React from "react";
import { Flex, Heading,Input } from "@chakra-ui/react";
import HeaderOptions from "./HeaderOptions";

export default function Header() {
  return (
    <header>
      <Flex padding="2rem 8.1rem" gap="10rem" alignItems="center" justifyContent="space-between">
        <Heading fontWeight= "semibold" fontSize="2.2rem" >CloudNation.</Heading>
        <Input placeholder="Quick Search" size='md' borderRadius="0.8rem" background="#FAFAFA" boxShadow="0px 0px 1px 0px rgba(0, 0, 0, 0.25)" maxWidth="45rem" padding="0.8rem 1.5rem 
         "/>
         <HeaderOptions/>
      </Flex>
    </header>
  );
}
