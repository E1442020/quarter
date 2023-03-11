import { Box, Flex, Title, Text } from "@mantine/core";
import React from "react";
import AminitiesCard from "./AminitiesCard";
import { AminitiesData } from "./AminitiesData";

export default function Aminities() {
  return (
    <>
      <Box mt="70px">
        <Box
          w="40%"
          mx="auto"
          ta="center"
          mb="50px"
          sx={(theme) => ({
            "@media (max-width: 940px)": {
              width: "90%",
            },
          })}
        >
          <Text
            bg="#FFEEEB"
            color="#FF5A3C"
            px="10px"
            w="30%"
            mx="auto"
            mb="md"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                width: "60%",
              },
            })}
          >
            Our Aminities
          </Text>
          <Title order={2} size="50px">
            Building Aminities
          </Title>
        </Box>
        <Flex w="90%" mx="auto" gap="20px" wrap="wrap" justify="space-between">
          {AminitiesData.map((card) => {
            return (
              <AminitiesCard icon={<card.icon size={35} />} name={card.name} />
            );
          })}
        </Flex>
      </Box>
    </>
  );
}
