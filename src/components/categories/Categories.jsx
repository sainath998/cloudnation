import { Box, Center, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Category from "./Category";


export default function Categories() {
  return (
    <Box width="80%" margin="auto" padding="5.5rem 0rem">
      <Box paddingBottom="2.5rem">
        <Heading paddingBottom="1rem">Get Started</Heading>
        <Text>
          Choose what you want to deploy and we’ll get it done in seconds
        </Text>
      </Box>
      <Grid
        templateColumns={`repeat(3, 370px)`}
        gap="20px" 
        justifyContent="center"
      >
        <GridItem>
          <Category
            borderRadius="1.8rem"
            border=" 0.75px solid #DDD"
            background="#FFFEED"
            heading="New App"
            description="Get started on building your app! Provide the details to begin the creation process. Our platform will generate the structure for your functional app aligned with your vision."
            buttonText="create app"
            maxWidth="37rem"
          />
        </GridItem>
        <GridItem>
          <Category
            borderRadius="1.8rem"
            border=" 0.75px solid #DDD"
            background="#FFEEED"
            heading="New Cluster"
            description="Set up a scalable computing environment! Create a cluster for optimal performance, availability, and scalability. Handle traffic, respond faster, and scale effortlessly."
            buttonText="Create Cluster"
            maxWidth="37rem"
          />
        </GridItem>
        <GridItem>
          <Category
            borderRadius="1.8rem"
            border=" 0.75px solid #DDD"
            background="#EDFFFA"
            heading="New Datastore"
            description="Establish secure storage for your app's data. Create a datastore for managing critical information. Ensure integrity and accessibility for reliable app services."
            buttonText="Create Datastore"
            maxWidth="37rem"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Category
            borderRadius="1.8rem"
            border=" 0.75px solid #DDD"
            background="#FFF6EC"
            heading="Connect "
            description="Connect to your favourite Repositories wherever they are."
            buttonText="Create Cluster"
            maxWidth="74rem"
          />
        </GridItem>
        <GridItem>
          <Category
            borderRadius="1.8rem"
            border=" 0.75px solid #DDD"
            background="#F3EDFF"
            heading="Documentation"
            description="Establish secure storage for your app's data. Create a datastore for managing critical information. Ensure integrity and accessibility for reliable app services."
            buttonText="View Docs"
            maxWidth="37rem"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}