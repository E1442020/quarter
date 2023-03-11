import { Box, Flex, Title, Text } from "@mantine/core";
import React from "react";
import { Tabs } from '@mantine/core';
import ApartmentCard from "./ApartmentCard";


export default function ApartmentSketch() {
  return (
    <>
      <Box my="150px">
        <Box w="90%" mx='auto'>
          <Flex direction="column" justify="center" align="center" gap="md">
            <Text color='#FF5A3C' bg='#FFEEEB' px='10px'>Apartment Sketch</Text>
            <Title order={3} size='50px'>Apartments Plan</Title>
          </Flex>
          <Box mt='50px'>
          <Tabs color="orange" defaultValue="The Studio">
      <Tabs.List mx='auto' w='57%'
       sx={(theme) => ({
        "@media (max-width: 940px)": {
          width: "100%",
        },
      })} >
        <Tabs.Tab value="The Studio" ><Text size='lg' fw='bold'>The Studio</Text></Tabs.Tab>
        <Tabs.Tab value="Deluxe Portion"><Text size='lg' fw='bold'>Deluxe Portion</Text></Tabs.Tab>
        <Tabs.Tab value="Penthouse" ><Text size='lg' fw='bold'>Penthouse</Text></Tabs.Tab>
        <Tabs.Tab value="Top Garden" ><Text size='lg' fw='bold'>Top Garden</Text></Tabs.Tab>
        <Tabs.Tab value="Double Height" ><Text size='lg' fw='bold'>Double Height</Text></Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="The Studio" pt="xs">
       <ApartmentCard name='The Studio'/>
      </Tabs.Panel>

      <Tabs.Panel value="Deluxe Portion" pt="xs">
      <ApartmentCard name='Deluxe Portion'/>
      </Tabs.Panel>

      <Tabs.Panel value="Penthouse" pt="xs">
      <ApartmentCard name='Penthouse'/>
      </Tabs.Panel>

      <Tabs.Panel value="Top Garden" pt="xs">
      <ApartmentCard name='Top Garden'/>
      </Tabs.Panel>

      <Tabs.Panel value="Double Height" pt="xs">
      <ApartmentCard name='Double Height'/>
      </Tabs.Panel>
    </Tabs>
          </Box>
        </Box>
      </Box>
    </>
  );
}
