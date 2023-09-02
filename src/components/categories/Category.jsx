import React from "react";
import { Card, Heading,Text,Button,CardHeader, CardBody, CardFooter, Center, border, Box } from "@chakra-ui/react";

export default function Category({heading="heading",description="description",buttonText="buttonText" ,border,borderRadius,background,maxWidth}) {
  return (
     <Card padding="2.5rem" border={border} borderRadius={borderRadius} backgroundColor={background} maxWidth={maxWidth} height="100%">  
      <Box>
      <CardHeader>
        <Heading size="md">{heading}</Heading>
      </CardHeader>
      <hr style={{backgroundColor:"#555"}}/>
      </Box>
      <CardBody>
        <Text>{description}.</Text>
      </CardBody>
      <CardFooter flexDirection={"row-reverse"}>
        <Button padding="0.8rem" backgroundColor="#9837CA" color="#FFFFFF">{buttonText}</Button>
      </CardFooter>
    </Card>
  );
}
