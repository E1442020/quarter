import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { ServicesContainer } from "./OurServicesStyle";
import icon1 from "../../../../../shared/images/icon1.png";
import icon2 from "../../../../../shared/images/icon2.png";
import icon3 from "../../../../../shared/images/icon3.png";

export default function OurServices() {
  return (
    <>
      <Box bg="#F2F6F7" mt="100px" ta="center" py="50px">
        <Flex direction="column" gap={30} w="90%" mx="auto">
          <Flex direction="column" gap={15} mx="auto">
            <Text color="#FF593C" bg="#F3E6E4" w="30%" mx="auto">
              Our Services
            </Text>
            <Title order={2} size="50px">
              Our Main Focus
            </Title>
          </Flex>
          <Flex w="90%" mx="auto" justify="space-between" gap="xl"
           sx={(theme) => ({
               
        
            '@media (max-width: 940px)': {
              
              flexDirection:'column',
              gap:'20px'
              
            },
          })}>
            <ServicesContainer>
              <Box w="140px" mx="auto">
                {" "}
                <img src={icon1} alt="" width="100%" />
              </Box>{" "}
              <Title order={2} size="30px">
                Buy a home
              </Title>
              <Text color="gray">
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home
              </Text>
              <Text>Find Home</Text>
            </ServicesContainer>
            <ServicesContainer>
              <Box w="140px" mx="auto">
                {" "}
                <img src={icon2} alt="" width="100%" />
              </Box>{" "}
              <Title order={2} size="30px">
                Rent a home
              </Title>
              <Text color="gray">
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home
              </Text>
              <Text>Find Home</Text>
            </ServicesContainer>
            <ServicesContainer>
              <Box w="140px" mx="auto">
                {" "}
                <img src={icon3} alt="" width="100%" />
              </Box>{" "}
              <Title order={2} size="30px">
                Sell a home
              </Title>
              <Text color="gray">
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home
              </Text>
              <Text>Find Home</Text>
            </ServicesContainer>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
