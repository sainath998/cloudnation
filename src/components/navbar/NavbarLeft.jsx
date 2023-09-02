import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {ReactComponent as WebAppsIcon}  from "../img/svgs/webapps.svg";
import {ReactComponent as DatastoreIcon}  from "../img/svgs/database.svg";
import {ReactComponent as ClustersIcon}  from "../img/svgs/Clusters.svg";

const Navitem = ({ isActive, children, icon }) => (
  <Flex alignItems="center" gap="0.5rem">
    {icon && (
      <Box as={icon} width="20px" height="20px" fill={isActive ? "#9837CA" : "#070707"} />
    )}
    <Text color={isActive ? "#9837CA" : "#070707"}>{children}</Text>
  </Flex>
);

export default function NavbarLeft() {
  return (
    <Flex gap="2rem">
      {/* Use the imported SVG components for each Navitem */}
      <Navitem isActive={true} icon={WebAppsIcon}>
        Web Apps
      </Navitem>
      <Navitem icon={DatastoreIcon}>Datastore</Navitem>
      <Navitem icon={ClustersIcon}>Clusters</Navitem>
    </Flex>
  );
}
