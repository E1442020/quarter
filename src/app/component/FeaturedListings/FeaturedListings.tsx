import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import FeaturedListingsCard from "./FeaturedListingsCard";
import { FeaturedListingsData } from "./FeaturedListingsData";
import { Carousel } from "@mantine/carousel";

export default function FeaturedListings() {
  return (
    <>
      <Box mt="100px">
        <Flex mb='lg' direction='column' gap='md' justify='center' align='center'>
          <Text bg="#F5DFDC" color="#FF5A3C" w="18%" ta="center">Properties</Text>
          <Title order={3} size='40px'>
Featured Listings</Title>

        </Flex>
        <Flex gap="md" w='90%' mx='auto' style={{overflow:"scroll"}}>
          
            
              {" "}
              {FeaturedListingsData.map((item) => {
                return (
                  <FeaturedListingsCard
                    img={item.img}
                    title={item.title}
                    key={item.id}
                  />
                );
              })}
           
          
        </Flex>
      </Box>
    </>
  );
}
