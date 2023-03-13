import { Flex, Text } from "@mantine/core";
import React from "react";

export default function BasicInfo() {
  return (
    <>
      <Flex direction="column" gap="50px" c="gray">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>

        <Flex
          justify="space-between"
          w="90%"
          sx={(theme) => ({
            "@media (max-width: 940px)": {
              flexDirection: "column",
              gap: "10px",
              width: "90%",
            },
          })}
        >
          <Flex
            direction="column"
            gap="md"
            w="40%"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                width: "90%",
              },
            })}
          >
            <Flex justify="space-between">
              <Text fw="600">Positions:</Text>
              <Text> Senior Property Seller</Text>
            </Flex>
            <Flex justify="space-between">
              <Text fw="600">Experience:</Text>
              <Text> 10+ Years</Text>
            </Flex>
            <Flex justify="space-between">
              <Text fw="600">Location:</Text>
              <Text> 13/A, NYC</Text>
            </Flex>
            <Flex justify="space-between">
              <Text fw="600">Practice Area:</Text>
              <Text> Property Seller</Text>
            </Flex>
          </Flex>

          <Flex
            direction="column"
            gap="md"
            w="40%"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                width: "90%",
              },
            })}
          >
            <Flex justify="space-between">
              <Text fw="600">Email:</Text>
              <Text> example@example.com</Text>
            </Flex>
            <Flex justify="space-between">
              <Text fw="600">Fax:</Text>
              <Text> +0123-456 789</Text>
            </Flex>
            <Flex justify="space-between">
              <Text fw="600">Phone:</Text>
              <Text> +0123-456 789</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
