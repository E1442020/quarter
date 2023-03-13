import { Flex, Text, Title } from "@mantine/core";
import React from "react";
import {
  AiFillAccountBook,
  AiOutlineApi,
  AiOutlineBell,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FlexContainer } from "./ServicesStyle";
export default function Services() {
  return (
    <>
      <Flex direction="column" gap="40px" mt="100px">
        <Text color="gray">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </Text>
        <Flex
          justify="space-between"
          sx={(theme) => ({
            "@media (max-width: 940px)": {
              flexDirection: "column",
              gap: "25px",
            },
          })}
        >
          <FlexContainer
            direction="column"
            ta="center"
            w="33.33%"
            p="20px"
            gap="30px"
            align="center"
            justify="center"
          >
            <AiFillAccountBook size={40} style={{ color: "#FF5A3C" }} />
            <Title order={2}>Home Buying</Title>
            <Text color="gray">
              Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
              eiusmod te mp or
            </Text>
            <Flex align="center" gap="10px">
              {" "}
              <Text color="gray" fw="700">
                Read More
              </Text>{" "}
              <AiOutlineArrowRight style={{ color: "#FF5A3C" }} />
            </Flex>
          </FlexContainer>

          <FlexContainer
            direction="column"
            ta="center"
            w="33.33%"
            p="20px"
            gap="30px"
            align="center"
            justify="center"
          >
            <AiOutlineApi size={40} style={{ color: "#FF5A3C" }} />
            <Title order={2}>Home Selling</Title>
            <Text color="gray">
              Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
              eiusmod te mp or
            </Text>
            <Flex align="center" gap="10px">
              {" "}
              <Text color="gray" fw="700">
                Read More
              </Text>{" "}
              <AiOutlineArrowRight style={{ color: "#FF5A3C" }} />
            </Flex>{" "}
          </FlexContainer>

          <FlexContainer
            direction="column"
            ta="center"
            w="33.33%"
            p="20px"
            gap="30px"
            align="center"
            justify="center"
          >
            <AiOutlineBell size={40} style={{ color: "#FF5A3C" }} />
            <Title order={2}>Escrow Services</Title>
            <Text color="gray">
              Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
              eiusmod te mp or
            </Text>
            <Flex align="center" gap="10px">
              {" "}
              <Text color="gray" fw="700">
                Read More
              </Text>{" "}
              <AiOutlineArrowRight style={{ color: "#FF5A3C" }} />
            </Flex>
          </FlexContainer>
        </Flex>
        <Text color="gray">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </Text>
      </Flex>
    </>
  );
}
